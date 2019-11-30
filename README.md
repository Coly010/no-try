<h1 style="text-align: center">🚀 No-Try 🚀</h1>
<p style="text-align: center">Clean up your code base by removing those ugly try-catch-finally blocks!</p>

## 😍 About

Working in a code base where you can expect methods to `throw` can lead to situations where your logic is wrapped in `try-catch` blocks. It also leads to other code design problems. 🤢

`no-try` tackles this by removing the `try-catch` to an external method, whilst allowing the flexibility of handling the error thrown appropriately and getting access to the return value of the method that will throw. 🤘🤘

## 🔧 Installation

`npm install --save no-try`

## 🎸 Usage

To get up and running quickly, simply install the package:

`npm install no-try`

Then use it in your code:

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
const { result, error } = noTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const { result, error } = noTryAsync(
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
const { result, error } = noTryAsync(() => myAsyncThrowableMethod());

// Handle methods that return a Promise with a custom error handler
const { result, error } = noTryAsync(
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
