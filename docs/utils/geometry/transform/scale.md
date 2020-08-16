Geometry / Transform / Scale
============================

### `scale`

Method scales point x and y coordinates.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scale(point, vector[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to scale
* **`vector`**: *`Vector`*  - vector coordinates scale factor
* **`origin`**?: *`Point`* - scale origin (def.: (0,0))


### Returns

* *`Point`* - point with scaled coordinates


Examples
--------

```js
// Multiply point x and y coordinates by 2:
const newPoint = MathUtils.geometry.transform.scale(point, { x: 2, y: 2 });

// Scale coordinates with custom origin:
const newPoint = MathUtils.geometry.transform.scale(
	point, { x: 2, y: 3 }, { x: 1, y: -2 }
);
```
