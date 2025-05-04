import { Router, RequestHandler } from 'express';
import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
} from '../controllers/post.controller';

const router = Router();

router.post('/', createPost as RequestHandler);
router.get('/', getPosts as RequestHandler);
router.get('/:id', getPostById as RequestHandler);
router.put('/:id', updatePost as RequestHandler);
router.delete('/:id', deletePost as RequestHandler);

export default router;