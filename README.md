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


Tools
-----
* [fix float (precision/rounding)](./docs/utils/tools/fix-float.md)


Conversion functions
--------------------
* [degrees to radians](./docs/utils/convert/deg-to-rad.md)
* [radians to degrees](./docs/utils/convert/rad-to-deg.md)


Geometry functions
------------------

1. Calculation

* [distance](./docs/utils/geometry/calculation/distance.md)
* [distance from origin](./docs/utils/geometry/calculation/distance-from-origin.md)
* [sagitta](./docs/utils/geometry/calculation/sagitta.md)

2. Transformation

* [reflect](./docs/utils/geometry/transformation/reflect.md)
* [reflect over line](./docs/utils/geometry/transformation/reflect-over-line.md)
* [reflect over origin](./docs/utils/geometry/transformation/reflect-over-origin.md)
* [reflect x](./docs/utils/geometry/transformation/reflect-x.md)
* [reflect y](./docs/utils/geometry/transformation/reflect-y.md)
* [rotate](./docs/utils/geometry/transformation/rotate.md)
* [rotate around origin](./docs/utils/geometry/transformation/rotate-around-origin.md)
* [scale](./docs/utils/geometry/transformation/scale.md)
* [scale x](./docs/utils/geometry/transformation/scale-x.md)
* [scale y](./docs/utils/geometry/transformation/scale-y.md)
* [translate](./docs/utils/geometry/transformation/translate.md)
* [translate x](./docs/utils/geometry/transformation/translate-x.md)
* [translate y](./docs/utils/geometry/transformation/translate-y.md)

Trigonometry functions
----------------------

* [angle between tree points](./docs/utils/trigonometry/angle-between-tree-points.md)
* [versin](./docs/utils/trigonometry/versin.md)


License
-------

Licensed under MIT

Copyright (c) 2020 Aneta Suns
