Geometry / Transform / ScaleX
=============================

Method scales point x coordinate.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scaleX(point, x[, origin]);
```


### Arguments

* `<Point>` `point` - point to scale
* `<number>` `x` - x coordinate scale factor
* `<Point>` `origin` - optional, scale origin (def.: (0,0))


### Returns

* `<Point>` - point with scaled coordinate


Examples
--------

```js
// Multiply point x coordinate by 2.
MathUtils.geometry.transform.scaleX(point, 2);

// Scale coordinate from origin
MathUtils.geometry.transform.scaleX(point, 2, { x: 1, y: -2 });
```
