const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";


const container = document.getElementById("container");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");




let allIssues = [];


async function load() {
  loader.style.display = "block";

  try {
    const res = await fetch(API);
    const data = await res.json();

    allIssues = data.data;
    render(allIssues);

  } catch (err) {
    console.log(err);
    container.innerHTML = "<h3>Failed to load data</h3>";
  }

  loader.style.display = "none";
}


const iconMap = {
  bug: `<i class="fa-solid fa-bug"></i>`,
  "help wanted": `<i class="fa-solid fa-handshake-angle"></i>`,
  enhancement: `<i class="fa-solid fa-snowflake"></i>`,
  documentation: `<i class="fa-solid fa-file"></i>`,
  "good first issue": `<i class="fa-solid fa-circle"></i>`
};


function renderLabels(labels) {
  return labels.map(l => {
    const key = l.toLowerCase();
    const icon = iconMap[key] || "";
    const cls = key.replace(/\s+/g, '-');
    return `<span class="label ${cls}">${icon} ${l}</span>`;
  }).join("");
}


function setTab(btn, status) {
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  if (status === "all") {
    render(allIssues);
  } else {
    const filtered = allIssues.filter(i => i.status === status);
    render(filtered);
  }
}


function render(data) {
  container.innerHTML = "";

  document.getElementById("issueCount").innerText = data.length + " Issues";

  data.forEach(i => {
    const d = document.createElement("div");
    d.className = "card " + i.status;

    const statusImg = i.status === "open"
      ? `<img src="assets/Open-Status.png">`
      : `<img src="assets/Closed- Status .png">`;

    d.innerHTML = `
      <div class="top-row">
        ${statusImg}
        <div class="badge ${i.priority.toLowerCase()}">${i.priority}</div>
      </div>

      <h4>${i.title}</h4>
      <p>${i.description}</p>

      <div class="labels">
        ${renderLabels(i.labels)}
      </div>

      <small># ${i.author}<br>${i.createdAt}</small>
    `;

    d.onclick = () => openModal(i);
    container.appendChild(d);
  });
}



function closeModal() {
  modal.classList.add("hidden");
}


async function searchIssue() {
  const text = searchInput.value.trim();

  loader.style.display = "block";

  try {
    if (!text) {
      render(allIssues);
      loader.style.display = "none";
      return;
    }

    const res = await fetch(`${API}/search?q=${text}`);
    const data = await res.json();

    if (data.data.length === 0) {
      container.innerHTML = "<h3>No Result Found</h3>";
    } else {
      render(data.data);
    }

  } catch (err) {
    console.log(err);
  }

  loader.style.display = "none";
}


searchInput.addEventListener("keyup", searchIssue);


load();