import { Router } from 'express';
import compareImagesRouter from '@modules/compareImages/infra/http/routes/compareImages.routes';

const routes = Router();

routes.use('/compare', compareImagesRouter);


export default routes;
