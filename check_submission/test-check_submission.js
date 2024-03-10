var assert = require('assert');
const check_submission = require('../check_submission/check_submission');

describe('TS7 - Check Submission', function () {
    describe('Assess submission status checking and validation.', () => {
        it('Successfully Check Submission Status', () => {
            const id = "220101568";
            const role = "Evaluator";
            const submission = "0";
            // Act
            const result = check_submission(id, role, submission);
            // Assert
            assert.equal(result,true);
        });

        it('Check Submission Without Submitted Work', () => {
            const id = "220101568";
            const role = "Evaluator";
            const submission = "1"; //1 indicates no submitted work
            // Act
            const result = check_submission(id, role, submission);
            // Assert
            assert.equal(result,false);
        });

        it('Check Submission as an Evaluator/Admin', () => {
            const id = "220101568";
            const role = "Evaluator";
            const submission = "0";
            // Act
            const result = check_submission(id, role, submission);
            // Assert
            assert.equal(result,true);
        });

        it('Check Submission After Evaluation', () => {
            const id = "220101568";
            const role = "Evaluator";
            const submission = "0";
            // Act
            const result = check_submission(id, role, submission);
            // Assert
            assert.equal(result,true);
        });

      });
});