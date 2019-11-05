/*
 * @Author: Sky
 * @Date:   2018-10-04 20:23:29
 * @Last Modified by:   Sky
 * @Last Modified time: 2019-11-05 22:05:24
 */

function request (type, url, data = null) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8')
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(xhr)
        }
      }
    }
    data === null ? xhr.send() : xhr.send(JSON.stringify(data))
  })
}

var button = document.getElementById('submit')
button.onclick = function () {
  var url = document.querySelector('input').value

  request('GET', '/api/get?url='+encodeURIComponent(url)).then((data) => {
    document.querySelector('#preview').innerHTML = data.response
  })
}
