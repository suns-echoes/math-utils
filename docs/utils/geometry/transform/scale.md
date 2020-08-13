Geometry / Transform / Scale
============================

Method scales point x and y coordinates.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scale(point, x[, y, origin]);
```


### Arguments

* `<Point>` `point` - point to scale
* `<number>` `x` - x coordinate scale factor
* `<number>` `y` - optional, y coordinate scale factor (def.: equal to "x")
* `<Point>` `origin` - optional, scale origin (def.: (0,0))


### Returns

* `<Point>` - point with scaled coordinates


Examples
--------

```js
// Multiply point x and y coordinates by 2.
MathUtils.geometry.transform.scale(point, 2);
MathUtils.geometry.transform.scale(point, 2, 2);

// Scale coordinates from origin
MathUtils.geometry.transform.scale(point, 2, 3, { x: 1, y: -2 });
```
