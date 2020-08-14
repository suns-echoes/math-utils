Geometry / Transform / Scale (by vector)
========================================

### `vscale`

Method scales point x and y coordinates by vector.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.vscale(point, vector[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to scale
* **`vector`**: *`Vector`* - vector coordinates scale factor
* **`origin`**?: *`Point`* - scale origin (def.: (0,0))


### Returns

* *`Point`* - point with scaled coordinates


Examples
--------

```js
// Multiply point x and y coordinates by vector.
const newPoint = MathUtils.geometry.transform.vscale(point, { x: 1.3, y: 6 });

// Scale coordinates from origin
const newPoint = MathUtils.geometry.transform.vscale(point, { x: 1.3, y: 6 }, { x: 1, y: -2 });
```
