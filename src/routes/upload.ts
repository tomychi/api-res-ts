import { Router } from 'express';

import { getFile } from '../controllers/upload.controller';
import multerMiddleware from '../middleware/file';
import { checkSession } from '../middleware/session';
const router = Router();

// single va a recibir un archivo
// array multiples archivos
router.post('/', checkSession, multerMiddleware.single('myfile'), getFile);

export { router };
