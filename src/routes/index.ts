import { Router } from 'express';

import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;

const router = Router();

/**
 *
 * @param fileName
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split('.').shift();
  return file;
};

// cargador dinamico de rutas
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    // importacion dinamica
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
