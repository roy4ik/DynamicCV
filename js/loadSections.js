//Loading sections and populating mainContainer-container
const pageSections = ["about", "app"]

// Adds script source to page for selected pageSection only.
let mainContainer = document.getElementsByTagName("main")[0];
let existingScripts = document.getElementById("current-script");
console.log(mainContainer.childNodes)

function loadSections(pageSections, pagesSectionTitle) {
    if (pageSections != null) {
        if (pageSections.includes(pagesSectionTitle)) {
            console.log("Loading section:" + " " + pagesSectionTitle);
            existingScripts = document.getElementById("current-script");
            console.log("existing script: " + existingScripts);
            if (existingScripts != null) {
                existingScripts.remove();
                console.log("remove script tag")
                mainContainer.innerHTML = "";
            } else {
                for (key of pageSections) {
                    if (key === pagesSectionTitle) {
                        let script = document.createElement("script");
                        script.id = "current-script";
                        script.src = "./js/" + key + ".js"
                        mainContainer.appendChild(script);
                    }
                }
            }
        } else {
            let errorCode = -2;
            let errorMsg = "page section does not exist"
            let error = "Error" + " "
            errorCode + " " + errorMsg
        }

    } else {
        let errorCode = -1;
        let errorMsg = "pageSections is null"
        let error = "Error" + " "
        errorCode + " " + errorMsg
    }
}


function loadContent(pagesSectionTitles) {

}
// console.log(pageSections)
// loadSections(pageSections, "about")

loadSections(pageSections, pageSections[0]);