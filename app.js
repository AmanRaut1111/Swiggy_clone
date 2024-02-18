

import React from "react";
import ReactDOM from "react-dom/client"

const heading = [React.createElement("h1", { id: "headding" }, "Hello World from React..🚀"), React.createElement("h2", { id: "headding" }, "Hello World from React!")];
console.log(heading);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)