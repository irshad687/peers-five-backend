import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    p5Balance: {
        type: Number,
        default: 100, 
    },
    rewardBalance: {
        type: Number,
        default: 0,
    }
});

const UserModel = model('User', UserSchema);

export { UserModel };