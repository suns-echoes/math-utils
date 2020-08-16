Check / Is point
================

### `isPoint`

Method checks if the thing is a Point.

Point definition:

```js
Point {
	x: number,
	y: number,
}


Usage
-----

```js
const result = MathUtils.check.isPoint(p);
```


### Arguments

* **`p`**: *`any`* - the thing to check


### Returns

* *`boolean`* - true if the thing is point


Examples
--------

```js
// Is a point:
MathUtils.check.isPoint({ x: 1, y: 2 }) === true;

// Is not a point:
MathUtils.check.isPoint({ x: 1, y: 'nope' }) === false;
MathUtils.check.isPoint(9) === false;
```
