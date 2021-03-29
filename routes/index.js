import { Router } from 'express';
import spatialRoutes from './spatialRoutes';

const rootRouter = Router();

rootRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 'Server is active...',
  });
});
rootRouter.use(spatialRoutes);

export default rootRouter;
