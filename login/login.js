function login(id,password){
    if(id === "" || password === ""){
        return false;
    }

    if(id !== "220000001163"){
        return false;
    }

    if(password !== "12345"){
        return false;
    }
    return true;    
}
module.exports = login;
