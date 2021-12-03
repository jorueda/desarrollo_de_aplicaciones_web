"use strict";

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _http = require("http");

var _sockets = require("./sockets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3000;
const app = (0, _express.default)();
const httpServer = (0, _http.createServer)(app);
(0, _sockets.configureSocketSever)(httpServer);
app.use((0, _compression.default)());
app.use('/client', _express.default.static('public'));
app.get('/status', (req, res) => {
  res.json(_sockets.users);
});
app.get('/reset', (req, res) => {
  (0, _sockets.reset)();
  res.json({
    message: 'ok'
  });
});
httpServer.listen(PORT, () => console.log(`Sevidor esperando por peticiones en localhost:${PORT}`));
//# sourceMappingURL=server.js.map