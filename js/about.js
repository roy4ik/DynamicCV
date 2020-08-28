console.log("this is about js");

//any content needs to be appended into aboutSectionContainer declared in loadSections.js

// creating content containers
let aboutContainer1 = document.createElement("div");
let aboutContainer2 = document.createElement("div");
let aboutContainer3 = document.createElement("div");

// setting container styles 
aboutContainer1.style.backgroundColor = "var(--third-color)";
aboutContainer2.style.backgroundColor = "var(--third-color)";
aboutContainer3.style.backgroundColor = "var(--second-color)";

aboutContainer1.style.color = "var(--main-bg-color)";

aboutContainer1.style.width = "100%";
aboutContainer1.style.height = "85%";
aboutContainer2.style.width = "100%";
aboutContainer2.style.height = "fit-content";
aboutContainer2.style.height = "22em";

aboutContainer3.style.width = "100%";
aboutContainer3.style.height = "fit-content";
// aboutContainer3.style.height = "22em";



aboutContainer1.style.marginBottom = "20px"

aboutContainer1.style.display = "inline-flex"
aboutContainer2.style.display = "inline-flex"
aboutContainer3.style.display = "inline-flex";

aboutContainer1.style.display = "inline-flex"
aboutContainer2.style.display = "inline-flex"

//add id to containers
aboutContainer1.id = "aboutContainer1";
aboutContainer2.id = "aboutContainer2";
aboutContainer3.id = "aboutContainer3";


//appending container into the aboutSectionContainer
aboutSectionContainer.appendChild(aboutContainer1);
aboutSectionContainer.appendChild(aboutContainer3);
aboutSectionContainer.appendChild(aboutContainer2);



// creating elements for content containers
let aboutNewDiv1 = document.createElement("div");
let aboutNewDiv2 = document.createElement("div");

let aboutNewDiv3 = document.createElement("div");
let aboutNewDiv4 = document.createElement("div");

//appending elements for content containers
aboutContainer1.appendChild(aboutNewDiv1);
aboutContainer1.appendChild(aboutNewDiv2);



// adding content and styles to content
aboutNewDiv2.style.margin = "20px"

aboutNewDiv1.innerHTML = "<img id='aboutLogo' src='img/logo.svg' alt='logo'>"
aboutNewDiv2.innerHTML = "\
<h1>About</h1>\
<p>We created this webApp in our 1st ever Hackathon, we are 2 passionated Developers, from Belgium and Switzerland, currently living in Tel Aviv. We both decided to change our carriere path doing the Full Stack Developer Bootcamp with the Developers Institute. This is can be used to create nice CV very easely and print it afterward. So here we are HAPPY to present the very first version of our site. Hope you like it ❤️ <br> Th Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed, sit tempora inventore quos autem sapiente optio reprehenderit maxime commodi nobis mollitia saepe facilis accusantium vero sequi illum soluta ipsa! </p>\
<section class='white-section' id='features'>\
    <div class='container-fluid'>\
      <div class='row row-features'>\
        <div class='col-lg-4'>\
          <i class='fas fa-check-circle icon-features fa-4x'></i>\
          <h3 class='h3-features'>Easy to use.</h3>\
          <p class='p-features'>So easy to use, even your grand-mother could do it.</p>\
        </div>\
        <div id='bullseye' class='col-lg-4'>\
          <i class='fas fa-bullseye icon-features fa-4x'></i>\
          <h3 class='h3-features'>Elite Clientele</h3>\
          <p class='p-features'>Used for an Elite Clientele and offers the greatest CV.</p>\
        </div>\
        <div class='col-lg-4'>\
          <i class='fas fa-heart icon-features fa-4x'></i>\
          <h3 class='h3-features'>Guaranteed to work.</h3>\
          <p class='p-features'>The is 100% working 24/7 for any inquiries let us know 😎 </p>\
        </div>\
      </div>\
    </div>\
  </section>";



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
</div>\
\
<div id='card-daniel' class='card mb-3' style='max-width: 50%;'>\
<div class='row no-gutters'>\
  <div class='col-md-8'>\
    <div class='card-body'>\
      <h5 class='card-title'>Daniel Ach</h5>\
      <p class='card-text'>I am a Beginner Full Stack Developer at the <u>Developers Institute</u>, I am doing theatre and acting in Hebrew, English and French, and I have worked 2 years as a Bartender, Waiter and Barista in a very nice hotel in Jaffa.</p>\
      <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>\
    </div>\
  </div>\
  <div class='col-md-4'>\
    <img src='https://ca.slack-edge.com/T7P4CAKAS-U018A77P3PX-36c5c161090b-512' class='card-img' alt='...'>\
  </div>\
</div>\
</div>"
aboutContainer3.innerHTML = "<h1>The 'Google Mafia' Team</h1>"

let aboutLogo = document.getElementById("aboutLogo");
aboutLogo.style.height = "26em";
aboutLogo.style.marginTop = "4em";
aboutLogo.style.marginLeft = "4em";