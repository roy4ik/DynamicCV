let inputFormContainer = document.createElement("div")
inputFormContainer.classList.add("inputFormContainer")
let inputFrom = document.createElement("form");
inputFormContainer.appendChild(inputFrom);
displayContainer = document.createElement("div");
displayContainer.classList.add("displayContainer");
appSectionContainer.appendChild(displayContainer);

let displayName;


// displaying data that was put in
displayContainer = document.createElement("div");
displayContainer.classList.add("displayContainer");
// let displayName = document.createElement("div");
// displayName.classList.add("DsiplayName")
// displayContainer.appendChild(displayName);
appSectionContainer.appendChild(displayContainer);


let formSection = document.createElement("div");
formSection.classList.add("input-group")
inputFrom.appendChild(formSection);

let inputName = document.createElement("input");
inputName.classList.add("input-group-about")
inputName.type = "text";
inputName.id = "inputName";
inputName.name = "Name"
inputName.value = "html";
inputName.placeholder = "Your name goes here";
formSection.appendChild(inputName);


let inputNameSubmit = document.createElement("div");
inputNameSubmit.innerHTML = "Submit";
// inputNameSubmit.onclick = ("click", createDisplay(inputName))
inputNameSubmit.setAttribute("onclick", "createDisplay(inputName)")
formSection.appendChild(inputNameSubmit);

let inputTitle = document.createElement("input");
inputTitle.classList.add("input-group-about")
inputTitle.type = "textarea";
inputTitle.id = "inputTitle";
inputTitle.placeholder = "Your job title goes here";
formSection.appendChild(inputTitle);


// let inputTitle = document.createElement("input");
// inputAbout.classList.add("input-group-about")
// inputAbout.type = "text";
// inputAbout.id = "inputAbout";
// inputTitle.placeholder = "Your job title goes here";
// formSection.appendChild(inputTitle);

let inputAbout = document.createElement("textarea");
inputAbout.classList.add("input-group-about")
inputAbout.type = "text";
inputAbout.rows = "5";
inputAbout.cols = "40"
inputAbout.id = "inputAbout";

inputAbout.placeholder = "Write about yourself and your motivation - keep it short";
formSection.appendChild(inputAbout);
// function createTextInput()


function createDisplay(fieldName) {
    console.log(fieldName.name)
    let content = fieldName.value;
    displayName = "bla";
    displayNameClass = fieldName.name
    console.log(document.getElementById(displayNameClass))
    if (document.getElementById(displayNameClass) == null) {
        displayName = document.createElement("div");
        displayName.id = displayNameClass;
        displayName.innerHTML = content;
        displayContainer.appendChild(displayName);
    } else {
        console.log("element" + " " + fieldName + " " + "already exists")
    }
}