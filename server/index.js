const express = require("express");
require("dotenv").config();

const app = express();

const massive = require("massive");

const session = require("express-session");


const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
  } = process.env;


  app.use(express.static(`${__dirname}/../build`));

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(database => {
  app.set("db", database);
  console.log("database set!");
});

const server = app.listen(SERVER_PORT, () => {
  console.log(`Listening on Server ${SERVER_PORT}`);
});


const ctrl = require('./Controllers/controller')


app.get('/getUsers', ctrl.getUsers)
app.post('/addUser', ctrl.addUser)
app.post('/addDemerit', ctrl.changeDemerit)
app.post('/subDemerit', ctrl.changeDemerit)

// app.post('/subDemerit', ctrl.subDemerit)





