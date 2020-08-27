console.log("this is app.js");

// creating content containers
let appContainer1 = document.createElement("div");
// let aboutContainer2 = document.createElement("div");
// let aboutContainer3 = document.createElement("div");

// setting container styles 
appContainer1.style.backgroundColor = "var(--third-color)";
// aboutContainer2.style.backgroundColor = "var(--third-color)";
// aboutContainer3.style.backgroundColor = "var(--third-color)";

//appending container into the aboutSectionContainer
appSectionContainer.appendChild(appContainer1);
// aboutSectionContainer.appendChild(aboutContainer2);
// aboutSectionContainer.appendChild(aboutContainer3);

appContainer1.id="appContainer1";

appContainer1.innerHTML="\
<div id='selectContainer'>\
<select class='dropdown1' id='testSelect1' multiple>\
  <option value='1' selected>Year</option>\
  <option value='2'>Item 2</option>\
  <option value='3'>Item 3</option>\
  <option value='4'>Item 4</option>\
  <option value='5'>Item 5</option>\
</select>\
<select class='dropdown1' id='testSelect2' multiple>\
  <option value='1' selected>Skills</option>\
  <option value='2'>Item 2</option>\
  <option value='3'>Item 3</option>\
  <option value='4'>Item 4</option>\
  <option value='5'>Item 5</option>\
</select>\
<select  class='dropdown1' id='testSelect3' multiple>\
  <option value='1' selected>Company</option>\
  <option value='2'>Item 2</option>\
  <option value='3'>Item 3</option>\
  <option value='4'>Item 4</option>\
  <option value='5'>Item 5</option>\
</select>\
<select class='dropdown1' id='testSelect4' multiple>\
<option value='1' selected>Position</option>\
<option value='2'>Item 2</option>\
<option value='3'>Item 3</option>\
<option value='4'>Item 4</option>\
<option value='5'>Item 5</option>\
</select>\
<select class='dropdown1' id='testSelect5' multiple>\
  <option value='1' selected>Education</option>\
  <option value='2'>Item 2</option>\
  <option value='3'>Item 3</option>\
  <option value='4'>Item 4</option>\
  <option value='5'>Item 5</option>\
</select>\
</div>";

appContainer1.classList.add("m-auto");

document.multiselect('#testSelect1');
document.multiselect('#testSelect2');
document.multiselect('#testSelect3');
document.multiselect('#testSelect4');
document.multiselect('#testSelect5');
