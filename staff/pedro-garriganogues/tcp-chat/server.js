

const net = require('net')

const { argv: [, , host, from, message] } = process

const [host, port] = adress.split(':')

const conn = net.createConnection(port, host)
conn.write(`${from}: ${message}`)
conn.on('data', data => console.log(data.toString()))

