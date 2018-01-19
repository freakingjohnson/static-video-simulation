require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , cloudinary = require('cloudinary')
    , controller = require('./controllers')


const app = express()

app.use(cors())

app.use(bodyParser.json())

massive(process.env.DB_CONNECTION).then((db)=>{
    app.set('db', db)
})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))
app.use(express.static(__dirname + '/../build'))

app.post('/api/postcards', controller.postCards)
app.get('/api/getcards', controller.getCards)

app.listen(process.env.SERVER_PORT, () => { console.log('(0)_(0)') })
