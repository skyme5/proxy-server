/*
 * @Author: Aakash Gajjar
 * @Date:   2019-11-05 19:16:28
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-11-05 20:53:12
 */

const
    socks5 = require('simple-socks'),
    server = socks5.createServer().listen(1080),
    http = require('http');

// When a reqest arrives for a remote destination
server.on('proxyConnect', function (info, destination) {
    console.log('connected to remote server at %s:%d', info);
});

// When data arrives from the remote connection
// server.on('proxyData', function (data) {
//   console.log(data.length);
// });

// When an error occurs connecting to remote destination
server.on('proxyError', function (err) {
    console.error('unable to connect to remote server');
    console.error(err);
});

// When a proxy connection ends
server.on('proxyEnd', function (response, args) {
    console.log('socket closed with code %d', response);
    console.log(args);
});

var server = http.createServer(function (req, res) {
    res.send("Running");
});
server.listen(80);
