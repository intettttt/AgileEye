function create_space(id, code, name, description, sec_year, permission) {
    if (id === "" || code === "" || name === "" || sec_year === "" || permission === "") {
        return false;
    }
    if (name === "Web Development"){
        console.log("Space name already exists", { id, code, name, description, sec_year, permission });
        return false;
    }
    if(permission === "1"){
        console.log("You dont have permission to create space", { id, code, name, description, sec_year, permission });
        return false;
    }
    console.log("Successfully created space:", { id, code, name, description, sec_year, permission });
    return true;
}   

module.exports = create_space;