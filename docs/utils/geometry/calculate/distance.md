Geometry / Calculate / Distance
===============================

### `distance`

Method calculates distance from point to origin.


Usage
-----

```js
const l = MathUtils.geometry.calculate.distance(point[, origin]);
```


### Arguments

* **`point`**: *`Point`* - point
* **`origin`**?: *`Point`* - origin point (def.: (0,0))


### Returns

* *`number`* - distance between point and origin


Examples
--------

```js
// Calculate point distance from the origin of the coordinate system.
const l = MathUtils.geometry.calculate.distance(point);

// Calculate point distance from another point (custom origin).
const l = MathUtils.geometry.calculate.distance(point, { x: 4, y: 6 });
```
