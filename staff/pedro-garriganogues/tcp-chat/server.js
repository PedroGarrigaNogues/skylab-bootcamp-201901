

const net = require('net')

const { argv: [, , host, from, message] } = process

const [ip, port] = host.split(':')

const conn = net.createConnection(port, ip)
conn.end(`${from}: ${message}`)
conn.on('data', data => console.log(data.toString()))
