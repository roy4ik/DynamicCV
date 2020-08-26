//Loading sections and populating mainContainer-container
const pageSections = ["about", "app"]

// Adds script source to page for selected pageSection only.
let mainContainer = document.getElementsByTagName("main")[0];
// sectionContainer - required to toggle without changing main
let AboutSectionContainer = document.createElement("div");
AboutSectionContainer.className = "about";
mainContainer.appendChild(AboutSectionContainer);
let AppSectionContainer = document.createElement("div");
AppSectionContainer.className = "app";
mainContainer.appendChild(AppSectionContainer);


async function loadSections(pageSections, pagesSectionTitle) {
    if (pageSections != null) {
        if (pageSections.includes(pagesSectionTitle)) {
            console.log("Loading section:" + " " + pagesSectionTitle);
            for (key of pageSections) {
                if (key === pagesSectionTitle) {
                    let script = document.createElement("script");
                    script.id = "current-script-" + pagesSectionTitle;
                    script.src = "./js/" + key + ".js"
                    mainContainer.appendChild(script);
                }
            }
        } else {
            let errorCode = -2;
            let errorMsg = "page section does not exist"
            console.log(errorCode + " " + errorMsg)
        }
    } else {
        let errorCode = -1;
        let errorMsg = "pageSections is null"
        console.log(errorCode + " " + errorMsg)
    }
}


function loadContent(pagesSectionTitles) {

}
// console.log(pageSections)
// loadSections(pageSections, "about")

loadSections(pageSections, pageSections[0]);

function toggleSection(destination) {
    if (destination == "about") {
        AppSectionContainer.display = "none"
        AboutSectionContainer.display = "block";

    } else if (destination == "app") {
        AboutSectionContainer.display = "none";
        AppSectionContainer.display = "block"
    } else {
        let errorCode = -2;
        let errorMsg = "Couldn't find destination"
        console.log(errorCode + " " + errorMsg)
    }

}