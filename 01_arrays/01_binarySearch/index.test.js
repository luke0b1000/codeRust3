const binarySearch1 = require('./index');

let mylist = [
    1,
    10,
    20,
    47,
    59,
    63,
    75,
    88,
    99,
    107,
    120,
    133,
    155,
    162,
    176,
    188,
    199,
    200,
    210,
    222,
];

const siteList = [
    10,
    20,
    47,
    59,
    63,
    75,
    88,
    99,
    107,
    120,
    133,
    155,
    162,
    176,
    188,
    199,
    200,
    210,
    222,
];

describe.skip('luke describe 1', () => {
    test('luke test 1', () => {
        expect(binarySearch1(mylist, 20)).toEqual(2);
    });
    test('luke test 2', () => {
        expect(binarySearch1(siteList, 75)).toEqual(5);
    });
});
