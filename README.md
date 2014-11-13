# React Cond [![Build Status](https://travis-ci.org/kimagure/react-cond.svg)](https://travis-ci.org/kimagure/react-cond)

Render components conditionally using pairs of [boolean, Component].


## Usage

Install this package to your project.

Use CommonJS:

```js
var Cond = require('react-cond');

var YourComponent = React.createClass({
  render: function () {
    <div>
      <Cond className="my-conditions">
        {3 === 3} <h1>Conditionals in my JSX?</h1>
        {1 !== 1} <h3>pls no</h3>
        {2 !== 1} YASSSSSSS
        {1 === 1} <p>医食同源</p>
      </Cond>
    </div>
  }
});
```


## Demo

JSFiddle: http://jsfiddle.net/606xh7z7/
