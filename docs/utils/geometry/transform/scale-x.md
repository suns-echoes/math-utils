Geometry / Transform / ScaleX
=============================

### `scale-x`

Method scales point x coordinate.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scaleX(point, x[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to scale
* **`x`**: *`number`* - x coordinate scale factor
* **`origin`**?: *`Point`* - scale origin (def.: (0,0))


### Returns

* *`Point`* - point with scaled coordinate


Examples
--------

```js
// Multiply point x coordinate by 2.
const newPoint = MathUtils.geometry.transform.scaleX(point, 2);

// Scale coordinate from origin
const newPoint = MathUtils.geometry.transform.scaleX(point, 2, { x: 1, y: -2 });
```
