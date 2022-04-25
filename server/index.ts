import express from 'express';
import cors from 'cors';
import https from 'https'
import fs from 'fs'
import cookieParser from 'cookie-parser'
const app = express();

// const controllers = require('./src/controller')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.listen(8080, () => {
    console.log('https server runnning')
})