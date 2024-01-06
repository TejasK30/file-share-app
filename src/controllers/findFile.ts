import { Request, Response } from 'express'
import { File } from '../models/file'

const findFile = async(req: Request, res: Response) => {
    try {
        const file = await File.findOne({uuid: req.params.uuid})
        if(!file){
            res.render('download', {error: 'Link has been expired!!'})
        }
        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    } catch (error) {
        res.render('download', {error: 'Something went wrong!!'})
    }
}

export default findFile