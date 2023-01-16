import { Router } from 'express';
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from '../controllers/items.controllers';
import { logMiddleware } from '../middleware/log';

const router = Router();

/** http://localhost:3001/item/ [GET] */

router.get('/', getItems);

router.get('/:id', logMiddleware, getItem);

router.post('/', postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router };
