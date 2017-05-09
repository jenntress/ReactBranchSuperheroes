TO START "Set ourself up to do development on our fullstack app"
1. (cmdr) start mongod
2. (new tab) connect to mongo, ctrl + c, cd into main directory, nodemon
3. (new tab) cd into client, npm start
4. (postman) Your data will be in postman in 3001
5. (browser) Your client api will be in browser at localhost 3000

SUMMARY OF CHANGES (AS OF 5/8/17)
- Add the rest of the fields in the EditHeroForm/Container
- Updated a few superheros in the database
- Added CSS float to EditHeroForm for image

CRITICAL ITEMS TO FIX & HOMEWORK
- Debug the superPowers route? - every edit adds a null power
- Debug superPowers on client side - can't enter text in input box
- Add a delete button next to the edit button on each superhero
- Get the villains edit to work

HOW DO I...
- Make the nemesis a link to the villain
- Add a featured villain/superhero (random - shows up on homepage)
- Refresh the page after an edit/PUT on submit

TRIVIAL ITEMS TO FIX
- Clean up superheroes database items (fill all keys with values)
- Style the CSS nav bar, BoxOfItems, panel
- Add a welcome tagline/text to the HomeContainer
- Replace batman and jean grey with anakin skywalker and gandalf
- Get a new favicon

POSTMAN HOW TO
- GET: use url http://localhost:3001/api/villains/ or superheroes
- POST: select Body at the top, and x-www.form-urlencoded
- POST multiple powers: multiple lines(inputs) of evilPower "doesn't work csv!"
- PUT:
- POST in JSON with async.each:
  -  "async.each" doing a bunch of things at once.. asynchronously (good for batching). async for each thing in this array of data, for each item in the array the function will execute. Must tell async when to quit - use "cb" - put it with whatever results I want once I've completed that action.
  - In postman, http://localhost:3000/api/superheroes/multiple-superPowers Go to POST, then Body, then "raw", then text dropdown to JSON, then type:
    {"data":[{ "name": "superman"},{ "name": "uberman" },{ "name": "loserman" }]}

GENERAL NOTES
- Everything in client is a "React Application" that is completely separate thing from our code.
- We can start our react codebase by changing our directory to client. We cd into there and run npm start.
- Everything outside of client is our node specific application. This only manages our database and our API endpoints. We can start up this project by just running nodemon server or node server.
- Each app has its own node modules and package.json
- This doesn't work yet: ...We're gonna create a command that starts both of our apps at the same time and blends them together a little bit so that it seems like it's only one app running - but remember it's two! To start both apps at once run 'npm run dev' (this command has been created in our node package.json)...
