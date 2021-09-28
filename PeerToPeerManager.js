class PeerToPeerManager {

    constructor(){
        this.users = []
    }
    addUser(user){
        this.users.push(user)
    }

    transfer(sum, fromUser, toUser){
        if (fromUser) {fromUser.withdraw(sum)} else return
        if (toUser) toUser.deposit(sum)
    }
}

module.exports = PeerToPeerManager