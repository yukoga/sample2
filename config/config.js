var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'sample-io2'
    },
    port: 7076,
    db: 'mongodb://localhost/sample-io2-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'sample-io2'
    },
    port: 7076,
    db: 'mongodb://localhost/sample-io2-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'sample-io2'
    },
    port: 7076,
    db: 'mongodb://localhost/sample-io2-production'
  }
};

module.exports = config[env];
