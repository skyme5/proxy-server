/*
 * @Author: msumsc
 * @Date:   2018-08-08 20:12:14
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-10-07 22:01:38
 */

var winston = require('winston')

var format = winston.format.printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
})

var logger = winston.createLogger({
  exitOnError: false,
  outputCapture: 'std',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
    winston.format.label({ label: 'SKY' }),
    winston.format.timestamp(),
    format
  ),
  transports: [
    new winston.transports.Console({
      level: 'silly'
    }),
    new winston.transports.File({
      filename: 'logs/' + new Date().toJSON().replace(/:/g, '-') + '.log'
    })
  ]
})

module.exports = logger
