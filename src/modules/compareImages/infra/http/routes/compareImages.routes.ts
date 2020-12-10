import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CompareController from '../controller/CompareController';

const compareImagesRouter = Router();
const compareController = new CompareController();

compareImagesRouter.post('/',celebrate({
  [Segments.QUERY]: {
    imagelink1: Joi.string().required(),
    imagelink2: Joi.string().required(),
  },
}),compareController.compare);


export default compareImagesRouter;
