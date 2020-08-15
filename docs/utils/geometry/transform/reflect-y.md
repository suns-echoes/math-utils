Geometry / Transform / Reflect y coordinate
===========================================

### `reflectY`

Method reflects point y coordinate over origin point.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.reflectY(point[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point to reflect
* **`origin`**: *`Point`* - reflection origin


### Returns

* *`Point`* - reflected point


Examples
--------

```js
// Reflect point x coordinate over default origin (0,0).
const newPoint = MathUtils.geometry.transform.reflectY(point);

// Reflect point x coordinate over origin point (1,3).
const newPoint = MathUtils.geometry.transform.reflectY(point, { x: 1, y: 3 });
```
