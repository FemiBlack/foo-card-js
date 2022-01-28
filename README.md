# FooCard
[![NPM version](https://badge.fury.io/js/foo-card.svg)](http://badge.fury.io/js/fabric)
[![Downloads per month](https://img.shields.io/npm/dm/foo-card.svg)](https://www.npmjs.org/package/foo-card)

Welcome to **FooCard**. FooCard is a Javascript library used to create unique and digitally signed identity cards or any custom user generated images.

<a href="https://femi-black.gitbook.io/foocard-docs/" target="_blank"><img src="https://github.com/FemiBlack/foo-card-js/raw/main/images/foo.png" style="width:300px;box-shadow:rgba(0,0,0,0.3) 0 0 5px"></a>

## Quick Setup
First install FooCard from npm
```bash
npm install foo-card
```
or `yarn add foo-card` if you use prefer

### HTML
First add a canvas element with an id of `#foocard` to your html page.

```html
<canvas id="foocard"></canvas>
```
> If you need to change the canvas id, you can specify that when initializing the FooCard instance. More info can be found in the [docs](https://femi-black.gitbook.io/foocard-docs/)

### Javascript
Then import FooCard as a javascript module.
```javascript
import { FooCard } from "foo-card"

const fc = new FooCard({})
fc.loadImage().then(() => {
    // ...
})
```

To see more information and configuration options on FooCard, the documentation is available here:

[FooCard Docs](https://femi-black.gitbook.io/foocard-docs/)

### Examples | Showcase
Here are some examples where we see some use-cases of FooCard
<img src="https://github.com/FemiBlack/foo-card-js/raw/main/images/foo-sample-1.png" style="width:300px;box-shadow:rgba(0,0,0,0.3) 0 0 5px" alt="foosample 1">
<img src="https://github.com/FemiBlack/foo-card-js/raw/main/images/foo-sample-2.png" style="width:300px;box-shadow:rgba(0,0,0,0.3) 0 0 5px" alt="foosample 2">

## For Development Purposes
First, install all packages `npm install` and then run the the build command to compile the Typescript code:

```bash
npm run build
```
