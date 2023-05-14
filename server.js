const path = require('path');
const express = require('express');

const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const seedDatabase = require('./seeds/seed');

const app = express();
const PORT = process.env.PORT || 3001;

// import sequelize connection
const sequelize = require('./config/connection');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// session Storage
const sessionSettings = {
  secret: 'secretttt',
  cookie: {
    maxAge: 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sessionSettings));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));


// sync sequelize models to the database, then turn on the server

  //go ahead and seed database automatically
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });

