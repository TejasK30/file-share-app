import { Request, Response } from 'express'
import { File } from '../models/file'

const downloadFile = async (req: Request, res: Response) => {
    try {
        const file = await File.findOne({uuid: req.params.uuid})                
        if(!file){
            res.render('download', {error: ' File link has been expired. '})
        }
        const filePath = `${file.path}`
        res.download(filePath)
    } catch (error) {
        res.status(500).json({error: 'something went wrong !!'})
    }
}

export default downloadFile