# Usage Guide

Using foo-card is as easy it as it gets

{% code title="sample.js" %}
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
{% endcode %}

{% hint style="info" %}
**Good to know:** your product docs aren't just a reference of all your features! use them to encourage folks to perform certain actions and discover the value in your product.
{% endhint %}
