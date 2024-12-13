import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{id:"heading"},"Created Using React.createElement");
console.log(heading);

const jsxHeading = <h1 id="heading" className="head">Created Using JSX </h1>;
console.log(jsxHeading);

const jsxMultiLine = (
    <h2>
        "This is a Multiline JSX"
    </h2>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);


