console.log("this is about js");
// // main
// let main = document.getElementsByTagName("main")[0];

// div
let container1 = document.createElement("div");
let container2 = document.createElement("div");
let container3 = document.createElement("div");


container1.style.backgroundColor = "var(--third-color)";
container2.style.backgroundColor = "var(--third-color)";
container3.style.backgroundColor = "var(--third-color)";

container1.style.color="var(--main-bg-color)";
// container2.style.color="var(--main-bg-color)";
// container2.style.color="var(--main-bg-color)";

container1.style.color = "var(--main-bg-color)"
container2.style.color = "var(--main-bg-color)"

container1.style.width = "100%";
container1.style.height="85vh";
container2.style.width = "100%";
container2.style.height="50vh";
container3.style.width = "100%";
container3.style.height="45vh";


container1.style.marginBottom = "20px"

container1.style.display="inline-flex"
container2.style.display="inline-flex"
container3.style.display="inline-flex";

container1.id="container1";
container2.id="container2";
container3.id="container3";


container1.style.display = "inline-flex"
container2.style.display = "inline-flex"

AboutSectionContainer.appendChild(container1);
AboutSectionContainer.appendChild(container2);
AboutSectionContainer.appendChild(container3);



let newDiv1 = document.createElement("div");
let newDiv2 = document.createElement("div");

let newDiv3 = document.createElement("div");
let newDiv4 = document.createElement("div");

container1.appendChild(newDiv1);
container1.appendChild(newDiv2);
// container2.appendChild(newDiv3);
// container2.appendChild(newDiv4);



newDiv2.style.margin = "20px"

newDiv1.innerHTML = "<img id='logo' src='img/logo.svg' alt='logo'>"
newDiv2.innerHTML = "\
<h1>About</h1>\
<p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa! </p>"

// newDiv4.innerHTML = "";
// newDiv3.innerHTML = "";

container2.innerHTML="\
<div id='card-roy' class='card mb-3' style='max-width: 50%;'>\
<div class='row no-gutters'>\
  <div class='col-md-4'>\
    <img src='https://ca.slack-edge.com/T7P4CAKAS-U0181B76SS0-64b92548bdd5-512' class='card-img' alt='...'>\
  </div>\
  <div class='col-md-8'>\
    <div class='card-body'>\
      <h5 class='card-title'>Roy Altstaedter</h5>\
      <p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
      <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>\
    </div>\
  </div>\
</div>\
</div>"
container3.innerHTML="\
<div id='card-daniel' class='card mb-3' style='max-width: 50%;'>\
<div class='row no-gutters'>\
  <div class='col-md-8'>\
    <div class='card-body'>\
      <h5 class='card-title'>Daniel Ach</h5>\
      <p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
      <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>\
    </div>\
  </div>\
  <div class='col-md-4'>\
    <img src='https://ca.slack-edge.com/T7P4CAKAS-U018A77P3PX-36c5c161090b-512' class='card-img' alt='...'>\
  </div>\
</div>\
</div>"

let logo = document.getElementById("logo");
logo.style.height = "50vh";
logo.style.marginTop = "10vh";
logo.style.marginLeft = "5vw";





