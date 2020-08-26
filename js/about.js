console.log("this is about js");

let main = document.getElementsByTagName("main")[0];
let newDiv = document.createElement("div");
newDiv.style.backgroundColor = "var(--main-color)";
newDiv.style.width = "100%";
newDiv.style.height="70vh"
main.appendChild(newDiv)

newDiv.innerHTML = "<img id='logo' src='img/logo.svg' alt='logo'>"
let logo = document.getElementById("logo");
logo.style.height="40vh";
logo.style.marginTop="5vh";
logo.style.marginLeft="5vw";