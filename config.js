const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoUri: process.env.MONGODB_URI,
      email:process.env.EMAIL,
      password:process.env.PASS,
      service:process.env.SERVICE 
  }
  
  module.exports = config;