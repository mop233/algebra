# Installation

Algebra is a small, fast, and easy-to-use JavaScript library used for basic algebraic operations.

## Common JS

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

## ES Module

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

## CDN

The simplest way to use algebra.js in a browser is by importing it via [CDN](https://unpkg.com/@mop233/algebra). After importing, the browser will automatically add the algebra object to the global scope:

```html
<script src="https://unpkg.com/@mop233/algebra"></script>
<script>
  console.log(algebra.version) // '1.0.0'

  const { Decimal } = algebra
  console.log(Decimal.random().toString())  // '7'
</script>
```
