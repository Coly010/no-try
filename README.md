<h1 align="center">🚀 No-Try 🚀</h1>
<p align="center">Clean up your code base by removing those ugly try-catch-finally blocks!</p>

---

<p align="center">
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/badge/npm-no--try-brightgreen.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/npm/v/no-try.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/npm/dt/no-try.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/travis/coly010/no-try.svg" /></a>
  <a href="https://www.npmjs.com/package/no-try"><img src="https://img.shields.io/npm/l/no-try.svg" /></a>
</p>

## 😍 About

Working in a code base where you can expect methods to `throw` can lead to situations where your logic is wrapped in `try-catch` blocks. It also leads to other code design problems. 🤢

`no-try` tackles this by removing the `try-catch` to an external method, whilst allowing the flexibility of handling the error thrown appropriately and getting access to the return value of the method that will throw. 🤘🤘

## 🔧 Installation

`npm install --save no-try`

## 🎸 Usage

First we need to set up our import

#### JavaScript (all)

```js
const useTry = require("no-try").useTry;
const useTryAsync = require("no-try").useTryAsync;
```

#### TypeScript or ES6+

```ts
import { useTry, useTryAsync } from "no-try";
```

#### Now let's use it

```js
// Without a custom error handler
const [error, result] = useTry(() => myThrowableMethod());

// With a custom error handler
const [err, res] = useTry(
  () => myThrowableMethod(),
  error => {
    console.log(error);
  }
);

// Handle methods that return a Promise without a custom error handler
const [err2, res2] = await useTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const [err3, res3] = await useTryAsync(
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
