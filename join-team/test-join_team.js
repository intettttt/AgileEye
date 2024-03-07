var assert = require('assert');
const join_team = require('./join_team');

describe('TS6 - Join Team', function () {
    describe('Validate team joining processes and permissions.', () => {
        it('Successfully Join a Team', () => {
            const title = "Lesson 2";
            const description = "asdadasd";
            const sdate = "04-03-2024";
            const edate = "04-13-2024";
            // Act
            const result = create_artifact(title,title,sdate,edate);
            // Assert
            assert.equal(result,true);
        });
      
        it('Create Artifact with Existing Title', () => {
            const title = "Lesson 1";
            const description = "asdadasd";
            const sdate = "04-03-2024";
            const edate = "04-13-2024";
            // Act
            const result = create_artifact(title,title,sdate,edate);
            // Assert
            assert.equal(result,false);
        });

        it('Create Artifact with Mandatory Fields Empty', () => {
            const title = "";
            const description = "";
            const sdate = "";
            const edate = "";
            // Act
            const result = create_artifact(title,title,sdate,edate);
            // Assert
            assert.equal(result,false);
          });
      });
});