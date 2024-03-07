var assert = require('assert');
const join_team = require('../join_team');

describe('TS6 - Join Team', function () {
    describe('Validate team joining processes and permissions.', () => {
        it('Successfully Join a Team', () => {
            const id = "220000001163";
            const fname = "Andre";
            const lname = "Ruiz";
            const role = "0";
            const team_id = "123";
            const team_name = "Agile Eye";
            const team_role = "Document Specialist";
            // Act
            const result = join_team(id, fname, lname, role, team_id, team_name, team_role);
            // Assert
            assert.equal(result,true);
        });
      
        it('Attempt to Join Already Joined Team', () => {
            const id = "220000001163";
            const fname = "Andre";
            const lname = "Ruiz";
            const role = "0";
            const team_id = "123";
            const team_name = "Agile Eye";
            const team_role = "Document Specialist";
            // Act
            const result = join_team(id, fname, lname, role, team_id, team_name, team_role);
            // Assert
            assert.equal(result,false);
        });

        it('Join Non-Existent Team', () => {
            const id = "220000001163";
            const fname = "Andre";
            const lname = "Ruiz";
            const role = "0";
            const team_id = "123";
            const team_name = "None";
            const team_role = "Document Specialist";
            // Act
            const result = join_team(id, fname, lname, role, team_id, team_name, team_role);
            // Assert
            assert.equal(result,false);
        });

        it('Join Team Without Sufficient Permissions', () => {
            const id = "220000001163";
            const fname = "Andre";
            const lname = "Ruiz";
            const role = "1"
            const team_id = "123";
            const team_name = "Agile Eye";
            const team_role = "Document Specialist";
            // Act
            const result = join_team(id, fname, lname, role, team_id, team_name, team_role);
            // Assert
            assert.equal(result,false);
        });
      });
});