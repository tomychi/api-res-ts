import { Router } from 'express';
import { getItems } from '../controllers/order.controllers copy';
import { checkSession } from '../middleware/session';

/**
 * Esta ruta solo puede acceder las personas que tienen session activa
 * que tenga un JWT valido
 */

const router = Router();

router.get('/', checkSession, getItems);

export { router };
