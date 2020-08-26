console.log("this is about js");
// main
let main = document.getElementsByTagName("main")[0];

// div
let container1 = document.createElement("div");
let container2 = document.createElement("div");

container1.style.backgroundColor = "var(--third-color)";
container2.style.backgroundColor = "var(--third-color)";

container1.style.color="var(--main-bg-color)"
container2.style.color="var(--main-bg-color)"

container1.style.width = "100%";
container2.style.width = "100%";

container1.style.marginBottom="20px"

container1.style.display="inline-flex"
container1.id="container1"
container2.style.display="inline-flex"
container2.id="container2"

main.appendChild(container1);
main.appendChild(container2);


let newDiv1 = document.createElement("div");
let newDiv2 = document.createElement("div");

let newDiv3 = document.createElement("div");
let newDiv4 = document.createElement("div");

container1.appendChild(newDiv1);
container1.appendChild(newDiv2);
container2.appendChild(newDiv3);
container2.appendChild(newDiv4);

newDiv2.style.margin="20px"

newDiv1.innerHTML = "<img id='logo' src='img/logo.svg' alt='logo'>"
newDiv2.innerHTML="\
<h1>About</h1>\
<p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa! </p>"

newDiv4.innerHTML = "<img id='logo1' src='img/logo.svg' alt='logo'>"
newDiv3.innerHTML="\
<h1>About</h1>\
<p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa! </p>"


let logo = document.getElementById("logo");
logo.style.height="50vh";
logo.style.marginTop="10vh";
logo.style.marginLeft="5vw";

let logo1 = document.getElementById("logo1");
logo1.style.height="50vh";
logo1.style.marginTop="10vh";
logo1.style.marginLeft="5vw";



