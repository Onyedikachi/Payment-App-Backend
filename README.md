# Payment-App-Backend
###CHALLENGE

Prompt: For this problem we want to write a small piece of the backend for a peer to peer payment app. Please note that we want an in memory solution and that we do not need to implement an actual API. 
The functionality that we want for this problem are: adding users to the app, users depositing money into the app, users sending money to other app users, users checking their balance in the app, and users transferring their money out of the app. Please also write unit tests for your solution that ensures all functionality as described above are working properly.
Example Run through of the app:
User A is added to the app
User A deposits 10 dollars
User B is added to the app
User B deposits 20 dollars
User B sends 15 dollars to User A
User A checks their balance and has 25 dollars
User B checks their balance and has 5 dollars
User A transfers 25 dollars from their account
User A checks their balance and has 0 dollars

#To Test
`npm install`
`npm run test` or `node index.js`