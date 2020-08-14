Tools / Set fix float precision
===============================

### `setFixFloatPrecision`

Method sets precision for fixFloat method.

*Note: this will affect every [fixFloat](./fix-float.md) method.*


Usage
-----

```js
MathUtils.tools.setFixFloatPrecision(precision);
```


### Arguments

* **`precision`**: *`number`* - decimal places, integer <0,FIX_FLOAT.PRECISION.MAXIMUM>


### Returns

* *`void`*


Examples
--------

```js
// Set default precision.
MathUtils.tools.setFixFloatPrecision();

// Set 4 decimal places precision.
MathUtils.tools.setFixFloatPrecision(4);
```
