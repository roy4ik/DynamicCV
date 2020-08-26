console.log("this is app.js");
console.log("this is about js");
// // main
// let main = document.getElementsByTagName("main")[0];

// div
let appContainer1 = document.createElement("div");
let appContainer2 = document.createElement("div");
let appContainer3 = document.createElement("div");


appContainer1.style.backgroundColor = "var(--third-color)";
appContainer2.style.backgroundColor = "var(--third-color)";
appContainer3.style.backgroundColor = "var(--third-color)";

appContainer1.style.color = "var(--main-bg-color)";
// appContainer2.style.color="var(--main-bg-color)";
// appContainer2.style.color="var(--main-bg-color)";

appContainer1.style.color = "var(--main-bg-color)"
appContainer2.style.color = "var(--main-bg-color)"

appContainer1.style.width = "100%";
appContainer1.style.height = "85vh";
appContainer2.style.width = "100%";
appContainer2.style.height = "50vh";
appContainer3.style.width = "100%";
appContainer3.style.height = "45vh";


appContainer1.style.marginBottom = "20px"

appContainer1.style.display = "inline-flex"
appContainer2.style.display = "inline-flex"
appContainer3.style.display = "inline-flex";

appContainer1.id = "appContainer1";
appContainer2.id = "appContainer2";
appContainer3.id = "appContainer3";


appContainer1.style.display = "inline-flex"
appContainer2.style.display = "inline-flex"

AppSectionContainer.appendChild(appContainer1);
AppSectionContainer.appendChild(appContainer2);
AppSectionContainer.appendChild(appContainer3);



let AppNewDiv1 = document.createElement("div");
let AppNewDiv2 = document.createElement("div");

let AppNewDiv3 = document.createElement("div");
let AppNewDiv4 = document.createElement("div");

appContainer1.appendChild(AppNewDiv1);
appContainer1.appendChild(AppNewDiv2);
// appContainer2.appendChild(AppNewDiv3);
// appContainer2.appendChild(AppNewDiv4);



AppNewDiv2.style.margin = "20px"

AppNewDiv1.innerHTML = "<img id='appLogo' src='img/logo.svg' alt='logo'>"
AppNewDiv2.innerHTML = "\
<h1>About</h1>\
<p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa! </p>"

// AppNewDiv4.innerHTML = "";
// AppNewDiv3.innerHTML = "";

appContainer2.innerHTML = "\
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
appContainer3.innerHTML = "\
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

let appLogo = document.getElementById("appLogo");
appLogo.style.height = "50vh";
appLogo.style.marginTop = "10vh";
appLogo.style.marginLeft = "5vw";