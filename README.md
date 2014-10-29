# `angular-anchor`

All external links open in a new tab. This module acts on every `a` element, watching for `href` changes. If the anchor has an external host, the target is set to `_blank.`

There are a few advantages to this approach. 

1. No need to remember `target="_blank"` for every external link.

2. It works on links rendered dynamically with `ng-bind-html`.

### Install

Install the package.

```sh
$ bower install --save angular-anchor
```

Include the script in your build system.

```sh
bower_components/angular-anchor/angular-anchor.js
```

Add the module as a dependency.

```javascript
angular.module('myApp', [ 'ngAnchor' ])
```

**MIT License.**
