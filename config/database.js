const mongoose = require('mongoose');

module.exports = async function () {
  try {
    const options = {
      useNewUrlParser: true,
      poolSize: 2,
      keepAlive: 300000,
      promiseLibrary: global.Promise,
      useFindAndModify: false,
      useUnifiedTopology: true
    };
    if (process.env.NODE_ENV == 'production') {
      await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`, options);
    } else {
      await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, options);
    }

    console.log('Connected to MongoDB Database...');
    return mongoose;
  } catch (error) {
    console.error('Failed to connect to mongodb database: ', error);
  }
}
