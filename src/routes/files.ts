import express from 'express'
const router = express.Router()
import uploadFile from '../controllers/uploadFile'

router.post('/', uploadFile)

export default router