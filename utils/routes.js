import { UserRouter } from '../components/users/users.route.js';
import { RewardsRouter } from '../components/rewards/rewards.routes.js';

const initializeRoute = (app) => {
  app.use('/api/users', UserRouter);
  app.use('/api/rewards', RewardsRouter);

  app.use('*', (req, res, next) => {
    res.status(400).send({
      message: 'Route not found',
    });
  });
};

export { initializeRoute };
