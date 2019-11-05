/*
 * @Author = Sky
 * @Date =   2018-02-13 10 = 28 = 07
 * @Last Modified by =   msumsc
 * @Last Modified time = 2018-05-29 21 = 54 = 40
 */
const _this = 'APP_DOWNLOADER'
const LOG = require('../utils/logger')

module.exports = function (router) {
  router.route('/downloader').get(function (req, res) {
    res.render('downloader/downloader', {
      initData: JSON.stringify({
        baseUrl: '/api/v1/downloader'
      })
    })
  })
}

LOG.info('LOADED => ' + _this)
