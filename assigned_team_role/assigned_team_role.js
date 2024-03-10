function assigned_team_role(user_id, team_name, team_id, team_role, role_status) {

    const arr = {
        obj: [
            {
                "user_id": "121546",
                "team_name": "Agile Eye",
                "team_id": "1123312",
                "team_role": "Developer",
                "role_status": "0"
            }
            // Add more user objects as needed
        ]
    };

    if (user_id === "" || team_name === "" || team_id === "" || team_role === "" || role_status === "") {
        return false;
    }
    for (var element in arr["obj"]) {
        if (arr["obj"][element]["user_id"] === user_id && arr["obj"][element]["team_name"] === team_name && 
            arr["obj"][element]["team_id"] === team_id) {

            // Check if the user exists
            if (arr["obj"][element]["role_status"] === "0" && arr["obj"][element]["team_role"] === "Developer") {
                // Assign the new role
                arr["obj"][element]["team_role"] = team_role;
                console.log("Successfully assigned team role:", { user_id, team_name, team_id, team_role, role_status });
                return true;
            } else {
                console.log("Invalid operation: Cannot reassign team role or user does not exist");
                return false;
            }
        }
    }

    console.log("Team or user does not exist");
    return false;
}

module.exports = assigned_team_role;
