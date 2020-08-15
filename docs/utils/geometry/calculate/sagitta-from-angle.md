Geometry / Calculate / Sagitta from angle
=========================================

### `sagittaFromAngle`

Method calculates sagitta from radius and angle.


Usage
-----

```js
const sagittaHeight = MathUtils.geometry.calculate.sagittaFromAngle(radius, theta);
```


### Arguments

* **`radius`**: *`number`* - circle radius
* **`theta`**: *`number`* - circle segment angle in radians


### Returns

* *`number`* - sagitta height


Examples
--------

```js
// Calculate sagitta for circle radius 4 and segment angle 2.12 rad.
const sagittaHeight = MathUtils.geometry.calculate.sagittaFromAngle(4, 2.12);
```
