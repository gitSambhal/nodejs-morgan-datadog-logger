const morgan = require('morgan');
const json = require('morgan-json');
const { logger } = require('./logger');

const morganFormat = json(
  ':date[iso] :message :method :url :status :res[content-length] bytes :response-time ms'
);

morgan.token('message', function (req, res) {
  return `HTTP Request: ${req.method} ${req.url}`;
});

const morganMiddleware = morgan(morganFormat, {
  stream: {
    write: (message) => {
      logger.info(message);
    },
  },
});

module.exports = { morganMiddleware };
