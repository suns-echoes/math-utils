Tools / Fix float
=================

### `fixFloat`

Method fixes float precision error.


Usage
-----

```js
const fixedNumber = MathUtils.tools.fixFloat(number[, precision]);
```


### Arguments

* **`number`**: *`number`* - number to fix
* **`precision`**?: *`number`* - decimal places, 14 is max


### Returns

* *`number`* - fixed number


Examples
--------

```js
// Fix number precision error with default precision.
const l = MathUtils.tools.fixFloat(number);

// Use custom precision.
const l = MathUtils.tools.fixFloat(number, 4);
```
