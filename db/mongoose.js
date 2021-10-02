const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log('Connected to Database')
    );
  } catch (err) {
    console.error('Database cannot connect');
  }
};
