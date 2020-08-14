Geometry / Calculate / Sagitta (from angle)
===========================================

### `asagitta`

Method calculates sagitta from radius and angle.


Usage
-----

```js
const sagittaHeight = MathUtils.geometry.calculate.asagitta(radius, theta);
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
const sagittaHeight = MathUtils.geometry.calculate.sagitta(4, 2.12);
```
