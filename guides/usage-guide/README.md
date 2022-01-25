# ⚒ Usage Guide

Using foo-card is as easy it as it gets. To begin using foo-card.js first create a canvas element in your HTML file.

```html
<!-- Place in body tag -->
<canvas id="foocard"></canvas>
```

{% hint style="info" %}
The `id` attribute of the element should be default `#foocard`, this is what tells foo-card where it's going to be initialized. If there is a need to change the id attribute to a custom one, specify that change when creating a new `FooCard` instance.

In order for FooCard to find the `#foocard` the element must already exist. Either put your `<script>` import at the end of your HTML file, or use some sort of `window.onload` logic.
{% endhint %}

```javascript
const fc = new FooCard({
    container: "#myCustomID" //defaults to `foocard` if not specified
    imageSrc: "../path/to/image",
    fontFamily: "Open Sans", // use custom font-family
    fillStyle: "white", // this is the default text color
    outline: "none",
});
```

### Loading from images

```javascript
const fc = new FooCard({
    imageSrc: "../path/to/image",
    fontFamily: "Open Sans", // use custom font-family
    fillStyle: "white", // this is the default text color
    outline: "none",
});

fc.loadImage().then(() => {
    // ...
})
```

#### Using Data URLs

Foo-card also accepts using Data URLs to load image templates

Simply call the `FooCard` Object using the `loadImage()` method

```javascript
const fc = new FooCard({
    imageSrc: "data:image/png;base64,iVBOR=="
    // ...
});
// ...
```
