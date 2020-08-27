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

function createSectionCard(object, key, sectionNesting) {
    console.log(object[key] + " is not an object, but is " + typeof(object[key]))
    if (typeof object[key] === "object") {
        iterate(object[key])
    } else if (typeof object[key] === "string") {
        console.log(object[key] + " is string")
        sectionCard = sectionCard + sectionNesting;
        console.log("section card is: " + sectionCard)
        sectionCard = document.createElement("DIV");
        sectionCard.classList.add("nesting-" + sectionNesting);
        sectionCard.innerHTML = object[key];
        sectionCard.style.padding = "2em"
        sectionCard.style.margin = "2em"
        sectionCard.style.backgroundColor = "white"
        console.log("sectionNesting for " + object[key] + " is: " + sectionNesting)
        if (sectionNesting == 1) {
            cvContainer.appendChild(sectionCard);
            parentSectionCardClass = "nesting-" + sectionNesting
        } else {
            parentCard = document.getElementsByClassName(parentSectionCardClass)[0];
            parentCard.appendChild(sectionCard);
            console.log()
        }
        // } else if (typeof object[key] === "array") {
        //     console.log(object[key] + " is array")
        //     for (elements of object) {
        //         sectionCard = sectionCard + "-" + object[key];
        //         console.log("section card is: " + sectionCard)
        //         sectionCard = document.createElement("DIV");
        //         sectionCard.innerHTML = object[key][elements];
        //         cvContainer.appendChild(sectionCard);
        //         if (sectionNesting > 1) {
        //             parentSectionCard.appendChild(sectionCard);
        //         }
        //     }

    } else if (typeof object[key] === "number") {
        console.log(object[key] + " is number")
        for (elements of object[key]) {
            sectionCard = sectionCard + "-" + object[key];
            console.log("section card is: " + sectionCard)
            sectionCard = document.createElement("DIV");
            sectionCard.innerHTML = label[elements];
            cvContainer.appendChild(sectionCard);
        }
    }
}

// createSectionCard(findSectionByLabel)
let sectionNesting = 0;
const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
        // console.log(`key: ${key}, value: ${obj[key]}, ` + typeof(obj[key]))
        if (typeof obj[key] === 'object') {
            sectionNesting++;
            // console.log("sectionNesting for " + obj + "is:" + sectionNesting)
            iterate(obj[key])
        } else {

            sectionNesting++;
            createSectionCard(obj, key, sectionNesting)
        }
    })
}

iterate(profile);
// iterate(experience)
// iterate(experience);