Geometry / Transform / Scale
============================

Method scales point x and y coordinates.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.scale(point, x);

const newPoint = MathUtils.geometry.transform.scale(point, x, y);

const newPoint = MathUtils.geometry.transform.scale(point, x, y, origin);

const newPoint = MathUtils.geometry.transform.scale(point, x, origin);

const newPoint = MathUtils.geometry.transform.scale(point, x, undefined, origin);

const newPoint = MathUtils.geometry.transform.scale(point, vector);

const newPoint = MathUtils.geometry.transform.scale(point, vector, origin);

const newPoint = MathUtils.geometry.transform.scale(point, vector, undefined, origin);
```


### Arguments

* `<number>` `radians` - angle in radians.


### Returns

* `<number>` - angle in degrees.


Examples
--------

```js
MathUtils.convert.radToDeg(Math.PI) === 180;
```
