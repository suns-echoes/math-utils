Geometry / Transform / Rotate
=============================

### `rotate`

Method rotates point around origin point.


Usage
-----

```js
const newPoint = MathUtils.geometry.transform.rotate(point, theta[, origin, clockwise]);
```


### Arguments

* **`point`**: *`Point`* - point to rotate
* **`theta`**: *`number`* - rotation angle in radians
* **`origin`**?: *`Point`* - rotation origin (def.: (0,0))
* **`clockwise`**?: *`boolean`* - rotate clockwise


### Returns

* *`Point`* - rotated point


Examples
--------

```js
// Rotate point by theta angle (in radians) around origin (0,0) clockwise.
const newPoint = MathUtils.geometry.transform.rotate(point, 1.256);

// Rotate point around custom origin.
const newPoint = MathUtils.geometry.transform.rotate(point, 2.4, { x: 1, y: 3 });

// Rotate point counter clockwise.
const newPoint = MathUtils.geometry.transform.rotate(point, 0.23, undefined, false);
```
