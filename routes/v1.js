/*
 * @Author: msumsc
 * @Date:   2018-09-17 20:09:48
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-11-05 21:30:08
 */

module.exports = function (router) {
  router.route('/').get(function (req, res) {
    res.send('Node.js API Version 1')
  })

  require('./v1/downloader')(router)
}
