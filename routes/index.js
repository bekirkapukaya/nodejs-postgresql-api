import { Router } from 'express';

const rootRouter = Router();

rootRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 'Server is active...',
  });
});

export default rootRouter;
