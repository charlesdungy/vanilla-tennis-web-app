import { Router } from 'express';
import { getAllPlayers, getPlayerAsset, getPlayerById } from '../controllers';

const router = Router();

router.get('/', getAllPlayers);
router.get('/:playerId', getPlayerById);
router.get('/:playerId/asset', getPlayerAsset);

export default router;
