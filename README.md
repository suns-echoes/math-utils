Math Utilities
==============

`math-utils` library add new mathematical functions and constants.


Installation
------------

`npm i @suns-echoes/math-utils`


Import
------

#### as Node.js module (CJS)

```js
// Import full library minimized distribution file:
import MathUtils from '@suns-echoes/math-utils';

// Import library from source:
import MathUtils from '@suns-echoes/math-utils/cjs';
// or named:
import { MathUtils } from '@suns-echoes/math-utils/cjs/math-utils';

// Import single util:
import { sagitta } from '@suns-echoes/math-utils/cjs/utils/geometry-2d/calculate/sagitta';
```

#### as ES6 module (ESM)

```js
// Import library from source:
import MathUtils from '@suns-echoes/math-utils/esm/index.js';
// or named:
import { MathUtils } from '@suns-echoes/math-utils/esm/math-utils.js';

// Import single util:
import { sagitta } from '@suns-echoes/math-utils/esm/utils/geometry-2d/calculate/sagitta.js';
```

Constants
---------
* [ORIGIN_0x0](./docs/utils/constants.md#origin-of-the-coordinate-system) - Origin of the coordinate system
* [FIX_FLOAT](./docs/utils/constants.md#default-and-maximum-precision-of-fixFloat-method) - Default and maximum precision of fixFloat method


Check
-----
* [isPoint](./docs/utils/check/is-point.md) - check if the thing is a Point
* [isVector](./docs/utils/check/is-vector.md) - check if the thing is a Vector
* [pointEqualPoint](./docs/utils/check/point-equal-point.md) - check if two points have the same coordinates


Conversion functions
--------------------
* [degToRad](./docs/utils/convert/deg-to-rad.md) - convert angle in degrees to radians
* [radToDeg](./docs/utils/convert/rad-to-deg.md) - convert angle in radians into degrees


Geometry functions
------------------

* Calculation

	* [distance](./docs/utils/geometry/calculate/distance.md) - calculate distance from point to origin
	* [sagitta](./docs/utils/geometry/calculate/sagitta.md) - calculate sagitta from radius and segment width
	* [sagittaFromAngle](./docs/utils/geometry/calculate/sagitta-from-angle.md) - calculate sagitta from radius and angle

* Transformation

	* [reflect](./docs/utils/geometry/transform/reflect.md) - reflect point over origin point
	* [reflectOverLine](./docs/utils/geometry/transform/reflect-over-line.md) - reflect point over line plotted by two points
	* [reflectX](./docs/utils/geometry/transform/reflect-x.md) - reflect point x coordinate over origin point
	* [reflectY](./docs/utils/geometry/transform/reflect-y.md) - reflect point y coordinate over origin point
	* [rotate](./docs/utils/geometry/transform/rotate.md) - rotate point around origin point
	* [scale](./docs/utils/geometry/transform/scale.md) - scale point x and y coordinates
	* [scaleX](./docs/utils/geometry/transform/scale-x.md) - scales point x coordinate
	* [scaleY](./docs/utils/geometry/transform/scale-y.md) - scales point y coordinate
	* [translate](./docs/utils/geometry/transform/translate.md) - translate point coordinates by vector
	* [translateX](./docs/utils/geometry/transform/translate-x.md) - translate point x coordinate by vector
	* [translateY](./docs/utils/geometry/transform/translate-y.md) - translate point y coordinate by vector

Trigonometry functions
----------------------

* [angleBetweenTreePoints](./docs/utils/trigonometry/angle-between-tree-points.md) - calculate angle between 3 points
* [cos](./docs/utils/trigonometry/cos.md) - calculate cosine value
* [sin](./docs/utils/trigonometry/sin.md) - calculate sine value
* [tan](./docs/utils/trigonometry/tan.md) - calculate tangent value
* [versin](./docs/utils/trigonometry/versin.md) - versus sine value


Tools
-----
* [fixFloat](./docs/utils/tools/fix-float.md) - fix float rounding precision error
* [setFixFloatPrecision](./docs/utils/tools/set-fix-float-precision.md) - set precision for fixFloat method


License
-------

Licensed under MIT

Copyright (c) 2020 Aneta Suns
