'use strict';

const homedir = require('os').homedir();
const path = require('path');
const md5 = require('md5');
const readFileSync = require('./fs/readFileSync');
const fileExistsSync = require('./fs/fileExistsSync');

const Serverless = require('../Serverless');

const tab = require('tabtab')({
  name: 'serverless',
});

const getSuggestions = (cacheFilePath) => {
  const cacheFile = readFileSync(cacheFilePath);

  tab.on('serverless', (data, done) => {
    done(null, Object.keys(cacheFile.commands));
  });

  Object.keys(cacheFile).forEach(command => {
    tab.on(command, (data, done) => {
      done(null, cacheFile.commands[command]);
    });
  });

  tab.start();
};

const autocomplete = () => {
  let servicePath = process.cwd();
  if (!fileExistsSync(path.join(servicePath, 'serverless.yml'))) {
    servicePath = 'x';
  }
  const cacheFilePath = `${homedir}/.serverless/cache/${md5(servicePath)}/autocomplete.json`;

  if (!fileExistsSync(cacheFilePath)) {
    const serverless = new Serverless();
    return serverless.init().then(() => getSuggestions(cacheFilePath));
  }

  return getSuggestions(cacheFilePath);
};

module.exports = autocomplete;
