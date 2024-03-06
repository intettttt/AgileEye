var assert = require('assert');
const add = require('./add');

describe('Arithmetic Operations', function () {
    describe('add function', () => {
        it('should add two numbers correctly', () => {
          // Arrange
          const num1 = 3;
          const num2 = 7;
          // Act
          const result = add(num1, num2);
          // Assert
          assert.equal(result, 10);
        });
      
        it('should handle negative numbers', () => {
          // Arrange
          const num1 = -5;
          const num2 = 3;
          // Act
          const result = add(num1, num2);
          // Assert
          assert.equal(result, -2);
        });
        // Add more test cases as needed
      });
});