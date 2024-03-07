function register(fname, lname, id, email_address, password) {
  // Initialize array with user information
  if (fname === "" || lname === "" || id === "" || email_address === "" || password === "") {
    return false;
}
  const arr = {
    obj: [
        {
          fname: "Intet",
          lname: "Tetz",
          id: "220000001163",
          email_address: "entet@gmail.com",
          password: "ikawlangz"
        }
    ],
}

for (var element in arr["obj"]) {
  console.log(arr["obj"][element]);
  if (users[element].id === id) {
    return false;
}
  if (users[element].email_address === email_address) {
    console.log("Email address already exists");
    return false;
}
}
  console.log("Successfully registered:", { fname, lname, id, email_address, password });
      return true;
}
module.exports = register;
