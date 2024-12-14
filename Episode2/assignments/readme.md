## Q. What is `npm`?

- `npm` is the world's largest Software Registry.It also allows us to manage libraries, dependencies, and scripts efficiently
- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.
- `npm` alternative is `yarn`

## Q. What is `npx`?

- `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner(execute). It allows developers to execute any Javascript Package available on the npm registry without even installing it(not necessary to install). npx is installed automatically with npm version 5.2.

```sh
npm init - Initializes a new package.json file.
npm init -y (or npm init --yes) - is a quick way to create a default package.json file in your project without having to answer a series of interactive prompts.
npm install or npm i - Installs dependencies listed in package.json.
npm install <package-name> - Installs a specific package locally.
npm install -g <package-name> - Installs a package globally.
npm install -D <package-name> - Installs the package as a devDependency.
npm update - Updates installed packages.
npm uninstall <package-name> - Removes a package.
npm run <script> - Runs a script defined in package.json.
```

## Q. What is the difference between `package.json` and `package-lock.json` files?

| Feature          | package.json                               | package-lock.json                                   |
|------------------|--------------------------------------------|---------------------------------------------------|
| **Purpose**      | Describes the project and lists dependencies | Locks the exact versions of all dependencies      |
| **Flexibility**  | Specifies version ranges (e.g., ^, ~)      | Freezes exact versions for reproducibility         |
| **Dependencies** | Lists only direct dependencies            | Includes direct and all transitive dependencies    |
| **Editable**     | Manually edited by developers             | Automatically generated, not edited manually       |
| **Focus**        | High-level project metadata               | Low-level details for dependency resolution        |

## Q: Why should I not modify `package-lock.json`?

It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit `package-lock.json` to your code repository

You should avoid updating the `package.json` manually since it could break the synchronization between `package.json` and `package-lock. json`.

## Q. What is `node_modules`? Is it a good idea to push that on git?
It contains all the dependencies (and their transitive dependencies) required by the project, as specified in the package.json and package-lock.json files. 
Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages. json

## Q: What is difference between `dependencies vs devDependencies`?

`"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.

## Q: What is a bundler ?

A bundler is a tool that takes multiple source files (such as JavaScript, CSS, or images) and combines them into a single file or a set of optimized files, typically for web applications. This process is called bundling. Bundlers help with managing and organizing code, as well as optimizing it for production.
eg : WebPack, Parcel, Wheat

Features of Bundler :
- Code Bundling: Combines multiple source files (JavaScript, CSS, etc.) into one or more output files to reduce HTTP requests.

- Minification: Reduces the size of the bundled files by removing unnecessary characters (like whitespace and comments) to improve performance.

- Code Splitting: Divides the code into smaller, lazy-loaded chunks to optimize loading time by only loading necessary code.

- Tree Shaking: Removes unused code from the final bundle, reducing its size and improving performance.

- Module Resolution: Resolves and combines dependencies, ensuring that all required modules are included in the bundle.

- Asset Management: Handles non-code assets (like images, fonts, and styles) and integrates them into the bundle.

- Hot Module Replacement (HMR): Allows updating parts of the application in real-time without refreshing the whole page, preserving the state.

## Q: What is `Parcel/Webpack`? Why do we need it?

A: `Parcel` and `webpack` are the bundlers used mostly for `JavaScript` or `Typescript` code that helps you to `minify, clean, and make your code compact` so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

- Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>
  ```

## Q: Why is `.parcel-cache` folder?

A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## Q: What is the `dist` folder?

A: The `/dist` stands for distributable. The /dist folder contains the `minimized version of the source code`. The code present in the /dist folder is actually the code which is used on production web applications.

Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## Q: What is Tree Shaking ?

Tree shaking is a term used in modern JavaScript development to describe the process of removing unused code from a project during the bundling process. This helps reduce the size of the final bundle, improving performance by ensuring that only the necessary parts of the code are included.
How Tree Shaking Works:
1. Static Analysis: Bundlers (like Webpack, Rollup, or Parcel) analyze the code and its dependencies to identify which parts of the code are used and which are not.
2. Elimination: The unused code is removed from the final bundle. For example, if a module exports multiple functions, and only one of them is used, the bundler will eliminate the unused functions from the final output.
3. Minification: After tree shaking, the remaining code is often minified (i.e., made more compact) to further reduce the bundle size.

## Q: What is Hot Module Replacement?

Hot Module Replacement (HMR) is a feature in modern JavaScript bundlers (such as Webpack) that allows you to replace or update modules in a running application without a full page reload. This makes development faster and more efficient because it enables you to see changes immediately while preserving the application state.

How HMR Works:
- Changes in Code: When you modify a module (e.g., a JavaScript file, CSS, etc.), HMR detects the change.
- Update in the Browser: Instead of reloading the entire page, only the updated module is replaced or injected into the running application.
- State Preservation: HMR attempts to keep the application state (such as data or UI state) intact during the update, so you don't lose your progress or need to manually re-enter data.

## Q: List down your favourite 5 features of Parcel and describe any 3 of them in your own words.

### Parcel features:

- Dev Build - parcel provides us develop build
- Local Server - parcel also provides us a local server, which can be used to see live changes in our application.
- HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload

and some of more cool features of Parcel are:

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

## Q: `^-caret` and `~-tilde` in versions ?

Semantic Versioning format : MAJOR.MINOR.PATCH

~version “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

^version “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.

## Q: script types in html 

type="module":
- Specifies that the script is a JavaScript module, which supports imports and exports.
