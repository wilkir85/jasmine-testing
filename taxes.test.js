//Matchers

// it('should calculate the high tax bracket', function () {
// expect(calculateTaxes(50000)).toEqual(12500);
// expect(calculateTaxes(100000)).toEqual(25000);
// })
// // expect('hello').toEqual('hello')
// // })
// // it ('should calculate the low tax bracket', function () {

// // })


// it('should calculate the low tax bracket', function () {
//     expect(calculateTaxes(10000)).toEqual(1500);
//     expect(calculateTaxes(1000)).toEqual(150);
//     expect(calculateTaxes(0)).toEqual(0);
// })

// it('reject invalid incomes', function () {
//     //string
//     expect(() => calculateTaxes('string')).toThrowError();
//     //array
//     expect(() => calculateTaxes([])).toThrowError();
//     //bolian
//     expect(() => calculateTaxes(true)).toThrowError();
// })

// //use .toEqual not .toBe
// it('should remove duplicates from an array', function() {
//     expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
//     expect(removeDupes([1,2,3])).toBeInstanceOf(Array)
// })

// // Can use .toBe
// it('should remove duplicates from an string', function() {
//     expect(removeDupes('hello')).toEqual('helo')
//     // pass in string and get string back
//     expect(removeDupes('hello')).toBeInstanceOf(String);

// })

// it('should remove value from array', function(){
//     expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
// })

// Group together with describe
describe('calculateTaxes tests', function () {
    it('should calculate the high tax bracket', function () {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(100000)).toEqual(25000);
        })
        // expect('hello').toEqual('hello')
        // })
        // it ('should calculate the low tax bracket', function () {
        
        // })
        
        
        it('should calculate the low tax bracket', function () {
            expect(calculateTaxes(10000)).toEqual(1500);
            expect(calculateTaxes(1000)).toEqual(150);
            expect(calculateTaxes(0)).toEqual(0);
        })
        
        it('reject invalid incomes', function () {
            //string
            expect(() => calculateTaxes('string')).toThrowError();
            //array
            expect(() => calculateTaxes([])).toThrowError();
            //bolian
            expect(() => calculateTaxes(true)).toThrowError();
        })
})

describe('removeDupes tests', function () {
            //use .toEqual not .toBe
    it('should remove duplicates from an array', function() {
        expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
        expect(removeDupes([1,2,3])).toBeInstanceOf(Array)
    })
    
    // Can use .toBe
    it('should remove duplicates from an string', function() {
        expect(removeDupes('hello')).toEqual('helo')
        // pass in string and get string back
        expect(removeDupes('hello')).toBeInstanceOf(String);
    
    })
})

describe('remove tests', function () {
    it('should remove value from array', function(){
        expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
    })
})

// Test clean up
// describe('submitForm() tests', () => {
//       it('saves input val to usernames array', () => {
//     //    input.value = 'chickenGal';
//     //    submitForm();
//     //    expect(usernames.length).toBe(1)
//     //    expect(usernames).toContain('chickenGal')
//       })
// })

//built in hook called afterEach, using to reset input after each test is ran
// afterEach(function(){
    //console.log("AFTER EACH!!")
    //clean up code
    // input.value = '';
    // usernames = [];
// })
// beforeEach(function () {
//     console.log("BEFORE!!")
// })

// beforeAll(() => {
//     console.log("BEFORE ALL")
// })

// afterAll(() => {
//     console.log("AFTER ALL")
// })