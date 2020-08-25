const { hasDep, hasDevDep } = require('about-this-app');

const configs = ['./common.js'];

if (hasDep('react', 'preact')) configs.push('./react.js');
if (hasDevDep('flow-bin')) configs.push('./flow.js');

if (hasDep('typescript')) configs.push('./typescript.js');

configs.push('./prettier.js');
configs.push('./rulesCustom.js');

module.exports = {
  extends: configs,
};
