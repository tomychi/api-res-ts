import { Router } from 'express';
import { registerCtrl, loginCtrl } from '../controllers/auth.controller';
const router = Router();

/** http://localhost:3001/auth/register [POST] */
router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export { router };
