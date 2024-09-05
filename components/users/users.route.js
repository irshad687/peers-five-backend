import { Router } from 'express';
import {
  getUser,
  getUsers,
  createUser,
  editUser
} from './users.contoller.js';

const UserRouter = Router();

UserRouter.route('/').get(getUsers);

UserRouter.route('/:id').get(getUser);

UserRouter.route('/').post(createUser);

UserRouter.route('/:id').put(editUser);

export { UserRouter };
