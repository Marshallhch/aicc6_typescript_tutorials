import { Router } from 'express';
import { getUsers } from '../constrollers/userControllers';

const router = Router();

router.get('/', getUsers);

export default router;
