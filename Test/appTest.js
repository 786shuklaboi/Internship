const assert = require('chai').assert;
const sum = require('../server').sum;

"use strict";
describe('server', function(){
       it('check sum should be 12', function(){
       let result = sum(9,3);     
       assert.equal(sum(9,3), '12');  
    });
});
// 'check if sum value is correct', 