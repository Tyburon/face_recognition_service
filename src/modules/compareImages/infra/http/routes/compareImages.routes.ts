import { Router } from 'express';

import CompareController from '../controller/CompareController';

const compareImagesRouter = Router();
const compareController = new CompareController();

compareImagesRouter.get('/', compareController.teste);


export default compareImagesRouter;
