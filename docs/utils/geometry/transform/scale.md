Geometry / Transform / Scale
============================

### `scale`

Method scales point x and y coordinates.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scale(point, x[, y, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to scale
* **`x`**: *`number`* - x coordinate scale factor
* **`y`**?: *`number`* - y coordinate scale factor (def.: equal to "x")
* **`origin`**?: *`Point`* - scale origin (def.: (0,0))


### Returns

* *`Point`* - point with scaled coordinates


Examples
--------

```js
// Multiply point x and y coordinates by 2.
const newPoint = MathUtils.geometry.transform.scale(point, 2);
const newPoint = MathUtils.geometry.transform.scale(point, 2, 2);

// Scale coordinates from origin
const newPoint = MathUtils.geometry.transform.scale(point, 2, 3, { x: 1, y: -2 });
```
