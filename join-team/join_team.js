function join_team(id, fname, lname, role, team_id, team_name, team_role) {

    const teams = [
        {
            id: "220000001163",
            team_id: "1564",
            team_name: "BTS",
            team_role: "Developer",
            members: [
                {
                    member_id: "220000001163",
                    role: "0"
                }
            ]
        }
    ];

    // Loop through the array of teams
    for (var element of teams) {
        if (element["team_id"] === team_id && element["team_name"] === team_name && element["team_role"] === team_role) {
            const userExists = element.members.some(member => member.member_id === id && member.role === role);

            if (userExists) {
                console.log("User is already a member of the team");
                return false;
            }

            if (role !== "0") {
                console.log("Insufficient permissions to join the team");
                return false;
            }

            console.log("Successfully joined the team:", { id, fname, lname, role, team_id, team_name, team_role });
            return true;
        }
    }

    // If the loop completes and no matching team is found, return false
    console.log("Team does not exist");
    return false;
}

module.exports = join_team;
