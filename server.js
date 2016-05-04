const express = require('express');
const cfenv = require('cfenv');
const app = express();
const appEnv = cfenv.getAppEnv();

app.use(express.static(__dirname + '/dist'));

console.log(__dirname + '/dist');

app.listen(appEnv.port, function () {
  console.log('server starting on ' + appEnv.url);
});
