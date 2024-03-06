var assert = require('assert');
const join_space = require('../join_space');

describe('TS3 - Join Space', function () {
    describe('Space participation and joining process', () => {
        it('Successful Space Joining', () => {
    
            const space_code = "A4BE0";
            const space_status = "0";
            // Act
            const result = join_space(space_code,space_status);
            // Assert
            assert.equal(result,true);
        });
      
        it('Attempt to Join a Closed Space', () => {
            const space_code = "A4BE0";
            const space_status = "1";
            // Act
            const result = join_space(space_code,space_status);
            // Assert
            assert.equal(result,false);
        });

        it('Attempt to Join a Non-Existent Space', () => {
            const space_code = "";
            const space_status = "";
            // Act
            const result = join_space(space_code,space_status);
            // Assert
            assert.equal(result,false);
          });

          it('Attempt to Join with Invalid Space Code', () => {
            const space_code = "";
            const space_status = "";
            // Act
            const result = join_space(space_code,space_status);
            // Assert
            assert.equal(result,false);
          });

      });
});