const path = require('path');

var glob = require('glob');
var templates = glob.sync('./src/@(template|layout|builder)*.js');
templates.push('./bower_components/moment/moment.js');
templates.push('./bower_components/moment/locale/fr-ca.js');

module.exports = {

  // using glob.sync to support wildcard mapping!
  entry: {
    defaultTemplates: templates,
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
