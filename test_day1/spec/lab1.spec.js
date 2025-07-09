const { capitalizeTextFirstChar, createArray, random } = require("../lab/lab1");
// problem 1
describe('Test capitalizeTextFirstChar Function',()=>{
 it('test that the function takes a string it will return type to be a string',()=>{
    expect(capitalizeTextFirstChar('hanan')).toEqual(jasmine.any(String));
 });
it('test that the function takes a string and return it after capitalize it',()=>{
    expect(capitalizeTextFirstChar('hanan')).toBe('Hanan');
 });
 it('test if the function takes number it will throw type error says parameter should be string',()=>{
    expect(()=>{capitalizeTextFirstChar(123)}).toThrowError('parameters should be string');
 });
});

// problem 2
describe('Test createArray Function',()=>{
it('test that the return value of type array',()=>{
    expect(createArray(3)).toEqual(jasmine.any(Array));
});
it('test if we pass 2 it will return array of length 2 and test it includes 1',()=>{
    // expect(createArray(2).length).toBe(2);
    expect(createArray(2)).toHaveSize(2);
     expect(createArray(2)).toContain(1);
});
it(' test if we pass 3 it will return array of length 3 and test it doesn\'t include 3',()=>{
    expect(createArray(3).length).toBe(3);
    expect(createArray(3)).not.toContain(3);
});
});

// problem 3
describe('Test random Function',()=>{
it('test that the return value is a number',()=>{
    expect(typeof random(2,9)).toBe('number');
});
it('test if we pass 5,7 it will return a number >= 5 and <= 7',()=>{
    expect(random(5,7)).toBeGreaterThanOrEqual(5);
    expect(random(5,7)).toBeLessThanOrEqual(7);
});
it('test if we pass one parameter it will return NaN',()=>{
    expect(random(5)).toBeNaN();
   
});
});