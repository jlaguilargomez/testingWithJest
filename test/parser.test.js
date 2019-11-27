const parser = require ('../parser');

let testObj = new parser.JSONParser('{"Susan":"police", "Pepe":"fireman"}');

test ('it must resolve the string property of the object', () => {
    expect(testObj.getString()).toEqual(testObj.string);
});

test ('it must resolve the objet form of the string', () => {
    expect(testObj.getObject()).toEqual(testObj.object);
});

test ('must resolve the object keys from the object stored', () => {
    let result = ['Susan', 'Pepe'];
    expect(testObj.getKeys()).toEqual(result);
});

test ('must resolve the object values from the object stored', () => {
    let result = ['police', 'fireman'];
    expect(testObj.getValues()).toEqual(result);
});

test ('must resolve the length of the string stored', () => {
    let result = 36;
    expect(testObj.getSize()).toBe(testObj.getString().length);
});