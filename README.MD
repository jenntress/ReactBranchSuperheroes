TO START
- (cmdr) start mongod
- (new tab) connect to mongo, ctrl + c, cd into main directory, nodemon
- (new tab) cd into client, npm start
SUCCESS POINT "We set ourself up to do development on our fullstack app"
- (postman) Your data will be in postman in 3001
- (browser) Your api will be in browser at 3000 client 


GENERAL NOTES
- Everything in client is a "React Application" that is completely separate thing from our code.
- We can start our react codebase by changing our directory to client. We cd into there and run npm start.
- Everything outside of client is our note specific application. This only manages our database and our API endpoints. We can start up this project by just running nodemon server or node server.
- Each app has its own node modules and package.json
- We're gonna create a command that starts both of our apps at the same time and blends them together a little bit so that it seems like it's only one app running - but remember it's two!
- To start both apps at once run 'npm run dev' (this command has been created in our node package.json)
