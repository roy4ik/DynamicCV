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



// aboutContainer1.style.marginBottom = "20px"

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
<h1><u>About</u></h1>\
<p>We are two passionate web developers from Belgium and Israel, currently located in Tel Aviv.\
 This webApp is part of our first ever Hackathon. <br>\
We both decided to change our career paths by doing the Full Stack Developer Bootcamp with the Developers Institute. \
The intent of this DynamicCV is to easily create and print a correctly formatted CV to be print and download ready.<br>\
<br>\
We are EXCITED to present the very first version (0.01) DynamicCV! <br>\
During the development of this first version we have spent about 30 hours net coding each, including 3 feature pivots, for features that cannot be included in version 0.1 due to its technical extent and requirements.<br>\
<h2>Technology</h2><br>\
<p>This projects was built with a main emphasis on vanilla java-script, Bootstrap, and some jquery helpers</p>\
<br>\
<h2>Highlights</h2><br>\
<p>This is a one page app, scripts are loaded by a script function according to the app sections available on the page, which allows for quick development and troubleshooting</p>\
<p>The entire app is accessed from one url, or in other words, only one html document is loaded for the entirety of the page.</p>\
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
      <p class='card-text'>Junior Full-Stack Engineer, with diverse experience in solution consulting, technical support and more</p>\
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
      <p class='card-text'>I am Junior Full-Stack Engineer at the <u>Developers Institute</u>, I am doing theatre and acting in Hebrew, English and French, and I have worked 2 years as a Bartender, Waiter and Barista in a very nice hotel in Jaffa.</p>\
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