const fs = require('fs/promises')

const pageageFile = {
  "name": "@copoko/nib",
  "description": "Stylus mixins and utilities",
  "version": `0.0.${Date.now()}`,
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/CoPoKo/nib.git"
  },
  "peerDependencies": {
    "stylus": "*"
  },
  "devDependencies": {
    "stylus": ">= 0.55.0",
    "connect": "1.x",
    "jade": "0.22.0",
    "mocha": "*",
    "should": "*"
  },
  "author": "CoPoKo",
  "main": "lib/nib.js",
  "engines": {
    "node": "*"
  },
  "scripts": {
    "test": "mocha test/runner.js",
    "test-server": "node test/server.js"
  }
}

const pageageFileStr = JSON.stringify(pageageFile)
fs.writeFile('./package.json', pageageFileStr, 'utf8', (err) => {
  if (err) throw err
})

