import express from 'express';

import { getProducts } from '../controllers/posts'

const router = express.Router();

router.get('/', getProducts );

export default router;