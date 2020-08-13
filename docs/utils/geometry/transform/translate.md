Geometry / Transform / Translate
================================

Method translate point coordinates.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.translate(point[, x, y]);
```


### Arguments

* `<Point>` `point` - point to translate
* `<number>` `x` - optional, x axis translation (def.: 0)
* `<number>` `y` - optional, y axis translation (def.: 0)


### Returns

* `<Point>` - translated point


Examples
--------

```js
// Multiply point x by 2 and y by 3.
MathUtils.geometry.transform.translate(point, 2, 3);

// Multiply point x by 2.
MathUtils.geometry.transform.translate(point, 2);

// Multiply point y by 3.
MathUtils.geometry.transform.translate(point, undefined, 2);
```
