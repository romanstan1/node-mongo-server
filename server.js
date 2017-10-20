const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise = require('bluebird');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

const { port, env, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

const app = express();
app.use(customResponses);
app.use(express.static(`${__dirname}/public`));

if (env !== 'test') app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(routes);

app.use(errorHandler);

app.listen(port, () => console.log(`API online - port ${port}`));
