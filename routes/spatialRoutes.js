import { Router } from 'express';
import { getPoints } from '../controllers/spatialControllers';

const spatialRoutes = Router();

spatialRoutes.get('/getpoints', getPoints);

export default spatialRoutes;
