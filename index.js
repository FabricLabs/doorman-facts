'use strict';

const commands = {};
const facts = require('./assets/facts');
const random = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

for (let type in facts) {
  commands[`${type}fact`] = function () {
    return random(facts.type);
  };
}

module.exports = commands;
