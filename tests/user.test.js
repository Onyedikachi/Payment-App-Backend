const { test, expect, describe } = require('@jest/globals');
const User = require('../User');

const name = "name";
const user = new User(name);

describe('User', () => {   
    test('should have empty balance',()=>{
        expect(user.checkBalance()).toEqual(0);
    });

    test('should increase balance by 10 at its deposit', () => {
        user.deposit(10)
        expect(user.checkBalance()).toEqual(10);
    });

    test('should be zero after withdrawing 10', () => {
        user.withdraw(10)
        expect(user.checkBalance()).toEqual(0);
    });
   
    test('should have the same name set in the constructor', () => {
        expect(user.name).toEqual(name);
    });
});