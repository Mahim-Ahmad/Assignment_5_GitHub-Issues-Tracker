document.getElementById("submit").addEventListener("click", function(e){

e.preventDefault();

const usernameinput =document.getElementById("username");

const username = usernameinput.value;

const passwordinput =document.getElementById("password");

const password = passwordinput.value;

if(username === "admin" && password === "admin123"){

    alert("Login successful");
    window.location.assign("home.html");

}

else{

alert("Invalid username or password");
return;

}

})





