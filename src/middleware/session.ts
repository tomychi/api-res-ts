import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext';
import { verifyToken } from '../utils/jwt.handle';

const checkSession = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    // obtenemos el jwt del header
    const jwtByUsr = req.headers.authorization || '';
    const jwt = jwtByUsr.split(' ').pop(); // ['Bearer', 'token21123']
    // le digo que es de tipo { id:string }
    const isUser = (await verifyToken(`${jwt}`)) as { id: string }; // para que no se pase undefined
    if (!isUser) {
      res.status(401);
      res.send('NO_TIENES_UN_JWT_VALIDO');
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send('SESSION_NO_VALIDA');
  }
};

export { checkSession };
