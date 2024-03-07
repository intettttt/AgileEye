function join_space(space_code,space_status) {
    // Check if the space code is empty
    if (space_code === ""){
        return false;
    }
    if (space_status === "1"){
        return false;
    }
    return true;
}

module.exports = join_space;