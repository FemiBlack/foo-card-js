# Usage Guide

Using foo-card is as easy it as it gets. To begin using foo-card.js first create a canvas element in your HTML file.

```html
<canvas id="foocard"></canvas>
```

{% hint style="info" %}
The `id` attribute of the element should be default `#foocard`, this is what tells foo-card where it's going to be initialized. If there is a need to change the id attribute to a custom one, specify that change when creating a new `FooCard` instance
{% endhint %}

```javascript
const fc = new FooCard({
    container: "myCustomID" //defaults to `foocard` if not specified
    imageSrc: "../path/to/image",
    fontFamily: "Open Sans", // use custom font-family
    fillStyle: "white", // this is the default text color
    outline: "none",
});
```

```javascript
const fc = new FooCard({
    imageSrc: "../path/to/image",
    fontFamily: "Open Sans", // use custom font-family
    fillStyle: "white", // this is the default text color
    outline: "none",
});
```

#### Using Data URLs

Foo-card also accepts using Data URLs to load image templates

Simply call the `FooCard` Object using the `loadDataURL()` method

```javascript
const fc = new FooCard({
    imageSrc: "data:uri......."
    // ...
});
fc.loadDataURL().then(() => {
    // ...
})
```

```javascript
const fc = new FooCard({
    imageSrc: "card-template.jpg",
    fontFamily: "Open Sans",
    fillStyle: "white",
    outline: "none",
});
fc.loadImage().then(() => {
    fc.insertText("top", "John Doe", 100, 110);
    fc.insertText("middle", "Point Guard", 570, 120);
    fc.insertText("bottom", "RV-001", 620, 370);
});
```
