const express = require('express')
const fs = require('fs')
const app = express()

app.get('/proto/get', function (req, res) {
  let protobuf = require('protocol-buffers')
  let messages = protobuf(fs.readFileSync('./test.proto'))
  let buf = messages.Test.encode({
    num: 42,
    payload: 'hello world node js and javahhh呵呵呵',
    payloads: ''
  })
  console.log(buf) // 打印出来的是二进制流
  res.set('Content-Type', 'application/x-protobuf');
  res.send(JSON.stringify(buf)); //需要进行json化然后给前端。不然的话浏览器会自动解析成文字的
})

app.listen(4001, () => console.log('Example app listening on port 4001!'))