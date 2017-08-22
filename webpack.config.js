const path = require('path');

var glob = require('glob');

module.exports = {

  // using glob.sync to support wildcard mapping!
  entry: {
    defaultTemplates: glob.sync('./src/@(template|layout|builder)*.js'),
    moment: [
      './bower_components/moment/moment.js',
      './bower_components/moment/locale/fr-ca.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'demo')
  }
};
