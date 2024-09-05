import { Router } from 'express';
import {
  getP5History,
  createReward,
  getRewardHistory
} from './rewards.contoller.js';

const RewardsRouter = Router();

RewardsRouter.route('/:userId/reward').post(createReward);
RewardsRouter.route('/:userId/p5').get(getP5History);
RewardsRouter.route('/:userId/reward-history').get(getRewardHistory);

export { RewardsRouter };