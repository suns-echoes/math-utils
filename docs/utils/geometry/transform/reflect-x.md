Geometry / Transform / Reflect x coordinate
===========================================

### `reflectX`

Method reflects point x coordinate over origin point.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.reflectX(point[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to reflect
* **`origin`**: *`Point`* - reflection origin


### Returns

* *`Point`* - reflected point


Examples
--------

```js
// Reflect point x coordinate over default origin (0,0):
const newPoint = MathUtils.geometry.transform.reflectX(point);

// Reflect point x coordinate over origin point (1,3):
const newPoint = MathUtils.geometry.transform.reflectX(point, { x: 1, y: 3 });
```
