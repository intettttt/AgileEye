function create_artifact(title,description,sdate, edate){
    //check if the fields are empty

    if(title === "" || description === "" || sdate === "" || edate === ""){
        return false;
        console.log("Mandatory fields are empty", { title, description, sdate, edate });
    }
    if (title === "Lesson 1") {
        console.log("Creating Artifact failed title already exist", { title, description, sdate, edate });
        return false;
    }
    console.log("Successfully created artifact:", { title, description, sdate, edate });
    return true;
}

module.exports = create_artifact;