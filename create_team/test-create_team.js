var assert = require('assert');
const create_team = require('./create_team');

describe('TS11 - Create Team', function () {
    describe('Confirm successful team creation and validation.', () => {
        it('Successfully Create Team', () => {
            const team_name = "Apple";
            const team_id = "1231313213";
            const role = "0";
            // Act
            const result = create_team(team_name,team_id,role);
            // Assert
            assert.equal(result,true);
        });

        it('Create Team with Existing Name', () => {
            const team_name = "Agile Eye";
            const team_id = "1231231";
            const role = "0";
            // Act
            const result = create_team(team_name,team_id,role);
            // Assert
            assert.equal(result,false);
        });

        it('Create Team with Empty Fields', () => {
            const team_name = "";
            const team_id = "";
            const role = "";
            // Act
            const result = create_team(team_name,team_id,role);
            // Assert
            assert.equal(result,false);
        });
      });
});