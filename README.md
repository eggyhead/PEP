COLOR FILTER by eweil505
screencast: 

This is an app used to showcase the different ways you can filter information throughout
a node.js applicaiton.

To run the app from this file, you'll need the ability to generate a PSQL database (I use Postgres). The database is called 'colors' and you can initialize it from the command line 
by running: 

db init

Once you have the database up and running, you can seed it:

npm run seed
 
Then start the server from the command line:

npm install
npm run start

Navigate to localhost:8080 in your browser, and look at all the pretty colors!  