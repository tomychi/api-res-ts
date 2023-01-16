import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'Token.20292';
const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '2h',
  });
  return jwt;
};

const verifyToken = async (token: string) => {
  const isUser = verify(token, JWT_SECRET);
  return isUser;
};

export { generateToken, verifyToken };
