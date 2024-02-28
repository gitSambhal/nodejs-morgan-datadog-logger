const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'debug',
  exitOnError: false,
  format: format.combine(format.json()),
  transports: [
    new transports.Console(),
    new transports.Http({
      host: 'http-intake.logs.datadoghq.com',
      // host: 'http-intake.logs.datadoghq.eu',
      path: `/api/v2/logs?dd-api-key=${process.env.DD_API_KEY}&ddsource=nodejs&service=${process.env.DD_SERVICE}&host=${process.env.DD_SERVICE}xx`,
      ssl: true,
    }),
  ],
});

module.exports = { logger };
