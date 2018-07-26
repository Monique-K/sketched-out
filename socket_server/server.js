const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid/v1');
const PORT = 3001;
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`==> Sketched Out websocket server listening on ${ PORT }`));
const wss = new SocketServer({ server });



/* Picture data stored outside of socket connection */









/* On new Websocket connection: */
wss.on('connection', (ws, req) => {
  console.log('==> User connected!')

  ws.on('message', (data) => {
    console.log(data)
  });

  ws.on('close', () => console.log('Client disconnected'));
});
