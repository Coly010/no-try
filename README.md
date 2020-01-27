<h1 align="center">🚀 No-Try 🚀</h1>
<p align="center">Clean up your code base by removing those ugly try-catch-finally blocks!</p>

---

<p align="center">
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/badge/npm-no--try-brightgreen.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/npm/v/no-try.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/npm/dt/no-try.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/travis/coly010/notry.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/npm/l/no-try.svg" /></a>
</p>

## 😍 About

Working in a code base where you can expect methods to `throw` can lead to situations where your logic is wrapped in `try-catch` blocks. It also leads to other code design problems. 🤢

`no-try` tackles this by removing the `try-catch` to an external method, whilst allowing the flexibility of handling the error thrown appropriately and getting access to the return value of the method that will throw. 🤘🤘

`no-try` now supports both Object Destructuring, as well as Array Destructuring, allowing for more flexible naming of your variables.

## 🔧 Installation

`npm install --save no-try`

## 🎸 Usage

To get up and running quickly, simply install the package:

`npm install no-try`

Then use it in your code:

Object Destructuring:

JS:

```js
const noTry = require("no-try").noTry;
const noTryAsync = require("no-try").noTryAsync;

// Without a custom error handler
const { result, error } = noTry(() => myThrowableMethod());

// With a custom error handler
const { result, error } = noTry(
  () => myThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Handle methods that return a Promise without a custom error handler
const { result, error } = await noTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const { result, error } = await noTryAsync(
  () => myAsyncThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Use result
if (error) {
  // Show error alert
}

sendMyResultToMethod(result);
```

TS:

```ts
import { noTry, noTryAsync } from "no-try";

// Without a custom error handler
const { result, error } = noTry(() => myThrowableMethod());

// With a custom error handler
const { result, error } = noTry(
  () => myThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Handle methods that return a Promise without a custom error handler
const { result, error } = await noTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const { result, error } = await noTryAsync(
  () => myAsyncThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Use result
if (error) {
  // Show error alert
}

sendMyResultToMethod(result);
```

Array Destructuring (Note: the `/tuple` in the import path is required):

JS:

```js
const noTry = require("no-try/tuple").noTry;
const noTryAsync = require("no-try/tuple").noTryAsync;

// Without a custom error handler
const [result, error] = noTry(() => myThrowableMethod());

// With a custom error handler
const [res, err] = noTry(
  () => myThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Handle methods that return a Promise without a custom error handler
const [item, err2] = await noTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const [res2, err3] = await noTryAsync(
  () => myAsyncThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Use result
if (error || err || err2 || err3) {
  // Show error alert
}

sendMyResultToMethod(result);
```

TS:

```ts
import { noTry, noTryAsync } from "no-try/tuple";

// Without a custom error handler
const [result, error] = noTry(() => myThrowableMethod());

// With a custom error handler
const [res, err] = noTry(
  () => myThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Handle methods that return a Promise without a custom error handler
const [item, err2] = await noTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const [res2, err3] = await noTryAsync(
  () => myAsyncThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Use result
if (error || err || err2 || err3) {
  // Show error alert
}

sendMyResultToMethod(result);
```
