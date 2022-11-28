import { Router } from 'express';
import { getAllPlayers, getPlayerById } from '../controllers';

const router = Router();

router.get('/', getAllPlayers);
router.get('/:playerId', getPlayerById);

export default router;
