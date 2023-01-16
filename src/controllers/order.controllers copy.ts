import { Response } from 'express';
import { RequestExt } from '../interfaces/req-ext';
import { handleHttp } from '../utils/error.handle';

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'Esto SOLO lo ven con personas con session / JWT',
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOGS');
  }
};

export { getItems };
