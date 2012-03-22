module.exports = function (app) {
  var socketIO;
  socketIO = require('socket.io').listen(app);

  if (!app.settings.socketIO) app.set('socketIO', socketIO);

  socketIO.sockets.on('connection', function (socket) {
    console.log("CONNECTED");
  });
};
