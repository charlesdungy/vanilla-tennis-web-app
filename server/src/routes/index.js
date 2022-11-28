import { Router } from 'express';
import playerRouter from './playerRouter';

const router = Router();

router.use('/players', playerRouter);

export default router;
