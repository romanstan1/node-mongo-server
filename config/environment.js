const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/hw-w07d01-${env}`;
const admin = process.env.SPECSAVER_ADMIN_USERNAME
const password = process.env.SPECSAVER_ADMIN_PASSWORD
// const dbURI = process.env.MONGODB_URI || `mongodb://${admin}:${password}@ds129315.mlab.com:29315/specsaver-appointments`;


module.exports = { port, env, dbURI };
