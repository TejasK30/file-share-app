import express from 'express'
const app = express()
import * as dotenv from "dotenv"
import ejs from 'ejs'
dotenv.config({ path: __dirname+'/.env' })
import {connectDB} from './config/db'
import files from './routes/files'
import show from './routes/show'
import path from 'path'
import download from './routes/download'

connectDB()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/api/files', files)
app.use('/files', show)
app.use('/files/download', download)

app.get('/', (req, res) => {
    res.render('upload')
})

app.listen(process.env.PORT, () => {
    console.log('server is running on port:', process.env.PORT);
})