import express from 'express'
const router = express.Router()
import downloadFile from '../controllers/downloadFIle'

router.get('/:uuid', downloadFile)

export default router