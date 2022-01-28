---
description: Importing FooCard into a Javascript File
---

# ✅ Importing FooCard

Using foo-card is as easy it as it gets. To begin using foo-card.js first create a canvas element in your HTML file.

```html
<!-- Place in body tag -->
<canvas id="foocard"></canvas>
```

{% hint style="info" %}
The `id` attribute of the element should be default `#foocard`, this is what tells foo-card where it's going to be initialized. If there is a need to change the id attribute to a custom one, specify that change when creating a new `FooCard` instance.
{% endhint %}

### JavaScript

Without going too much into detail, historically, there have been plenty of ways to import libraries in JavaScript. Fortunately, not too long ago a standard was introduced that was implemented in browsers as well. This standard is called [ECMAScript modules](https://nodejs.org/api/esm.html), also commonly referred to as [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). This has caused JavaScript modules to become a defacto standard, which is why I recommend to use this approach.

Before JavaScript modules there were quite a few other standards. The only other module standard that FooCard now supports is the [CommonJS format](https://en.wikipedia.org/wiki/CommonJS) which is what node is using too (note that [node also has support for JavaScript modules](https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663) now).

We also provide a standalone file that you can simply include in your browser. See the corresponding section for this:&#x20;

```javascript
// If you are using JavaScript/ECMAScript modules:
import FooCard from "foo-card";

// If you are using CommonJS modules:
const { FooCard } = require("foo-card");

const fc= new FooCard({});
fc.loadImage().then(() => {});
```

{% hint style="warning" %}
In order for FooCard to find the `#foocard` the element must already exist. Either put your `<script>` import at the end of your HTML file, or use some sort of `window.onload` logic.
{% endhint %}
