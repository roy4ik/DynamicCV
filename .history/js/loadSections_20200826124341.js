function loadSections(pagesSection) {
    if (pageSection != null) {
        console.log("Loading section:" + " " + pagesSection);
        for (key in pagesSection) {
            let script = document.createElement("script");
            script.src = "./js/" + pagesSection;
        }
    } else {
        let errorCode = -1;
        let errorMsg = "section is null"
        let error = "Error" + " "
        errorCode + " " + errorMsg
    }



}