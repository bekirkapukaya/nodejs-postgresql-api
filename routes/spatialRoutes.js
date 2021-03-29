import { Router } from 'express';
import {
  getPoints,
  getLines,
  getPolygons,
} from '../controllers/spatialControllers';

const spatialRoutes = Router();

spatialRoutes.get('/getpoints', getPoints);
spatialRoutes.get('/getlines', getLines);
spatialRoutes.get('/getpolygons', getPolygons);

export default spatialRoutes;
