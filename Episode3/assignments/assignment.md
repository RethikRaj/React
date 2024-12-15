## Q: What is `JSX`(JavaScriptXML)?
It allows developers to write HTML-like code directly within JavaScript.
Features : 
- HTML-Like syntax (Note that JSX is not HTML in JavaScript)
- JSX lets you embed JavaScript expressions within curly braces {}.These are executed when they are encoutered.
- JSX is not valid JavaScript. It needs to be transpiled (e.g., by Babel) into React.createElement calls before it can be interpreted by the browser.
- In JSX, you can have multiple elements, but they must be wrapped in a single parent element or a React.Fragment
- JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

Flow of JSX : 
- JSX Transpilation:
    JSX → React.createElement calls.
- React Element Creation:
    A lightweight virtual DOM object is created.
- Virtual DOM Updates:
    React compares the old and new virtual DOM using reconciliation.
- Real DOM Updates:
    Only the necessary changes are applied to the real DOM.


## Q: What is Transpilation ?
- Transpilation is the process of converting source code written in `one programming language or syntax` into an equivalent code in `another language or syntax`.
- Example : Transpilers convert the modern JavaScript,TypeScript, JSX into plain JavaScript.

## Q:What is Babel ?
- Babel is a JavaScript compiler and transpiler which converts modern JavaScript code into plain/old JavaScript.
- Babel converts JSX into React.createElement .

## Q:What is Components ?
A component in React is a reusable block of code that defines how a part of the user interface (UI) should look and behave. It can accept inputs (called props) and manage its own data (called state)

Types of Components : 
- Functional Components  : A simple JavaScript function that returns JSX or ReactElement
- Class based Components : A component written as a JavaScript class with a render method.

Component Composition : Nesting of components within each other is called component composition

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

# React Component Syntax

## Syntax Comparison

| Syntax                   | When to Use                              | Key Feature                                                                                 |
|--------------------------|------------------------------------------|--------------------------------------------------------------------------------------------|
| `{TitleComponent()}`      | Direct execution (not common).           | Calls the function directly, bypassing React's lifecycle and abstraction.                  |
| `{<TitleComponent />}`    | Standard for most cases.                 | Lets React handle lifecycle, props, and rendering automatically.                           |
| `{<TitleComponent></TitleComponent>}` | When passing children.               | Allows you to include child elements or content between the opening and closing tags.      |





