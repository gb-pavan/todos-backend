const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
  logging: false, 
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};

// Sync all defined models (create tables) with the database
const syncDB = async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Database tables synced successfully.');
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB, syncDB };

