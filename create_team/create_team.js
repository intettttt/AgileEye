function create_team(team_name, team_id, role) {
    // Empty fields
    if (team_name === "" || team_id === "" || role === "") {
        return false;
    }

    // Check if the fields are empty
    const arr = {
        obj: [
            {
                team_name: "Agile Eye",
                team_id: "1123312",
                role: "0"
            },
            {
                team_name: "Jumbo Hotdog",
                team_id: "1231313",
                role: "1"
            }
        ],
    }

    for (var element in arr["obj"]) {
        console.log(arr["obj"][element]);
        // Existing team name
        if (arr["obj"][element]["team_name"] === team_name) {
            console.log("Team name already exists");
            return false;
        }
        if (arr["obj"][element]["role"] === "1") {
            console.log("You cant create a team");
            return false;
        }
        console.log("Successfully created team:", { team_name, team_id, role });
        return true;
    }
}

module.exports = create_team;