const { hasAnyDep } = require('about-this-app');

const configs = ['./common.js'];

if (hasAnyDep('react', 'preact')) configs.push('./react.js');

if (hasAnyDep('typescript')) configs.push('./typescript.js');

configs.push('./prettier.js');
configs.push('./rulesCustom.js');

module.exports = {
  extends: configs,
};
