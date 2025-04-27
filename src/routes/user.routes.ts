import { Router, RequestHandler } from 'express';
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} from '../controllers/user.controller';

const router = Router();

router.post('/', createUser as RequestHandler);
router.get('/', getUsers as RequestHandler);
router.get('/:id', getUserById as RequestHandler);
router.put('/:id', updateUser as RequestHandler);
router.delete('/:id', deleteUser as RequestHandler);

export default router;