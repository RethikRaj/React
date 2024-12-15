## Q: What is `props in React`? Ways to.

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
- React component functions accept a single argument, a props object.
- Props are read-only and cannot be modified.

#### Example
#### Example
```sh
function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greet name="Rethik" />);
```


## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
- `<React.Fragment></React.Fragment> and <></>` are both ways to return multiple elements from a React component without adding extra nodes to the DOM. 
```sh
// Using React.Fragment
return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Description</p>
  </React.Fragment>
);

// Using shorthand <> </> 
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);

// html => No wrapper elements like div or span generated.
<h1>Title</h1>
<p>Description</p>

```

## Q: Why do we need `keys` in React?

A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.

- With keys: React can match each element in the list with its corresponding virtual DOM representation and make minimal updates.
- Without keys: React re-renders all elements in the list, even if only one has changed.
- Keys must be unique among siblings but do not have to be globally unique

## Q: Can we use `index as keys` in React?

React cannot properly track state when the list changes order, added or removed elements.
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)


## Q: What is `Reconciliation` in React?

- Reconciliation in React is the process of comparing the new virtual DOM with the previous version(old virtual DOM) to determine the minimal set of changes needed to update the real DOM efficiently. It helps React optimize performance by reducing unnecessary re-renders and DOM manipulations.

1. Virtual DOM: A lightweight copy of the real DOM that React uses to perform operations more efficiently.
2. Diffing Algorithm: React's algorithm that compares the new virtual DOM with the old one and calculates the minimal set of changes needed. It is optimized for performance and minimizes the number of DOM updates.
3. Keys in Lists: When rendering lists, React uses keys to identify which items have changed, been added, or removed, ensuring that the correct elements are updated without re-rendering everything.

## Q: What is `React Fiber` ?

React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

## Q: Real DOM vs Virtual DOM ?

| Feature               | Real DOM                          | Virtual DOM                      |
|-----------------------|-----------------------------------|----------------------------------|
| **Definition**         | Actual representation of the webpage (HTML tree) | Lightweight in-memory copy of the Real DOM |
| **Updates**            | Direct updates to the Real DOM, which can be slow | Updates the Virtual DOM first, then the Real DOM |
| **Performance**        | Can be slow due to re-rendering the entire DOM | Faster due to selective updates to the Real DOM |
| **Re-rendering**       | Full re-rendering of the entire UI | Only changes the part of the UI that needs updating |
| **Rendering Process**  | Entire DOM is recalculated and re-rendered | Uses reconciliation (diffing) to find minimal changes |


## Q: What is `Config Driven UI`?

A config-driven UI refers to a user interface (UI) that is dynamically generated or controlled based on configuration files or data structures. Instead of hardcoding UI components and their behavior, you use configurations—typically in the form of JSON, YAML, or similar formats—to define the structure, layout, data bindings, and functionality of the interface.

- Decouples UI logic from code. Developers, designers, or product teams can modify the UI by updating configuration files instead of requiring code changes.
- The UI adapts based on the configuration, making it easy to modify without touching the core application code.





