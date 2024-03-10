function join_team(id, fname, lname, role, team_id, team_name, team_role) { //diri kay wla nimo gipasok si fname ug lname, mao nalahi giaassign ang mga values params (si team name na gipasa nimo kay naay sa team role)
    const arr = {
        obj: [
            {
                id: "220000001163",
                team_id: "1564",
                team_name: "Lany",
                team_role: "Developer",
                role: "0"
            }
            // Add more user objects as needed
        ]
    };

    // Loop through the array of teams
    for (var element of arr["obj"]) {

        if (element["team_id"] === team_id && element["team_name"] === team_name && element["team_role"] !== team_role) {
            if (element["id"] === id) {
                console.log("User is already a member of the team");
                return false;
            }
            if (role === "1") {
                console.log("Insufficient permissions to join the team");
                return false;
            }

            console.log("Successfully joined the team:", { id, fname, lname, role, team_id, team_name, team_role });
            return true;
        }
    }

    // If the loop completes without returning, the team does not exist
    console.log("Team does not exist");
    return false;
}

module.exports = join_team;