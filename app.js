// let headding = document.createElement("h1");

// headding.innerHTML = "Hello World from JS";

// let root = document.getElementById("root")
// root.appendChild(headding)

const headiing = [React.createElement("h1", { id: "headding" }, "Hello World from React!"), React.createElement("h2", { id: "headding" }, "Hello World from React!")];
console.log(headiing);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(headiing)