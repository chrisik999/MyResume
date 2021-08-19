const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST, 
      email:process.env.EMAIL || 'c4ajaero@gmail.com' ,
      password:process.env.PASS || '20151016125',
      service:process.env.SERVICE || 'gmail'
  }
  
  module.exports = config;