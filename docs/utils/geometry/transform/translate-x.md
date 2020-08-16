Geometry / Transform / Translate x coordinate
=============================================

### `translateX`

Method translates point x coordinate by vector.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.translateX(point, vector);
```


### Arguments

* **`point`**: *`Point`* - point to translate
* **`vector`**: *`Vector`* - translation vector


### Returns

* *`Point`* - translated point


Examples
--------

```js
// Translate point x coordinate by (2,3) vector:
const newPoint = MathUtils.geometry.transform.translateX(point, { x: 2, y: 3 });
```
