import express  from 'express';

import { createUser, getUser, updateUser, deleteUser, getUserById  } from '../controllers/users.js';

const router = express.Router();

// all routes are starting with /users.
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;