Check / Is vector
=================

### `isVector`

Method checks if the thing is a Vector.

Vector definition:

```js
Vector {
	x: number,
	y: number,
}


Usage
-----

```js
const result = MathUtils.check.isVector(p);
```


### Arguments

* **`p`**: *`any`* - the thing to check


### Returns

* *`boolean`* - true if the thing is vector


Examples
--------

```js
// Is a vector:
MathUtils.check.isVector({ x: 1, y: 2 }) === true;

// Is not a vector:
MathUtils.check.isVector({ x: 1, y: 'nope' }) === false;
MathUtils.check.isVector(9) === false;
```
