Geometry / Transform / Translate y coordinate
=============================================

### `translateY`

Method translates point y coordinate by vector.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.translateY(point, vector);
```


### Arguments

* **`point`**: *`Point`* - point to translate
* **`vector`**: *`Vector`* - translation vector


### Returns

* *`Point`* - translated point


Examples
--------

```js
// Translate point y coordinate by (2,3) vector.
const newPoint = MathUtils.geometry.transform.translateY(point, { x: 2, y: 3 });
```
