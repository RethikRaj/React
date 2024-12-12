/*
    <div id="root">
        <div id="parent">
            <div id="child1">
                <h1 id="heading1">Hello from child1</h1>
                <h2>I am h2 in child1 </h2>
            </div>
            <div id="child2">
                <h1 id="heading2">Hello from child2</h1>
                <h2>I am h2 in child2 </h2>
            </div>
        </div>
    </div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1",{id:"heading1"},"Hello from child1"),
                React.createElement("h2",{},"I am h1 in child1")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{id:"heading1"},"Hello from child2"),
                React.createElement("h2",{},"I am h2 from child2")
            ]
        )

    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);