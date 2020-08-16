Trigonometry / Angle between 3 points
=====================================

### `angleBetweenTreePoints`

Method calculates angle between 3 points.


Usage
-----

```js
const angle = MathUtils.trigonometry.angleBetweenTreePoints(centerPoint, pointA, pointB);
```


### Arguments

* **`centerPoint`**: *`Point`* - center point where angle will be calculated
* **`pointA`**: *`Point`* - first arm point
* **`pointB`**: *`Point`* - second arm point


### Returns

* *`number`* - angle in radians


Examples
--------

```js
// Fix number precision error:
const angle = MathUtils.trigonometry.angleBetweenTreePoints(
	{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }
);
```
