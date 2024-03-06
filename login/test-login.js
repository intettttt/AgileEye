var assert = require('assert');
const login = require('../login');

describe('TS1 - Login', function () {
    describe('Authentication', () => {
        it('Successful Login', () => {
          // Login
          const id = "220000001163";
          const password = "12345";
          // Act
          const result = login(id, password);
          // Assert
          assert.equal(result,true);
        });
      
        it('Empty Fields During Login Attempt', () => {
          // Arrange
          const id = "";
          const password = "";
          // Act
          const result = login(id, password);
          // Assert
          assert.equal(result,false);
        });

        it('Incorrect Password Entry', () => {
            // Login
            const id = "220000001163";
            const password = "00000";
            // Act
            const result = login(id, password);
            // Assert
            assert.equal(result,false);
          });

          it('Incorrect ID Entry', () => {
            // Login
            const id = "123123";
            const password = "12345";
            // Act
            const result = login(id, password);
            // Assert
            assert.equal(result,false);
          });

          it('Non-Existent Account', () => {
            // Login
            const id = "Intet";
            const password = "tetet";
            // Act
            const result = login(id, password);
            // Assert
            assert.equal(result,false);
          });

      });
});