//Loading sections and populating main-container



// Adds script source to page for selected pageSection only.
function loadSections(pagesSectionTitle) {
    if (pageSections != null) {
        if (pageSections.includes(pagesSectionTitle)) {
            console.log("Loading section:" + " " + pageSections);
            for (key in pageSections) {
                let script = document.createElement("script");
                script.src = pagesSectionTitle + "./js/";
                document.body.appendChildElement(script);
            }
        } else {
            let errorCode = -1;
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