function check_submission(id, role, submission) {
    // Check if any mandatory fields are empty
    if (id === "" || role === "" || submission === "") {
        return false;
    }

    if (role === "Evaluator") {
        if (submission === "0") {
            console.log("Submission status checked successfully:", { id, role, submission });
            return true;
        } else {
            console.log("No submitted work or invalid submission status for an Evaluator.");
            return false;
        }
    } else if (role === "Admin") {
        console.log("Submission status checked successfully by Admin:", { id, role, submission });
        return true;
    } else {
        console.log("Invalid role for checking submission status.");
        return false;
    }
}

module.exports = check_submission;