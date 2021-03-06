var xhr = require('xhr')

function get (url, callback) {
  xhr({ method: 'GET', url: url, json: true, timeout: 30000 }, function (err, resp, body) {
    if (err) return callback(err)
    if (resp.statusCode !== 200) return callback(new Error('HTTP status code: ' + resp.statusCode))
    callback(null, body)
  })
}

function post (url, data, callback) {
  xhr({ method: 'GET', url: url, json: true, timeout: 30000, data: data }, function (err, resp, body) {
    if (err) return callback(err)
    if (resp.statusCode !== 200) return callback(new Error('HTTP status code: ' + resp.statusCode))
    callback(null, body)
  })
}

module.exports = {
  get: get,
  post: post
}
