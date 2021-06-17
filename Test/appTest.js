const assert = require('chai').assert;
const sum = require('../server').sum;

'use strict';
describe('server', function(){
       it('check sum should be 12', function(){
           var num1 = 9;
           var num2 = 3;
       let result = sum(num1,num2);    
       expect(result).toEqual(12); 
    //    assert.equal(sum(9,3), '12');  
    });
});
// 'check if sum value is correct', 