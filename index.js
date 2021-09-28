const Manager = require('./PeerToPeerManager')
const User = require('./User');

const manager = new Manager();

const userA = new User("A");
manager.addUser(userA);
userA.deposit(10);

const userB =  new User("B");
manager.addUser(userB);
userB.deposit(20);

manager.transfer(15, userB, userA);

console.log(userA.checkBalance());
console.log(userB.checkBalance());

manager.transfer(25, userA, null);
console.log(userA.checkBalance());



