/*
 * @Author: Sky
 * @Date:   2018-02-13 10:28:34
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-11-05 21:44:49
 */

var http = require('http')

var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var responseTime = require('response-time')
var morgan = require('morgan')
var LOG = require('./utils/logger')

var app = express()

app.use(
  morgan(
    function (tokens, req, res) {
      return `${new Date().toJSON()} [SKY] ${tokens.method(
        req,
        res
      )}: ${tokens.url(req, res)}`
    }, { immediate: true }
  )
)
app.use(cookieParser())
app.use(responseTime())

app.use(
  cookieSession({
    name: 'session',
    secret: 'skyme5 is my hero',
    httpOnly: true,
    maxAge: 30 * 60 * 1000,
    secure: true,
    overwrite: false
  })
)

app.use(
  bodyParser.json({
    limit: 5242880000
  })
)

app.use(
  bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 1024102420
  })
)

app.use(express.static('public'))

app.set('title', 'SkyME5 API')
app.set('strict routing', true)
app.set('x-powered-by', false)
app.set('view engine', 'pug')
app.set('trust proxy', 1)

var server = http.createServer(app)
const port = process.env.PORT || 8080
server.listen(port)

var apps = express.Router()
var router = express.Router()

app.use('/apps', apps)
app.use('/api', router)

require('./routes/v1.js')(router)
require('./apps/apps.js')(apps)

LOG.info(`LOADED => REST API @http:/localhost:${port}/`)
