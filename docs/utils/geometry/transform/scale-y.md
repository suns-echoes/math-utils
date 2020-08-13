Geometry / Transform / ScaleY
=============================

Method scales point y coordinate.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scaleY(point, y[, origin]);
```


### Arguments

* `<Point>` `point` - point to scale
* `<number>` `y` - y coordinate scale factor
* `<Point>` `origin` - optional, scale origin (def.: (0,0))


### Returns

* `<Point>` - point with scaled coordinate


Examples
--------

```js
// Multiply point y coordinate by 2.
MathUtils.geometry.transform.scaleY(point, 2);

// Scale coordinate from origin
MathUtils.geometry.transform.scaleY(point, 2, { x: 1, y: -2 });
```
