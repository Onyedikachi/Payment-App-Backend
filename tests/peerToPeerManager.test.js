const { test, expect, describe } = require('@jest/globals');
const Manager = require('../PeerToPeerManager')
const User = require('../User');

const manager = new Manager()
const userA = new User("A")
const userB =  new User("B")

describe('Peer to Peer App', () => {   
    test('should add user A',()=>{
        manager.addUser(userA);
        expect(manager.users.length).toEqual(1);
    });

    test('should allow user A to deposit 10', () => {
        userA.deposit(10);
        expect(userA.checkBalance()).toEqual(10);
    });
   
    test('should add the user B', () => {
        manager.addUser(userB);
        expect(manager.users.length).toEqual(2);
    });
    
    test('should allow user B to deposit 20', () => {
        userB.deposit(20);
        expect(userB.checkBalance()).toEqual(20);
    });
    
    test('should not transfer 15 if first source of transfer(user) is undefined',()=>{
        manager.transfer(15, null, userA);

        expect(userA.checkBalance()).toEqual(10);
        expect(userB.checkBalance()).toEqual(20);

    });

    test('should not transfer 15 if no user is defined',()=>{
        manager.transfer(15, null, null);

        expect(userA.checkBalance()).toEqual(10);
        expect(userB.checkBalance()).toEqual(20);
    });
    
    test('should allow user B to transfer 15 to user A', () => {
        manager.transfer(15, userB, userA);

        expect(userA.checkBalance()).toEqual(25);
        expect(userB.checkBalance()).toEqual(5);
    });
    test('should allow user A to transfer 25 out of the app', () => {
        manager.transfer(25, userA, null);
        expect(userA.checkBalance()).toEqual(0);
    });
});