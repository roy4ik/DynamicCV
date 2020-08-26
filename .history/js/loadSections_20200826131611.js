//Loading sections and populating main-container



// Adds script source to page for selected pageSection only.
function loadSections(pagesSection) {
    if (pageSection != null) {
        console.log("Loading section:" + " " + pagesSection);
        for (key in pagesSection) {
            let script = document.createElement("script");
            script.src = "./js/" + pagesSection;
            document.body.appendChildElement(script);
        }

    } else {
        let errorCode = -1;
        let errorMsg = "section is null"
        let error = "Error" + " "
        errorCode + " " + errorMsg
    }

}