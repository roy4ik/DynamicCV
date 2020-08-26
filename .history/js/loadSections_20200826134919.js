//Loading sections and populating main-container
const pageSections = {
    about,
    app,
}

// Adds script source to page for selected pageSection only.
function loadSections(pageSections, pagesSectionTitle) {
    if (pageSections != null) {
        if (pageSections.includes(pagesSectionTitle)) {
            console.log("Loading section:" + " " + pagesSectionTitle);
            for (key in pageSections) {
                if (key === pagesSectionTitle) {
                    let script = document.createElement("script");
                    script.src = pagesSectionTitle + "./js/";
                    document.body.appendChildElement(script);
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

let

function loadContent(pagesSectionTitles) {

}