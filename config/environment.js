const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/hw-w07d01-${env}`;

module.exports = { port, env, dbURI };
