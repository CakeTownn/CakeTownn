require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const { default: mongoose } = require('mongoose')
const PORT = process.env.PORT || 3000
/*const mongoose = require('mongoose')
const session = require ('express-session')
const flash = require ('express-flash')
const MongoDbStore = require('connect-mongo')(session)*/

//new************************
//import postRoutes from './routes/posts.js';
//app.use('/posts',postRoutes);
//mongodb+srv://CakeTown689:CakeTown689@cluster0.dmsknin.mongodb.net/?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://caketown689:towncake689@cluster0.5lc8aas.mongodb.net/Cake?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify: false');

/*const mongoose = require('mongoose')
const DB = 'mongodb+srv://caketown689:towncake689@cluster0.5lc8aas.mongodb.net/Cake?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false
}).then(() => {
  console.log('connection succesfully');
}).catch((err) => console.log('no'));*/

//Database connection
/*const {MongoClient} = require('mongodb')
const { connection } = require('mongoose')
const url= 'mongodb://127.0.0.1';
const databaseName='Cake'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('menus');
    let data = await collection.find({}).toArray();
}
getData();*/

/*mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/Cake', {
  useNewUrlParser: true, useUnifiedTopology: true
},(err)=>{
  if(err){
    console.log('err')
  }else{
    console.log('succes')
  }
})*/

/*mongoose.set("strictQuery", false);
mongoose.connect(process.env.PORT || 3000, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  }).catch((err) => {
    console.log('Connection failed...');
  });
  const connection = mongoose.connection;
  connection.once('open', () => {
      console.log('Database connected...');
    });*/

 /*const url = 'mongodb://localhost/Cake';
 mongoose.connect(url, { 
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...');
});*/

 //session store
/*let mongoStore = new MongoDbStore({
  mongooseConnection: connection,
  collection: 'sessions'
})*/

 //session Config
 /*app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  store: mongoStore,
  saveUninitialized: false,
  cookie: {maxAge: 1000*60*60*24}
 }))

 app.use(flash())*/

//Assets
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname,'resources/views'))
app.set('view engine', 'ejs')


require('./routes/web')(app)
const Register = require("./app/models/user")
/*app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})*/