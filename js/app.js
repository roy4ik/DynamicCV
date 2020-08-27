// function findSectionByLabel(obj, label) {
//     if (obj.label === label) { return obj; }
//     if (label != null) {
//         for (var subObject in obj) {
//             if (obj.hasOwnProperty(subObject)) {
//                 var foundLabel = findSectionByLabel(obj[subObject], label);
//                 if (foundLabel) { return foundLabel; }
//             }
//         }
//     } else { console.log("label is null") }
//     return null;
// };

// findSectionByLabel(CvSections, "Experience")
let sectionCard = "sectionCard";

cvContainer = document.createElement("div");
cvContainer.classList.add("cvContainer");
cvContainer.style.display = "grid";
cvContainer.style.gridTemplateColumns = "repeat(auto-fit, 250px;"
cvContainer.style.width = "100%";
appSectionContainer.appendChild(cvContainer);


function createSectionCard(object, key) {
    console.log(object[key] + " is not an object, but is " + typeof(object[key]))
    if (typeof object[key] === "object") {
        iterate(object[key])
    } else if (typeof object[key] === "string") {
        console.log(object[key] + " is string")
        sectionCard = sectionCard + "-" + object[key];
        console.log("section card is: " + sectionCard)
        sectionCard = document.createElement("DIV");
        sectionCard.innerHTML = object[key];
        sectionCard.style.padding = "2em"
        sectionCard.style.margin = "2em"
        sectionCard.style.backgroundColor = "white"

        cvContainer.appendChild(sectionCard);
    } else if (typeof object[key] === "array") {
        console.log(object[key] + " is array")
        for (elements of object) {
            sectionCard = sectionCard + "-" + object[key];
            console.log("section card is: " + sectionCard)
            sectionCard = document.createElement("DIV");
            sectionCard.innerHTML = object[key][elements];
            cvContainer.appendChild(sectionCard);
        }

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

// createSecionCard(findSectionByLabel)
let sectionNesting = 0;
const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
        console.log(`key: ${key}, value: ${obj[key]}, ` + typeof(obj[key]))
        if (typeof obj[key] === 'object') {
            iterate(obj[key])
        } else {
            createSectionCard(obj, key)
        }
    })
}

iterate(profile);
// iterate(experience);