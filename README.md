# ember-spin.js

An Ember.js component for displaying a spinning loading indicator using spin.js.

See [here for a demo](http://aexmachina.github.io/ember-spin.js/).

## Installing

    bower install ember-spin.js

## Usage

    {{x-spinner lines=12 length=6 shadow=true color="#00F" width=20}}

Be sure to include both `spin.js` and `x-spinner.js` in your app.

You need to include `x-spinner.js` after you define your `App = Ember.Application.create()`.
See [this discussion](http://discuss.emberjs.com/t/combining-component-logic-and-template-together-in-single-file/2879/10)
for a discussion of ways to improve this.
