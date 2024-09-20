<div align="center">
  <h1>Algebra</h1>
  <p>English | <a href="./README.zh-CN.md" target="_blank">简体中文</a></p>
  <p>
    <a href="https://www.npmjs.com/package/@mop233/algebra" target="_blank" style="text-decoration: none;">
      <img src=https://badgen.net/npm/v/@mop233/algebra>
    </a>
    <a href="https://npm-stat.com/charts.html?package=%40mop233%2Falgebra" target="_blank" style="text-decoration: none;">
      <img src=https://badgen.net/npm/dt/@mop233/algebra>
    </a>
    <a href="https://github.com/mop233/algebra/blob/main/LICENSE" target="_blank" style="text-decoration: none;">
      <img src=https://badgen.net/npm/license/@mop233/algebra>
    </a>
  </p>
</div>

[Algebra](https://mop233.github.io/algebra/) is a small, fast, and easy-to-use JavaScript library used for basic algebraic operations.

## Installation

### Common JS

```sh
npm install @mop233/algebra
```

After installation, you can directly import the algebra object:

```js
const algebra = require('@mop233/algebra')

console.log(algebra.version) // '1.0.0'
```

You can also destructure to import only the necessary API:

```js
const { Fraction } = require('@mop233/algebra')
const f = new Fraction(1, 2)
console.log(f.toString()) // '1/2'
```

### ES Module

```sh
npm install @mop233/algebra
```

In ES Module format, algebra.js by default exports the algebra object:

```js
import algebra from '@mop233/algebra'

console.log(algebra.version) // '1.0.0'

const { Decimal } = algebra
const d1 = new Decimal(0.1)
const d2 = new Decimal(0.2)
console.log(d1.add(d2).toString()) // '0.3'
```

### CDN

The simplest way to use algebra.js in a browser is by importing it via [CDN](https://unpkg.com/@mop233/algebra). After importing, the browser will automatically add the algebra object to the global scope:

```html
<script src="https://unpkg.com/@mop233/algebra"></script>
<script>
  console.log(algebra.version) // '1.0.0'

  const { Decimal } = algebra
  console.log(Decimal.random().toString())  // '7'
</script>
```

## Quick Start

The algebra object contains three properties:

- version: The version number of the algebra.js library.
- Decimal: A class used to generate integers and decimals, which includes various operations and methods for them.
- Fraction: A class used to generate fractions, which includes various operations and methods for fractions.

### Decimal

Decimal is a constructor used to generate integers and decimals. It accepts one parameter and returns a Decimal instance object:

```js
import algebra from '@mop233/algebra'
const { Decimal } = algebra

const d1 = new Decimal(9)
d1.valueOf() // 9

const d2 = new Decimal(3.14)
d2.toString() // '3.14'
```

The Decimal instance object can perform addition, subtraction, multiplication, division, and various other operations:

```js
import algebra from '@mop233/algebra'
const { Decimal } = algebra

const d1 = new Decimal(9)
const d2 = new Decimal(3)

// Addition
d1.add(d2).valueOf() // 12
// Subtraction
d1.sub(d2).valueOf() // 6
// Multiplication
d1.mul(d2).valueOf() // 27
// Division
d1.div(d2).valueOf() // 3

// Absolute value
d1.abs().valueOf() // 9
// Negation
d2.neg().valueOf() // -3
// Modulus
d1.mod(d2).valueOf() // 0

// Equals
d1.eq(d2) // false
// Greater than
d1.gt(d2) // true
// Less than
d1.lt(d2) // false
```

### Fraction

Fraction is a constructor used to generate fractions. It accepts two parameters and returns a Fraction instance object:

```js
import algebra from '@mop233/algebra'
const { Fraction } = algebra

const f = new Fraction(1, 2)
f.valueOf() // 0.5
f.toString() // '1/2'
f.toTex() // '\frac{1}{2}'
```

The Fraction instance object can perform addition, subtraction, multiplication, division, and various other operations:

```js
import algebra from '@mop233/algebra'
const { Fraction } = algebra

const f1 = new Fraction(1, 2)
const f2 = new Fraction(1, 3)

// Addition
f1.add(f2).toString() // '5/6'
// Subtraction
f1.sub(f2).toString() // '1/6'
// Multiplication
f1.mul(f2).toString() // '1/6'
// Division
f1.div(f2).toString() // '3/2'

// Absolute value
f1.abs().toString() // '1/2'
// Negation
f1.neg().toString() // '-1/2'
// Reciprocal
f1.rec().toString() // '2'

// Equals
f1.eq(f2) // false
// Greater than
f1.gt(f2) // true
// Less than
f1.lt(f2) // false
```

For more usage, please refer to [the official documentation of Algebra](https://mop233.github.io/algebra/).
