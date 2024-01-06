import fs from 'fs'
import multer from "multer"
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { File } from '../models/file'
import { Request, Response } from 'express'
const uploadDirectory = 'uploads/'

if (!fs.existsSync(uploadDirectory)) {
fs.mkdirSync(uploadDirectory);
}

let storage = multer.diskStorage({
destination: (req, file, cb) => cb(null, uploadDirectory) ,
filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName)
} 
})

let upload = multer({ storage, limits:{ fileSize: 1000000 * 100 }, }).single('myfile') //100mb
const uploadFile = (req: Request, res: Response) => {
upload(req, res, async (err) => {
    if (err) {
    return res.status(500).send({ error: err.message })
    }
    
    const file = new File({
        filename: req.file.filename,
        uuid: uuidv4(),
        path: req.file.path,
        size: req.file.size
    })
    const response = await file.save()
    try {
        const response = await file.save();
        res.render('success', { uploadedFile: response });
    } catch (error) {
        res.status(500).send({ error: 'Error saving file information' });
    }
    })
}

export default uploadFile