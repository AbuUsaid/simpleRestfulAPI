//Note: In this you should only have routes defined. logic part should be put inside seperate folder i.e controller.
import express from 'express';
//below all the functions are being imported from controller folder
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
