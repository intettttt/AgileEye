//test-assigned_team_role.js

var assert = require('assert');
const assigned_team_role = require('../assigned_team_role');

describe('TS12 - Assgined Team Role', function () {
    describe('Validate team role', () => {
        it('Successfully Assign Team Role', () => {
            const user_id = "121546";
            const team_name = "Agile Eye";
            const team_id = "1123312";
            const team_role = "Developer";
            const role_status = "0";
            // Act
            const result = assigned_team_role(user_id, team_name, team_id, team_role, role_status);
            // Assert
            assert.equal(result, true);
        });
      
        it('Assign Role to Non-Existent User', () => {
            const user_id = "";
            const team_name = "Agile Eye";
            const team_id = "1123312";
            const team_role = "Developer";
            const role_status = "0";
            // Act
            const result = assigned_team_role(user_id, team_name, team_id, team_role, role_status);
            // Assert
            assert.equal(result, false);
        });

        it('Reassign Team Role', () => {
            const user_id = "121546";
            const team_name = "Agile Eye";
            const team_id = "1123312";
            const team_role = "Developer";
            const role_status = "0";
            // Act
            const result = assigned_team_role(user_id, team_name, team_id, team_role, role_status);
            // Assert
            assert.equal(result, false);
          });
      });
});