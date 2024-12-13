import React from "react";
import ReactDOM from "react-dom/client"

const titleElement =  <h1>Title : Babel React Element</h1>

const TitleComponent = () => <h1>Title : Babel Component</h1>;

const someVariable = 10000;
// Component Composition
const HeadingComponent = () =>{
    return (
        <div id="container">
            {titleElement}
            {TitleComponent()}
            <TitleComponent/>
            <TitleComponent></TitleComponent>
            <h2>Babel is a JavaScript Compiler(transpiler)</h2>
            <p>It is managed by Parcel package</p>
            {someVariable}
            {console.log(100)}
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

// Note : 
// In JSX, each component must return a single parent element. Multiple elements cannot be returned independently. To resolve this, you can wrap them in a single parent container or use React Fragments.