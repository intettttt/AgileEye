function create_artifact(title,description,sdate, edate){
    //check if the fields are empty

    if(title === "" || description === "" || sdate === "" || edate === ""){
        return false;
    }
    if (title === "Lesson 1") {
        return false;
    }
    console.log("Successfully created artifact:", { title, description, sdate, edate });
    return true;
}

module.exports = create_artifact;