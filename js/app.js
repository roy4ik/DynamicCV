<<<<<<< HEAD
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

appContainer1.id = "appContainer1";


appContainer1.innerHTML = "\
<div id='selectContainer'>\
<select class='dropdown1' id='testSelect1' multiple>\
<option value='1' selected>2020</option>\
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
</div>"

let selector = document.getElementById("testSelect1");

for (amountOptions = 2019; amountOptions >= 1990; --amountOptions) {
    let option = document.createElement("option");
    option.value = amountOptions;
    option.innerHTML = amountOptions;
    option.selected = true;
    selector.appendChild(option);
}

appContainer1.classList.add("m-auto");

document.multiselect('#testSelect1');
document.multiselect('#testSelect2');
document.multiselect('#testSelect3');
document.multiselect('#testSelect4');
document.multiselect('#testSelect5');



let sectionCard = "sectionCard";

cvContainer = document.createElement("div");
cvContainer.classList.add("cvContainer");
cvContainer.style.display = "grid";
cvContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(375px, 1fr))"
cvContainer.style.width = "100%";
appSectionContainer.appendChild(cvContainer);

let parentSectionCard = ""
let sectionCardName;



function createSectionCard(object, key, sectionNumber, sectionNesting) {
    // console.log(object[key] + " is not an object, but is " + typeof(object[key]))
    if (object[key] != null) {
        // console.log(object[key] + " is string")
        sectionCard = sectionCard + sectionNumber + "-" + sectionNesting;
        console.log("section card is: " + sectionCard)
        sectionCard = document.createElement("DIV");
        sectionCard.style.gridTemplateColumns = "repeat(auto-fill, minmax(50px, 300px))";
        sectionCard.style.width = "100%";
        sectionCard.classList.add("section-" + sectionNumber);
        sectionCard.classList.add("nesting-" + sectionNesting);
        sectionCard.innerHTML = "<div>" + object[key] + "</div>";
        sectionCard.style.padding = "1em"
        sectionCard.style.margin = "1em"
        sectionCard.style.backgroundColor = "white"
        console.log("sectionNesting for " + object[key] + " is: " + sectionNumber + "-" + sectionNesting)
        if (sectionNesting == 1) {
            // sectionCard.style.border = "2px solid black"
            cvContainer.appendChild(sectionCard);
            parentSectionCardClass = "section-" + sectionNumber + " " + "nesting-" + sectionNesting;
            // console.log("parentClass " + parentSectionCardClass)
        } else if (sectionNesting > 2) {
            sectionNesting = 3;
            parentCard = document.getElementsByClassName(parentSectionCardClass)[0];
            parentCard.appendChild(sectionCard);
            parentSectionCardClass = "section-" + sectionNumber + " " + "nesting-" + sectionNesting;
            // console.log("parentClass " + parentSectionCardClass)
        } else {
            parentCard = document.getElementsByClassName(parentSectionCardClass)[0];
            parentCard.appendChild(sectionCard);
            parentSectionCardClass = "section-" + sectionNumber + " " + "nesting-" + sectionNesting;
            // console.log("parentClass " + parentSectionCardClass)
        }

    } else {
        let errorCode = -1;
        let errorMsg = "object[key is null"
        console.log(errorCode + " " + errorMsg)
    }
}


// createSectionCard(findSectionByLabel)
let sectionNesting = 0;
const iterate = (obj, sectionNumber) => {
    for (key in obj) {
        // console.log(`key: ${key}, value: ${obj[key]}, ` + typeof(obj[key]))
        if (typeof obj[key] === 'object') {
            iterate(obj[key])
            sectionNesting++;
        } else {
            sectionNesting++;
            createSectionCard(obj, key, sectionNumber, sectionNesting)
        }
        sectionNesting++;
    }
}

/// call with the sectiontitle and the number of the section incrementally / reset before calling again
iterate(profile, 1);
console.log("sectionNesting is: " + sectionNesting)
sectionNesting = 0;
iterate(experience, 2);
=======
console.log('this is app.js');



// // main
// let main = document.getElementsByTagName('main')[0];

// div
let appContainer1 = document.createElement('section');
appSectionContainer.appendChild(appContainer1);
appContainer1.style.backgroundColor = 'var(--third-color)';
appContainer1.style.color="var(--main-bg-color)"
appContainer1.id = 'appContainer1';

appSectionContainer.innerHTML="\
<iframe id='inlineFrameExample'\
    title='Inline Frame Example'\
    width='100%'\
    border='none'\
    min-height='100%'\
    src='test.html'>\
</iframe>\
"
>>>>>>> 678f4149dc09b1e95771a833784b3fad2cbf99d7
