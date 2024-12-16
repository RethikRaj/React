# React Hooks :

1. **React Hooks is nothing but a JS utility function provided by React .** 
2. **React Hooks** are special functions introduced in React 16.8 that allow developers to use **state** and **lifecycle features** inside **functional components**
3. Rules : 
    1.  ✅ Call them at the top level in the body of a [function component](https://react.dev/learn/your-first-component).
    2. 🔴 Do not call Hooks inside conditions or loops.
    3. 🔴 Do not call Hooks after a conditional `return` statement.
    4. 🔴 Do not call Hooks in event handlers.
    5. 🔴 Do not call Hooks in class components.
    6. 🔴 Do not call Hooks inside functions passed to `useMemo`, `useReducer`, or `useEffect`

## Common React Hooks :

### useState :

1. `useState` is a React Hook that lets you add a [state variable](https://react.dev/learn/state-a-components-memory) to your component.
2. `const [state, setState] = useState(initialState)`
3. Parameters of `useState` :
    1. **Initial State**
        - The only parameter to `useState` is the **initial state value** for the state variable.
        - This can be any data type: **number**, **string**, **array**, **object**, or even a **function**.
        - **Function (lazy initialization)**:
            1. When initializing state requires computation, pass a function to useState. React will call it once during the initial render.
            2. Its return value becomes the initial state.
            3. The function is **not called again(in any subsequent renders)** because `useState` does not reinitialize the state. The state retains its current value.
            
            ### Example:
            
            ### Without Lazy Initialization:
            
            ```jsx
            function ExpensiveComponent() {
                const initialValue = expensiveComputation(); // Always runs on every render
                const [state, setState] = useState(initialValue);
            
                return <div>{state}</div>;
            }
            ```
            
            In this case, `expensiveComputation` runs **every time the component renders**, even though it's only needed during the initial render.
            
            ### With Lazy Initialization:
            
            ```jsx
            function ExpensiveComponent() {
                const [state, setState] = useState(() => expensiveComputation()); // Function runs only once
            
                return <div>{state}</div>;
            }
            
            function expensiveComputation() {
                console.log('Running expensive computation...');
                return 42; // Example result
            }
            ```
            
            **Behavior**:
            
            - The `expensiveComputation` function is executed **once**, during the initial render.
            - Its return value (`42`) is used as the initial state.
            - On subsequent re-renders, the `state` variable is preserved, and `expensiveComputation` is not called again.