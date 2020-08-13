Geometry / Transform / Rotate
=============================

Method rotates point around origin point.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.rotate(point, theta[, origin, clockwise]);
```


### Arguments

* `<Point>` `point` - point to rotate
* `<number>` `theta` - rotation angle in radians
* `<Point>` `origin` - rotation origin (def.: (0,0))
* `<boolean>` `clockwise` - rotate clockwise


### Returns

* `<Point>` - rotated point


Examples
--------

```js
// Rotate point by theta angle (in radians) around origin (0,0) clockwise.
const newPoint = MathUtils.geometry.transform.rotate(point, theta);

// Rotate point around custom origin.
const newPoint = MathUtils.geometry.transform.rotate(point, theta, origin);

// Rotate point counter clockwise.
const newPoint = MathUtils.geometry.transform.rotate(point, theta, undefined, false);
```
