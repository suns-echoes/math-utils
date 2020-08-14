Geometry / Transform / Reflect over line
========================================

### `reflectOverLine`

Method reflects point over line plotted by two points.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.reflectOverLine(point, linePointA, linePointB);
```


### Arguments

* **`point`**: *`Point`* - point to reflect
* **`linePointA`**: *`Point`* - first point on line
* **`linePointB`**: *`Point`* - second point on line


### Returns

* *`Point`* - reflected point


Examples
--------

```js
// Reflect point over line plotted by (1,3) and (2,-2) points.
const newPoint = MathUtils.geometry.transform.reflectOverLine(
	point,
	{ x: 1, y: 3 },
	{ x: 2, y: -2 }
);
```
