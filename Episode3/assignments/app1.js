// - Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

//   - Create the `same element using JSX`
//   - Create a `functional component of the same with JSX`

const nestedHeaderReactElement = React.createElement("div",{id : "title"},[
    React.createElement("h1",{},"This is h1"),
    React.createElement("h2",{},"This is h2"),
    React.createElement("h3",{},"This is h3")
]);

const nestedHeaderUsingJSX = (
    <div id="title">
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
    </div>
)

const NestedHeaderUsingComponent = () => {
    return (
        <div id="title">
            <h1>This is h1</h1>
            <h2>This is h2</h2>
            <h3>This is h3</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedHeaderReactElement);
// root.render(nestedHeaderUsingJSX);
root.render(<NestedHeaderUsingComponent/>);


