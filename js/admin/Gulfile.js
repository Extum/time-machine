var gulp = require('flarum-gulp');
gulp({
  modules: {
    'extum/flarum-ext-time-machine': [
      'src/**/*.js',
    ]
  }
});
