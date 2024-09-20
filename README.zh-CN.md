<div align="center">
  <h1>Algebra</h1>
  <p>简体中文 | <a href="./README.md" target="_blank">English</a></p>
  <p>
    <a href="https://www.npmjs.com/package/@mop233/algebra" target="_blank">
      <img src=https://badgen.net/npm/v/@mop233/algebra>
    </a>
    <a href="https://npm-stat.com/charts.html?package=%40mop233%2Falgebra" target="_blank">
      <img src=https://badgen.net/npm/dt/@mop233/algebra>
    </a>
    <a href="https://github.com/mop233/algebra/blob/main/LICENSE" target="_blank">
      <img src=https://badgen.net/npm/license/@mop233/algebra>
    </a>
  </p>
</div>

[Algebra](https://mop233.github.io/algebra/zh/) 是一个小巧、快速且易用的 JavaScript 库，它用于初级的代数运算。

## 安装使用

### Common JS

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

### ES Module

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

### CDN 引入

浏览器中使用 algebra.js 最简单的方式就是 [CDN](https://unpkg.com/@mop233/algebra) 引入，引入后浏览器会自动将 algebra 对象添加到全局作用域：

```html
<script src="https://unpkg.com/@mop233/algebra"></script>
<script>
  console.log(algebra.version) // '1.0.0'

  const { Decimal } = algebra
  console.log(Decimal.random().toString())  // '7'
</script>
```

## 快速开始

algebra 对象包含三个属性：

- version：用于返回 algebra.js 库的版本号。
- Decimal：一个用于生成整数和小数的类，并包含了它们的各种运算和操作方法。
- Fraction：一个用于生成分数的类，并包含了分数的各种运算和操作方法。

### Decimal

Decimal 是用于生成整数和小数的构造函数，该构造函数接受一个参数，并返回一个 Decimal 实例对象：

```js
import algebra from '@mop233/algebra'
const { Decimal } = algebra

const d1 = new Decimal(9)
d1.valueOf() // 9

const d2 = new Decimal(3.14)
d2.toString() // '3.14'
```

Decimal 实例对象可以进行加减乘除四则运算和各种其他运算操作：

```js
import algebra from '@mop233/algebra'
const { Decimal } = algebra

const d1 = new Decimal(9)
const d2 = new Decimal(3)

// 加
d1.add(d2).valueOf() // 12
// 减
d1.sub(d2).valueOf() // 6
// 乘
d1.mul(d2).valueOf() // 27
// 除
d1.div(d2).valueOf() // 3

// 绝对值
d1.abs().valueOf() // 9
// 相反数
d2.neg().valueOf() // -3
// 取余
d1.mod(d2).valueOf() // 0

// 等于
d1.eq(d2) // false
// 大于
d1.gt(d2) // true
// 小于
d1.lt(d2) // false
```

### Fraction

Fraction 是用于生成分数的构造函数，该构造函数接受两个参数，并返回一个 Fraction 实例对象：

```js
import algebra from '@mop233/algebra'
const { Fraction } = algebra

const f = new Fraction(1, 2)
f.valueOf() // 0.5
f.toString() // '1/2'
f.toTex() // '\frac{1}{2}'
```

Fraction 实例对象可以进行加减乘除四则运算和各种其他运算操作：

```js
import algebra from '@mop233/algebra'
const { Fraction } = algebra

const f1 = new Fraction(1, 2)
const f2 = new Fraction(1, 3)

// 加
f1.add(f2).toString() // '5/6'
// 减
f1.sub(f2).toString() // '1/6'
// 乘
f1.mul(f2).toString() // '1/6'
// 除
f1.div(f2).toString() // '3/2'

// 绝对值
f1.abs().toString() // '1/2'
// 相反数
f1.neg().toString() // '-1/2'
// 倒数
f1.rec().toString() // '2'

// 等于
f1.eq(f2) // false
// 大于
f1.gt(f2) // true
// 小于
f1.lt(f2) // false
```

更多使用方法，请查看 [Algebra 官方文档](https://mop233.github.io/algebra/zh/)。
