Check / Point equal point
=========================

### `pointEqualPoint`

Method checks if two points have the same coordinates.


Usage
-----

```js
const eqaul = MathUtils.check.pointEqualPoint(pointA, pointB);
```


### Arguments

* **`pointA`**: *`Point`* - first point
* **`pointB`**: *`Point`* - second point


### Returns

* *`boolean`* - true if two points have the same coordinates


Examples
--------

```js
// Is a vector:
MathUtils.check.pointEqualPoint({ x: 1, y: 2 }) === true;

// Is not a vector:
MathUtils.check.pointEqualPoint({ x: 1, y: 'nope' }) === false;
MathUtils.check.pointEqualPoint(9) === false;
```
