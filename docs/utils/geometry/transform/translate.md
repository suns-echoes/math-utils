Geometry / Transform / Translate
================================

### `translate`

Method translate point coordinates.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.translate(point[, x, y]);
```


### Arguments

* **`point`**: *`Point`* - point to translate
* **`x`**: *`number`* - x axis translation
* **`y`**: *`number`* - y axis translation


### Returns

* *`Point`* - translated point


Examples
--------

```js
// Translate point x by 2 and y by 3.
const newPoint = MathUtils.geometry.transform.translate(point, 2, 3);

// Translate point x by 2.
const newPoint = MathUtils.geometry.transform.translate(point, 2);

// Translate point y by 3.
const newPoint = MathUtils.geometry.transform.translate(point, undefined, 2);
```
