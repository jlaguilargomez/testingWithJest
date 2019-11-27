let db = require ('../db');

beforeAll (() => {
    return db.setUpDatabase();
});

test ('check if the user exist and resolve the object from that', () => {
    expect(db.getUser('cantolo_21')).toEqual({"user": "cantolo_21", "pass": "1234"});
});

test ('check if the user exist and if it exist, check if it has the password introduced', () => {
    expect(db.checkPassword('cantolo_21','1234')).toBeTruthy();
});
