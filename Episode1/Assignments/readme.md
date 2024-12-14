## Q.. normal vs async vs defer : 
    1.https://www.google.com/url?sa=i&url=https%3A%2F%2Fjeetsdev.hashnode.dev%2Fasync-vs-defer-understand-javascript-execution&psig=AOvVaw2RYmeHuu3u0DQCmsYKvqzM&ust=1734066575434000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiO9cO7oYoDFQAAAAAdAAAAABAE
    2. async and defer are boolean attribute
    3. In async : Unordered (depends on which script downloads first) ,but in defer : executes in the order scripts appear in the HTML.

## Q: What is `Emmet`?

`Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.
    
## Q: What is `CDN`? Why do we use it?

A Content Delivery Network (CDN) is a system of geographically distributed servers that cache and deliver web content (like images, videos, and scripts) to users from the nearest server, ensuring faster load times, reduced latency, improved reliability, and enhanced security.

## Q: What is `crossorigin in script tag`?
1. The crossorigin attribute in a <script> tag specifies how a web browser should handle Cross-Origin Resource Sharing (CORS) when fetching the script file. It is used when the script is loaded from a different origin (domain, protocol, or port) than the webpage.
2. CORS : 
Cross-Origin Resource Sharing (CORS) is a security feature enforced by web browsers that allows or restricts resources (e.g., data, images, scripts) on a web page to be requested from a domain different from the domain serving the web page.

```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
React :
    Purpose: React is the core library that provides the foundation for building user interfaces in a declarative way using components.
    Function: It handles the logic for building components, managing state, and rendering UI based on the component's state and props.

ReactDOM :
    Purpose: Focuses on rendering React components to the browser’s DOM and managing interactions between React components and the DOM.
    Function : ReactDOM.render(): This method is used to render React components into the DOM. It takes a React component and a DOM container (e.g., `<div id="root"></div>`) and renders the component inside it.

## Q: Difference between a `Library and Framework`?

1. A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

2. Think of a framework as a ready-made structure for your project. It gives you the basic design(architecture) and rules to follow, and you fill in the details.
A library is like a toolbox. It’s a collection of useful pre-made code you can use in your project.

3. In a framework, the framework calls the developer's code. This is known as Inversion of control(IOC).
In a library, the developer calls the library's code.

Note : React is a library because it provides reusable code for UI components, and you have the flexibility to use it however you want within your project. But Angular is a framework.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?

`Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.
