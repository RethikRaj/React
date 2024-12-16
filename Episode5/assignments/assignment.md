## Q: Named Export and Default Export ?

## 1. Named Exports
Named exports allow you to export multiple variables, functions, or classes from a module. You can import them by `their name` in another module.
#### Example:

**Exporting:**

```js
// module.js
export const a = 10;
export const b = 20;

export function sum(x, y) {
  return x + y;
}
```
**Importing:** 

```js
// importing (app.js)
// app.js
import { a, b, sum } from './module.js'; // Curly braces is syntax.

console.log(a);    // 10
console.log(sum(2, 3));  // 5
```


## 2. Default Export
A default export allows you to export a single value, function, or class as the default from a module. You can import it with any name in another module.

**Exporting:**
```js
// module.js
const myObject = { name: 'John', age: 30 };

export default myObject;
```

**Importing:**
```js

// app.js
import myData from './module.js';

console.log(myData.name);  // John

```

Key Differences:
- Named Export: You can export multiple values and import them with the same name.
- Default Export: You can export only one value, but it can be imported with any name.

Both can be combined in the same file:
```js
// module.js
export const a = 10;
export default function greet() {
  console.log('Hello!');
}

Importing both:

// app.js
import greet, { a } from './module.js';

console.log(a);   // 10
greet();          // Hello!

```

