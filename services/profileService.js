const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.updateProfile = async (userId, updates) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error('Profile not found');

  // Only update fields that are provided in the updates object
  if (updates.name) user.name = updates.name;
  if (updates.email) user.email = updates.email;
  
  if (updates.password)
  {
    const hashedPassword = await bcrypt.hash(updates.password, 10);
    user.password = hashedPassword;  // Remember to hash the password if needed
  }
   
  
  return await user.save();
};

exports.deleteProfile = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error('Profile not found');
  return await user.destroy();
};
