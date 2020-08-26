console.log("this is about js");
console.log("this is about.js");
console.log("this is about js");
// // main
// let main = document.getElementsByTagName("main")[0];

// div
let aboutContainer1 = document.createElement("div");
let aboutContainer2 = document.createElement("div");
let aboutContainer3 = document.createElement("div");


aboutContainer1.style.backgroundColor = "var(--third-color)";
aboutContainer2.style.backgroundColor = "var(--third-color)";
aboutContainer3.style.backgroundColor = "var(--third-color)";

aboutContainer1.style.color = "var(--main-bg-color)";
// aboutContainer2.style.color="var(--main-bg-color)";
// aboutContainer2.style.color="var(--main-bg-color)";

aboutContainer1.style.color = "var(--main-bg-color)"
aboutContainer2.style.color = "var(--main-bg-color)"

aboutContainer1.style.width = "100%";
aboutContainer1.style.height = "85vh";
aboutContainer2.style.width = "100%";
aboutContainer2.style.height = "50vh";
aboutContainer3.style.width = "100%";
aboutContainer3.style.height = "45vh";


aboutContainer1.style.marginBottom = "20px"

aboutContainer1.style.display = "inline-flex"
aboutContainer2.style.display = "inline-flex"
aboutContainer3.style.display = "inline-flex";

aboutContainer1.id = "aboutContainer1";
aboutContainer2.id = "aboutContainer2";
aboutContainer3.id = "aboutContainer3";


aboutContainer1.style.display = "inline-flex"
aboutContainer2.style.display = "inline-flex"

aboutSectionContainer.aboutendChild(aboutContainer1);
aboutSectionContainer.aboutendChild(aboutContainer2);
aboutSectionContainer.aboutendChild(aboutContainer3);



let aboutNewDiv1 = document.createElement("div");
let aboutNewDiv2 = document.createElement("div");

let aboutNewDiv3 = document.createElement("div");
let aboutNewDiv4 = document.createElement("div");

aboutContainer1.aboutendChild(aboutNewDiv1);
aboutContainer1.aboutendChild(aboutNewDiv2);
// aboutContainer2.aboutendChild(aboutNewDiv3);
// aboutContainer2.aboutendChild(aboutNewDiv4);



aboutNewDiv2.style.margin = "20px"

aboutNewDiv1.innerHTML = "<img id='aboutLogo' src='img/logo.svg' alt='logo'>"
aboutNewDiv2.innerHTML = "\
<h1>About</h1>\
<p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa! </p>"

// aboutNewDiv4.innerHTML = "";
// aboutNewDiv3.innerHTML = "";

aboutContainer2.innerHTML = "\
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
aboutContainer3.innerHTML = "\
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

let aboutLogo = document.getElementById("aboutLogo");
aboutLogo.style.height = "50vh";
aboutLogo.style.marginTop = "10vh";
aboutLogo.style.marginLeft = "5vw";