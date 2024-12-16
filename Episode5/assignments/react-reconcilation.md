# React Reconcilation :

# React Reconcilation :

Reconciliation in React refers to the process of updating the DOM efficiently when the state or props of components change. React uses a virtual DOM and compares the differences between the previous and current versions of the virtual DOM to minimize changes to the actual DOM.

### **Key Concepts**

1. **Tree Diffing**:
    - Comparing the virtual DOM trees is computationally expensive (O(n³)), but React uses heuristics to reduce this to O(n).
    - Comparing Virtual DOM is faster because It is similar to JS objects.
    - Assumptions:
        - Two elements of different types will produce different trees.
        - Developers can provide stable keys to differentiate children.

---

### **Different Cases :**

1. Node types : 
    - **Different Node Types**:
        
        When node types differ, React treats them as entirely separate and replaces the old node.
        
        Example:
        
        ```jsx
        renderA: <div />
        renderB: <span />
        Result: Replace <div /> with <span />
        
        ```
        
    - **Same Node Type**:
        
        If two nodes have the same type, React updates their attributes and recursively processes their children.
        
        Example:
        
        ```jsx
        renderA: <div style={{ color: 'red' }} />
        renderB: <div style={{ fontWeight: 'bold' }} />
        Result: Remove `color`, add `fontWeight`
        
        ```
        
2. **Keys for List Differentiation**:
    
    Keys allow React to match child elements across renders, improving efficiency.
    
    Example:
    
    ```jsx
    <ul>
      <li key="1">Apple</li>
      <li key="2">Banana</li>
    </ul>
    
    ```
    
    Changing the order or inserting a new key ensures React reuses existing elements rather than recreating them.
    

---

### **Special Cases**

1. **List Handling**:
    
    React compares children in lists by position unless keys are provided. Without keys, reordering can lead to inefficiencies and loss of state.
    
    Example (without keys):
    
    ```jsx
    renderA: <li>Duke</li> <li>Villanova</li>
    renderB: <li>Connecticut</li> <li>Duke</li> <li>Villanova</li>
    Result: React rematches all items.
    
    ```
    
2. **Component Types**:
    
    Components of different types (e.g., `<Header>` vs. `<Footer>`) result in complete tree replacement. Using similar types (e.g., `<Header>` with different props) optimizes reconciliation.
    
3. **Unstable Keys**:
    
    Avoid using dynamic values like `Math.random()` as keys, which cause unnecessary re-creation of elements and degrade performance.
    

---

# Virtual DOM :

1. The **Virtual DOM (VDOM)** is a lightweight, in-memory representation of the **real DOM** (Document Object Model).
2.  It is essentially a JavaScript object that mimics the structure of the actual DOM but doesn’t render anything directly to the screen.
3. React maintains a **Virtual DOM** at all times during the lifecycle of a React application.
4. a. Real DOM is a tree-like structure where each HTML element is represented as a node, and the structure reflects the parent-child relationships between elements.
    
    b. The VDOM is created as a tree-like structure, where each node is a plain JavaScript object representing a DOM element. This object contains properties such as:
    
    - `type` (the type of HTML element, e.g., `div`, `span`)
    - `props` (attributes like `id`, `class`, `onClick`, etc.)
    - `children` (nested virtual DOM nodes or text content
5. Example :
    
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Example Page</title>
      </head>
      <body>
        <div id="container">
          <h1 class="title">Hello, World!</h1>
          <p>This is a simple paragraph.</p>
        </div>
      </body>
    </html>
    ```
    
    ```html
    document
    └── html
        ├── head
        │   └── title
        │       └── "Example Page"
        └── body
            └── div (id="container")
                ├── h1 (class="title")
                │   └── "Hello, World!"
                └── p
                    └── "This is a simple paragraph."
    ```
    
    ```jsx
    const virtualDOM = {
      type: "html",
      props: {},
      children: [
        {
          type: "head",
          props: {},
          children: [
            {
              type: "title",
              props: {},
              children: ["Example Page"]
            }
          ]
        },
        {
          type: "body",
          props: {},
          children: [
            {
              type: "div",
              props: { id: "container" },
              children: [
                {
                  type: "h1",
                  props: { className: "title" },
                  children: ["Hello, World!"]
                },
                {
                  type: "p",
                  props: {},
                  children: ["This is a simple paragraph."]
                }
              ]
            }
          ]
        }
      ]
    };
    
    ```
    

---

### The Flow of Updates When State Changes

1. **State Changes:**
    - When you call `setState` in React or update a state variable in a functional component using `useState`, it triggers a re-render of the component.
2. **Reconciliation Process:**
    - React recalculates the Virtual DOM for the updated component. This is called the **new Virtual DOM**.
    - React compares the new Virtual DOM with the previous Virtual DOM (using a diffing algorithm).
3. **Diffing Algorithm:**
    - React determines the differences (diffs) between the old and new Virtual DOMs.
    - Changes are identified at the node and subtree levels.
4. **Updates in Real DOM:**
    - Based on the diffs, React creates a **patch** that describes the minimal set of changes needed to update the real DOM.
    - These updates are batched and applied efficiently to the real DOM.
5. **Re-rendering:**
    - Only the parts of the real DOM that are affected by the changes are updated. This ensures better performance compared to directly updating the real DOM on every state change.