class User {
    constructor(name) {
        this.name = name
        this.balance = 0
    }

    deposit(sum){
        this.balance+=sum
    }

    withdraw(sum){
        this.balance-=sum
    }
    checkBalance(){
        return this.balance
    }
}

module.exports = User