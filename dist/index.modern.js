import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

var styles = {"test":"_3ybTi"};

var styles$1 = {"abc":"_1vkag"};

var ButtonComponent = function ButtonComponent(_ref) {
  var text = _ref.text,
      className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: className ? className : "mt-2 py-3 " + styles$1.abc,
    onClick: onClick
  }, text ? text : 'Click Here');
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var MyButtonComponent = function MyButtonComponent(_ref2) {
  var text = _ref2.text,
      className = _ref2.className,
      onClick = _ref2.onClick;
  return /*#__PURE__*/React.createElement(ButtonComponent, {
    text: text,
    className: className ? className : null,
    onClick: onClick ? onClick : null
  });
};

export { ExampleComponent, MyButtonComponent };
//# sourceMappingURL=index.modern.js.map
