Geometry / Transform / Translate (by vector)
============================================

### `vtranslate`

Method translate point coordinates by vector.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.vtranslate(point, vector);
```


### Arguments

* **`point`**: *`Point`* - point to translate
* **`vector`**: *`Vector`* - translation vector


### Returns

* *`Point`* - translated point


Examples
--------

```js
// Translate point by (2,3) vector.
const newPoint = MathUtils.geometry.transform.translate(point, { x: 2, y: 3 });
```
