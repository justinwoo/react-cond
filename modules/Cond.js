var React = require('react');

/**
 * Conditional rendering of React components requires an even number of children.
 * You will need to provide pairs of [[boolean, component], {...}] to use this component.
 * You may optionally provide a className for the container <div>
 */
var Cond = React.createClass({
  render: function () {
    var result = this.props.children.reduce(function (agg, inp, i) {
      switch (inp) {
        case true:
          agg.precedingIsTrue = true;
          break;
        case false:
          agg.precedingIsTrue = false;
          break;
        case ' ':
          break;
        default:
          if (agg.precedingIsTrue === true) {
            agg.children.push(inp);
          }
          break;
      }
      return agg;
    }, {
      children: [],
      precedingIsTrue: false
    });
    return (
      <div className={this.props.className}>
        {result.children}
      </div>
    );
  }
});

module.exports = Cond;
