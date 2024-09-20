# 安装使用

Algebra 是一个小巧、快速且易用的 JavaScript 库，它用于初级的代数运算。

## Common JS

```sh
npm install @mop233/algebra
```

安装后，可以直接导入 algebra 对象：

```js
const algebra = require('@mop233/algebra')

console.log(algebra.version) // '1.0.0'
```

也可以解构导入所需的 API：

```js
const { Fraction } = require('@mop233/algebra')
const f = new Fraction(1, 2)
console.log(f.toString()) // '1/2'
```

## ES Module

```sh
npm install @mop233/algebra
```

algebra.js 默认导出 algebra 对象：

```js
import algebra from '@mop233/algebra'

console.log(algebra.version) // '1.0.0'

const { Decimal } = algebra
const d1 = new Decimal(0.1)
const d2 = new Decimal(0.2)
console.log(d1.add(d2).toString()) // '0.3'
```

## CDN 引入

浏览器中使用 algebra.js 最简单的方式就是 [CDN](https://unpkg.com/@mop233/algebra) 引入，引入后浏览器会自动将 algebra 对象添加到全局作用域：

```html
<script src="https://unpkg.com/@mop233/algebra"></script>
<script>
  console.log(algebra.version) // '1.0.0'

  const { Decimal } = algebra
  console.log(Decimal.random().toString())  // '7'
</script>
```
