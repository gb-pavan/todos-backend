const profileService = require('../services/profileService');

exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;

    if (!updates) return;

    const updatedUser = await profileService.updateProfile(userId, updates);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProfile = async (req,res) => {
  try {
    const {userId} = req.params;
    const userDetails = await profileService.getUserProfile(userId);
    res.json({userDetails});
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}


exports.deleteProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    await profileService.deleteProfile(userId);
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
