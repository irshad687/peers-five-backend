import { Schema, model } from 'mongoose';

const RewardHistorySchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    points: {
        type: Number,
        required: true,
    },
    givenBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    givenTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const RewardModel = model('RewardHistory', RewardHistorySchema);

export { RewardModel };