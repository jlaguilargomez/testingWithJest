const utils = require ('../utils');

test ('must resolve the sum between "a" and "b"', () => {
    expect(utils.sum(2,3)).toBe(5);
});

test ('return the first element of an array', () => {
    expect(utils.getFirst([2,3,4])).toBe(2);
});

test ('must apply the function to every element of the array', () => {
    expect(utils.map([2,3,4],(x) => {
        return x+2
    })).toEqual([4,5,6]);
});

test ('must change the property of an object with a new value', () => {
    let car = {
        color: 'blue',
        size: 'big',
        name: 'Kid',
    };

    let carChanged = {
        color: 'red',
        size: 'big',
        name: 'Kid',
    };

    expect(utils.assoc('color', 'red', car)).toEqual(carChanged);
});

test('it must add the second array to the first one', () => {
    let head = [1,2,3,4,5];
    let headResult = [1,2,3,4,5,6,7,8];

    expect (utils.concat([head, 6,7,8])).toEqual(headResult);
});