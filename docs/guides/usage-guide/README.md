# ⚒ Usage Guide

### Instantiating FooCard

To begin every new FooCard project or instance, the basic requirements needed to initialize FooCard are specified below.

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

To begin using foo-card, it is required that you first load your image asynchronously, then begin further customizations after the Promise has been resolved

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

Foo-card also accepts using Data URLs to load image templates. Simply call the `FooCard` Object using the `loadImage()` method

```javascript
const fc = new FooCard({
    imageSrc: "data:image/png;base64,iVBOR=="
    // ...
});
// ...
```
