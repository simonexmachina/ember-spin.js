# ember-spin.js

An Ember.js component for displaying a spinning loading indicator using spin.js.

See [here for a demo](http://aexmachina.github.io/ember-spin.js/).

## Installing

    bower install ember-spin.js

## Usage

You need to do two things to make this work:

1. Define an empty `components/em-spinner` template. See [this issue](https://github.com/emberjs/ember.js/issues/3231)
  if you (like me) think this is unfortunate.
2. Include this file after you define your `App = Ember.Application.create()`.
  See [this discussion](http://discuss.emberjs.com/t/combining-component-logic-and-template-together-in-single-file/2879/10)
  for a discussion of ways to improve this.

Then...

    {{x-spinner lines=12 length=6 shadow=true color="#00F" width=20}}

