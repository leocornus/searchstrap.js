const path = require('path');

// using glob.sync to support wildcard mapping!
var glob = require('glob');
// we need an array for a multiple list of entry files.
var templates = new Array();
// the concat function will lile the push in PHP.
templates = templates.concat(glob.sync('./src/@(template|layout|builder)*.js'));

module.exports = {

  entry: {
    // the output bundle file will have name 
    // defaultTemplates.js
    defaultTemplates: templates,
    //moment: [
    //  './bower_components/moment/src/moment.js'
    //]
  },
  output: {
    // set up the file name pattern here
    filename: '[name].js',
    // we will save the output bundle file in demo folder
    path: path.resolve(__dirname, 'demo')
  }
};
