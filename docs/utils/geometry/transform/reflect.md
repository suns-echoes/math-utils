Geometry / Transform / Reflect
==============================

### `reflect`

Method reflects point over origin point.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.reflect(point[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to reflect
* **`origin`**: *`Point`* - reflection origin


### Returns

* *`Point`* - reflected point


Examples
--------

```js
// Reflect point over default origin (0,0).
const newPoint = MathUtils.geometry.transform.reflect(point);

// Reflect point over origin point (1,3).
const newPoint = MathUtils.geometry.transform.reflect(point, { x: 1, y: 3 });
```
