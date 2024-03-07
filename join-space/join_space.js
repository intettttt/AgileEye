function join_space(space_code, space_status) {
    // Check if the space code is empty
    const arr = {
        obj: [
            {
                code: "A4BE0YZ",
                status: "0"
            },
            {
                code: "A4BE0YA",
                status: "1"
            }
        ],
        rec: true
    }

    for (var element in arr["obj"]) {
        console.log(arr["obj"][element]);

        if (arr["obj"][element]["code"] === space_code) {
            return arr["obj"][element]["status"] === "0" && space_status === "0";
        }
    }

    return false;
}

module.exports = join_space;