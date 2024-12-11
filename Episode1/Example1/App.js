const heading = React.createElement(
    "h1",
    {id : "heading", abc : "xyz", className : "headingClass"},
    "Hello Rethik From React"
);
console.log(heading); // heading is a ReactElement which is nothing but a JS object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// render takes the ReactElement(heading object) and converts it into respective html and put it onto DOM
root.render(heading);




