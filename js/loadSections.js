//Loading sections and populating mainContainer-container
const pageSections = ["about", "app"]


let mainContainer = document.getElementsByTagName("main")[0];
// sectionContainer - required to toggle without changing main
let aboutSectionContainer = document.createElement("div");
aboutSectionContainer.className = "about";
mainContainer.appendChild(aboutSectionContainer);

let appSectionContainer = document.createElement("div");
appSectionContainer.className = "app";
mainContainer.appendChild(appSectionContainer);

function loadSections(pageSections) {
    // Adds script source to page for selected pageSection only.
    if (pageSections != null) {
        for (key of pageSections) {
            console.log("Loading section:" + " " + key);

            let script = document.createElement("script");
            script.id = "current-script-" + key;
            script.src = "./js/" + key + ".js"
            mainContainer.appendChild(script);
        }
    } else {
        let errorCode = -1;
        let errorMsg = "pageSections is null"
        console.log(errorCode + " " + errorMsg)
    }
}

function toggleSection(destination) {
    //toggling section that is being displayed / setting other sections to display none
    if (destination == "about") {
        // console.log("change to about")
        appSectionContainer.style.display = "none"
        aboutSectionContainer.style.display = "block";

    } else if (destination == "app") {
        // console.log("change to app")
        aboutSectionContainer.style.display = "none";
        appSectionContainer.style.display = "block"
    } else {
        let errorCode = -2;
        let errorMsg = "Couldn't find destination"
        console.log(errorCode + " " + errorMsg)
    }

}

loadSections(pageSections);
toggleSection('about');