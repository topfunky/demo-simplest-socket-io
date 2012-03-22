/*
 * GET home page.
 */

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('index', {
      title: 'Express'
    })
  });

  // NOTE: Meant to be used from Ajax.
  app.post('/update', function (req, res) {
    var socketIO;
    if (socketIO = app.settings.socketIO) {
      socketIO.sockets.emit("user:new", req.body.user_name);
    }
    res.send('OK', 200);
  });

};
