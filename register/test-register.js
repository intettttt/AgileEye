//test-register.js

var assert = require('assert');
const register = require('./register');

describe('TS2 - Register', function () {
    describe('Registration', () => {
        it('Successful account creation', () => {
            const fname = "Intet";
            const lname = "Tit";
            const id = "220000000895";
            const email_address = "ptulod_220000000895@uic.edu.ph";
            const password = "titi";
            // Act
            const result = register(fname, lname, id, email_address, password);
            // Assert
            assert.equal(result,true);
        });
      
        it('Attempt to register with an existing ID', () => {
    
            const fname = "Andre";
            const lname = "Ruiz";
            const id = "220000001163";
            const email_address = "aruiz_220000001163@uic.edu.ph";
            const password = "";
            // Act
            const result = register(fname, lname, id, email_address, password);
            // Assert
            assert.equal(result,false);
        });

        it('Attempt to register with an existing email address', () => {

            const fname = "Andre";
            const lname = "Ruiz";
            const id = "";
            const email_address = "aruiz_220000001163@uic.edu.ph";
            const password = "";
            // Act
            const result = register(fname, lname, id, email_address, password);
            // Assert
            assert.equal(result,false);
          });

          it('Leaving mandatory fields empty during registration', () => {

            const fname = "";
            const lname = "";
            const id = "";
            const email_address = "";
            const password = "";
            // Act
            const result = register(fname, lname, id, email_address, password);
            // Assert
            assert.equal(result,false);
          });

          it('Entering an ID with invalid format', () => {

            const fname = "Andre";
            const lname = "Ruiz";
            const id = "asdad";
            const email_address = "";
            const password = "";
            // Act
            const result = register(fname, lname, id, email_address, password);
            // Assert
            assert.equal(result,false);
          });

          it('Entering an email address with invalid format', () => {
    
            const fname = "Andre";
            const lname = "Ruiz";
            const id = "";
            const email_address = "adasd?%!@#";
            const password = "";
            // Act
            const result = register(fname, lname, id, email_address, password);
            // Assert
            assert.equal(result,false);
          });

      });
});