import { Router } from 'express';
import { getTeams } from '../constrollers/teamControllers';

const router = Router();

router.get('/', getTeams);

export default router;
