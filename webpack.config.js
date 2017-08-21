const path = require('path');

var glob = require('glob');

module.exports = {

  // using glob.sync to support wildcard mapping!
  entry: glob.sync('./src/*.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo')
  }
};
