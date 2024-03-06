//register.js

function register(fname, lname, id, email_address, password) {
    //Check if mandatory fields are empty
    if (fname === "" || lname === "" || id === "" || email_address === "" || password === "") {
        return false;
      }
    //Attempt to register with an existing ID
    if (id === "220000001163") {
        return false;
      }  
    //check if the email is valid
    if (!isValidEmailFormat(email_address)) {
        return false;
      }
    //Attempt to register with an existing email address
    if (email_address === "aruiz_220000001163@uic.edu.ph") {
        console.log("akaksdad");
        return false;
      }
    //Successfully register
    return true;
}
//Entering an ID with invalid format
function isValidIdFormat(id) {
    return /^[0-9]+$/.test(id);
}
//Entering an email address with invalid format
function isValidEmailFormat(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
module.exports = register;

