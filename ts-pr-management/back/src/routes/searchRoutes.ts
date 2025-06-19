import { Router } from 'express';
import { search } from '../constrollers/searchControllers';

const router = Router();

router.get('/', search);

export default router;
