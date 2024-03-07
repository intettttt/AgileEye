function join_space(space_code, space_status) {
    // Check if the space code is empty
    const arr = {
        obj: [
            {
                code: "A4BE0YZ",
                status: "0"
            },
            {
                code: "EEEEEEE",
                status: "1"
            }
        ],
        rec: true
    }

    for (var element in arr["obj"]) {
        console.log(arr["obj"][element]);

        if (arr["obj"][element]["code"] === space_code && arr["obj"][element]["status"] === "0" ){
            return true
        } 
        if (arr["obj"][element]["code"] === space_code && arr["obj"][element]["status"] === "1" ){
            return false
        }
    }

    return false;
}

module.exports = join_space;