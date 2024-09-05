import { connect } from 'mongoose';

const MONGODB_URL = "mongodb://localhost:27017/PeersFive";

const initializeDBConnection = () => {
  connect(MONGODB_URL)
    .then(() => {
      console.log('DB connected successfully');
    })
    .catch((error) => {
      console.error('Error while connecting to DB', error);
    });
};

export { initializeDBConnection };
