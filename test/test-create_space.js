var assert = require('assert');
const create_space = require('../create_space');

describe('TS5 - Create Space', function () {
    describe('Confirm successful space creation and validation.', () => {
        it('Successfully Create a Space', () => {
            const id = "10033";
            const code = "A46091";
            const name = "Adiosz";
            const description = "hellow";
            const sec_year = "BSCS-2A";

            // Act
            const result = create_space(id,code,name,description,sec_year);
            // Assert
            assert.equal(result,true);
        });

        it('Create Space with Existing Name', () => {
            const id = "10033";
            const code = "A46091";
            const name = "Web Development";
            const description = "hellow";
            const sec_year = "BSCS-2A";
            const permission ="0";
            // Act
            const result = create_space(id,code,name,description,sec_year,permission);
            // Assert
            assert.equal(result,false);
        });

        it('Create Space with Mandatory Fields Empty', () => {
            const id = "";
            const code = "";
            const name = "";
            const description = "";
            const sec_year = "";
            const permission ="";
            // Act
            const result = create_space(id,code,name,description,sec_year,permission);
            // Assert
            assert.equal(result,false);
        });

        it('Create Space with Invalid Characters in the Name', () => {
            const id = "09213";
            const code = "A67C8I";
            const name = "$!@$!#!#";
            const description = "";
            const sec_year = "";
            const permission ="0";
            // Act
            const result = create_space(id,code,name,description,sec_year, permission);
            // Assert
            assert.equal(result,false);
        });

        it('Create Space Without Sufficient Permissions', () => {
            const id = "09213";
            const code = "A67C8I";
            const name = "$!@$!#!#";
            const description = "";
            const sec_year = "";
            const permission ="1";
            // Act
            const result = create_space(id,code,name,description,sec_year,permission);
            // Assert
            assert.equal(result,false);
        });

      });
});