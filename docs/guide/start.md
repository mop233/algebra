# 快速开始

algebra 对象包含三个属性：

- version：用于返回 algebra.js 库的版本号。
- Decimal：一个用于生成整数和小数的类，并包含了它们的各种运算和操作方法。
- Fraction：一个用于生成分数的类，并包含了分数的各种运算和操作方法。

::: tip 提示
为了方便和代码的统一，之后所有的示例代码将全部采用 ES Module 方式。
:::

## Decimal

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

## Fraction

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
