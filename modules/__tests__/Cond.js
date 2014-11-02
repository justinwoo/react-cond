jest.dontMock('../Cond');
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Cond = require('../Cond');

function elementMountTest(element) {
  return element.isMounted();
}

function elementChecks(element) {
  expect(element).toBeDefined();
}

var component;

describe('Cond', function () {
  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <Cond className="my-conditions">
        {3 === 3} <h1>Conditionals in my JSX?</h1>
        {1 !== 1} <h3>pls no</h3>
        {2 !== 1} YASSSSSSS
        {1 === 1} <p>医食同源</p>
      </Cond>
    );
  });

  it('renders correctly', function () {
    expect(component).toBeDefined();
    expect(TestUtils.isCompositeComponentWithType(
      component, Cond
    )).toBe(true);
  });

  it('has the correct content', function () {
    /**
     * output structure:
     * <div>
     *   <h1>Conditionals in my JSX?</h1>
     *   YASSSSSSS
     *   <p>医食同源</p>
     * </div>
     */
    var elements = TestUtils.findAllInRenderedTree(component, elementMountTest);

    var containerElement = elements[1];
    elementChecks(containerElement);
    expect(containerElement.props.className).toBe('my-conditions');

    var h1Element = elements[2];
    elementChecks(h1Element);
    expect(h1Element.props.children).toBe('Conditionals in my JSX?');

    var notagElement = elements[3];
    elementChecks(notagElement);
    expect(notagElement.props).toBe(' YASSSSSSS');

    var pElement = elements[4];
    elementChecks(pElement);
    expect(pElement.props.children).toBe('医食同源');
  });
});
