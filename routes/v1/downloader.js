/*
 * @Author: msumsc
 * @Date:   2018-04-11 20:55:16
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-11-05 21:55:33
 */

const _this = 'Reminder'
const request = require('request')

function get (url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) {
        reject(error)
        return
      }
      resolve(body)
    })
  })
}

module.exports = function (router) {
  router.route('/get').get(function (req, res) {
    get(req.query.url).then((response) => {
      res.send({ response: response })
    })
  })
}

console.log(_this + ':reminder Loaded!')
