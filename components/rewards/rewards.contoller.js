import {RewardModel} from './rewards.model.js'
import {UserModel} from '../users/users.model.js'

export const createReward = async (req, res) => {
    const { points, givenBy, givenTo } = req.body;
    
    try {
        const userFrom = await UserModel.findById(givenBy);
        const userTo = await UserModel.findById(givenTo);
        
        if (userFrom.p5Balance < points) {
            return res.status(400).json({ error: 'Insufficient P5 points' });
        }
        
        userFrom.p5Balance -= points;
        userTo.rewardBalance += points;
        
        await userFrom.save();
        await userTo.save();

        const reward = new RewardModel({ points, givenBy, givenTo });
        await reward.save();

        res.status(201).json(reward);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };

  
  export const getP5History = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });
        const rewards = await RewardModel.find({ givenBy: req.params.userId });
        res.status(200).json(rewards);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch P5 history' });
    }
   }

   export const getRewardHistory = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });
        const rewards = await RewardModel.find({ givenTo: req.params.userId });
        res.status(200).json(rewards);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Reward history' });
    }
   }

// // 7. Delete a P5 record
// app.delete('/users/:id/p5/:recordId', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) return res.status(404).json({ error: 'User not found' });

//         const p5RecordIndex = user.p5History.findIndex(record => record._id.toString() === req.params.recordId);
//         if (p5RecordIndex === -1) return res.status(404).json({ error: 'P5 record not found' });

//         const p5Record = user.p5History[p5RecordIndex];
//         user.p5Balance += p5Record.points; // Revert the P5 points
//         user.p5History.splice(p5RecordIndex, 1); // Remove the record
//         await user.save();

//         res.json({ message: 'P5 record deleted successfully', p5Balance: user.p5Balance });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to delete P5 record' });
//     }
// });