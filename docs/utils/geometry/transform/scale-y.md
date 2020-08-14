Geometry / Transform / ScaleY
=============================

### `scale-y`

Method scales point y coordinate.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scaleY(point, y[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to scale
* **`y`**: *`number`* - y coordinate scale factor
* **`origin`**?: *`Point`* - scale origin (def.: (0,0))


### Returns

* *`Point`* - point with scaled coordinate


Examples
--------

```js
// Multiply point y coordinate by 2.
const newPoint = MathUtils.geometry.transform.scaleY(point, 2);

// Scale coordinate from origin
const newPoint = MathUtils.geometry.transform.scaleY(point, 2, { x: 1, y: -2 });
```
