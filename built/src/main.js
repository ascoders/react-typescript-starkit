"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
class Main extends React.Component {
    render() {
        return (React.createElement("div", null, "123"));
    }
}
ReactDOM.render(React.createElement(Main), document.getElementById('react-dom'));
//# sourceMappingURL=main.js.map