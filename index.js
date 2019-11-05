/*
 * @Author: Aakash Gajjar
 * @Date:   2019-11-05 19:16:28
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-11-05 20:56:16
 */

const
    socks5 = require('simple-socks'),
    proxy = socks5.createServer().listen(process.env.PORT || 80),
    http = require('http');

// When a reqest arrives for a remote destination
proxy.on('proxyConnect', function (info, destination) {
    console.log('connected to remote proxy at %s:%d', info);
});

// When data arrives from the remote connection
// proxy.on('proxyData', function (data) {
//   console.log(data.length);
// });

// When an error occurs connecting to remote destination
proxy.on('proxyError', function (err) {
    console.error('unable to connect to remote proxy');
    console.error(err);
});

// When a proxy connection ends
proxy.on('proxyEnd', function (response, args) {
    console.log('socket closed with code %d', response);
    console.log(args);
});
