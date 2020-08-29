let inputFormContainer = document.createElement("div")
inputFormContainer.classList.add("inputFormContainer")
let inputFrom = document.createElement("form");
inputFormContainer.appendChild(inputFrom);

let displayName = "";
let sectionTitle = "";
let sectionHeader = "";
let formSection;
let categoryDisplay;

// displaying data that was put in
displayContainer = document.createElement("div");
displayContainer.classList.add("displayContainer");
appSectionContainer.appendChild(inputFormContainer);
appSectionContainer.appendChild(displayContainer);

// about form section // still need to add image upload

formSection = document.createElement("section");
formSection.classList.add("input-group")
formSection.classList.add("inputGroup-sizing-default")
sectionTitle = "About"
formSection.classList.add(sectionTitle)
inputFrom.appendChild(formSection);
sectionHeader = document.createElement("H2");;
sectionHeader.innerHTML = sectionTitle;
formSection.appendChild(sectionHeader);



/// form content
let inputName = document.createElement("input");
inputName.classList.add("input-group-about")
inputName.type = "text";
inputName.id = "inputName";
inputName.name = "Name"
inputName.placeholder = "Your name goes here";
formSection.appendChild(inputName);

let inputNameSubmit = document.createElement("div");
inputNameSubmit.innerHTML = "Submit";
inputNameSubmit.classList.add("btnSubmit")
inputNameSubmit.setAttribute("onclick", "createDisplay(inputName, false)")
formSection.appendChild(inputNameSubmit);



let inputTitle = document.createElement("input");
inputTitle.classList.add("input-group-about")
inputTitle.type = "textarea";
inputTitle.id = "inputTitle";
inputTitle.name = "Title";
inputTitle.placeholder = "Your job title goes here";
formSection.appendChild(inputTitle);

let inputTitleSubmit = document.createElement("div");
inputTitleSubmit.innerHTML = "Submit";
inputTitleSubmit.classList.add("btnSubmit")
inputTitleSubmit.setAttribute("onclick", "createDisplay(inputTitle, false)")
formSection.appendChild(inputTitleSubmit);

let inputAbout = document.createElement("textarea");
inputAbout.classList.add("input-group-about")
inputAbout.type = "text";
// inputAbout.rows = "5";
// inputAbout.cols = "20"
inputAbout.id = "inputAbout";
inputAbout.name = "About"
inputAbout.value = "";
inputAbout.placeholder = "Write about yourself and your motivation - keep it short";
formSection.appendChild(inputAbout);


let inputAboutSubmit = document.createElement("div");
inputAboutSubmit.innerHTML = "Submit";
inputAboutSubmit.classList.add("btnSubmit")
inputAboutSubmit.setAttribute("onclick", "createDisplay(inputAbout, true)")
formSection.appendChild(inputAboutSubmit);



function createDisplay(fieldName, categoryDisplay) {
    console.log(fieldName.name)
    let content = fieldName.value;
    displayName = fieldName;
    displayNameClass = fieldName.name
    console.log(document.getElementById(displayNameClass))

    if (document.getElementById(displayNameClass) == null) {
        displayName = document.createElement("div");
        displayName.id = displayNameClass;
        displayName.style.backgroundColor = "white";
        displayName.innerHTML = content;
        displayContainer.appendChild(displayName);
        // if (categoryDisplay == true) {
        //     categoryDisplay = document.createElement("h3");
        //     categoryDisplay.innerHTML = displayName.name;
        //     displayName.firstChild(categoryDisplay)
        // }

    } else {
        console.log("element" + " " + fieldName + " " + "already exists")
    }
}