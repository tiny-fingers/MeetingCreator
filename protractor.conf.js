exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'firefox'
  },

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    'src/e2e/**/*.feature' // accepts a glob
  ],

  framework: 'custom',
  cucumberOpts: {
    // require step definitions
    require: [
      'src/e2e/steps/*.steps.js', // accepts a glob
      'src/e2e/features/*.js',
    ],
    compiler: [ 'ts:ts-node']
  }
};
