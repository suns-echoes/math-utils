Math Utilities
==============

`math-utils` library add new mathematical functions and constants.


Installation
------------

`npm i @suns-echoes/math-utils`


Import
------

```js
// Import library distribution file
import { MathUtils } from '@suns-echoes/math-utils';
```

```js
// import library from source
import { MathUtils } from '@suns-echoes/math-utils/src/';
// or
import { MathUtils } from '@suns-echoes/math-utils/src/math-utils';
```

```js
// Import single util from source
import { sagitta } from '@suns-echoes/math-utils/src/utils/geometry/calculation/sagitta';
```


Constants
---------
* [origin (0,0)](./docs/utils/constants/origin.md)


Check
-----
* [is point](./docs/utils/check/is-point.md)
* [is vector](./docs/utils/check/is-vector.md)
* [point equal point](./docs/utils/check/point-equal-point.md)


Conversion functions
--------------------
* [degrees to radians](./docs/utils/convert/deg-to-rad.md)
* [radians to degrees](./docs/utils/convert/rad-to-deg.md)


Geometry functions
------------------

1. Calculation

* [distance](./docs/utils/geometry/calculate/distance.md)
* [sagitta](./docs/utils/geometry/calculate/sagitta.md)
* [sagitta from angle](./docs/utils/geometry/calculate/sagitta-from-angle.md)

2. Transformation

* [reflect](./docs/utils/geometry/transform/reflect.md)
* [reflect over line](./docs/utils/geometry/transform/reflect-over-line.md)
* [reflect x](./docs/utils/geometry/transform/reflect-x.md)
* [reflect y](./docs/utils/geometry/transform/reflect-y.md)
* [rotate](./docs/utils/geometry/transform/rotate.md)
* [scale](./docs/utils/geometry/transform/scale.md)
* [scale x](./docs/utils/geometry/transform/scale-x.md)
* [scale y](./docs/utils/geometry/transform/scale-y.md)
* [translate](./docs/utils/geometry/transform/translate.md)
* [translate x](./docs/utils/geometry/transform/translate-x.md)
* [translate y](./docs/utils/geometry/transform/translate-y.md)

Trigonometry functions
----------------------

* [angle between tree points](./docs/utils/trigonometry/angle-between-tree-points.md)
* [cos](./docs/utils/trigonometry/cos.md)
* [sin](./docs/utils/trigonometry/sin.md)
* [tan](./docs/utils/trigonometry/tan.md)
* [versin](./docs/utils/trigonometry/versin.md)


Tools
-----
* [fix float (rounding precision)](./docs/utils/tools/fix-float.md)
* [set fix float precision](./docs/utils/tools/set-fix-float-precision.md)


License
-------

Licensed under MIT

Copyright (c) 2020 Aneta Suns
