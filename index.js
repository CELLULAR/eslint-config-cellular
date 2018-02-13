const { hasDep, hasDevDep } = require('about-this-app');

const configs = ['./common.js', './prettier.js'];

if (hasDep('react', 'preact')) configs.push('./react.js');
if (hasDevDep('flow-bin')) configs.push('./flow.js');

module.exports = {
  extends: configs,
};
