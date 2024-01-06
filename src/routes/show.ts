import express from 'express'
const router = express.Router()
import findFile from '../controllers/findFile'
router.get('/:uuid', findFile)

export default router