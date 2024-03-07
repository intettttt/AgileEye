function register(fname, lname, id, email_address, password) {
  // Initialize array with user information
  if (fname === "" || lname === "" || id === "" || email_address === "" || password === "") {
    return false;
}
  const arr = {
    obj: [
        {
          fname: "Andre",
          lname: "Ruiz",
          id: "220000001163",
          email_address: "aruiz_220000001163@uic.edu.ph",
          password: "12345"
        }
    ],
}

for (var element in arr["obj"]) {
  console.log(arr["obj"][element]);
  if (arr["obj"][element]["id"] === id) {
    return false;
}
  if (arr["obj"][element]["email_address"] === email_address) {
    console.log("Email address already exists");
    return false;
}
}
  console.log("Successfully registered:", { fname, lname, id, email_address, password });
      return true;
}
module.exports = register;
