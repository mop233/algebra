# Fraction

## 构造函数

Fraction 构造函数用于创建一个分数对象。

该构造函数接受两个参数：`new Fraction(numer, denom)`，分别为分子（numer）和分母（denom），它们必须是 Decimal 构造函数允许的任意[参数类型](./decimal#参数)。

调用该函数时至少需要一个参数，即分子，此时分母默认为 1。

```js
new Fraction() // TypeError: [algebra.js] Invalid Argument.
// 分母不能为 0，否则报错
new Fraction(1, 0) // TypeError: [algebra.js] Division by Zero.
new Fraction(1, 2).toString() // '1/2'
new Fraction(3).toString() // '3'
```

需要注意的是，若传入的 numer 为 0，无论传入的 denom 数值为多少都会自动转为 1。

```js
new Fraction(0, 5)
/*
Fraction {
  numer: Decimal { val: 0, int: 0, exp: 0 },
  denom: Decimal { val: 1, int: 1, exp: 0 }
}
*/
```

## 实例属性

::: danger 注意
Fraction 实例对象为非扩展对象，对该对象进行任何添加、删除或修改属性的操作均为非法。
:::

Fraction 实例对象有两个属性：`numer` 和 `denom`，它们分别表示分子和分母，且均为 [Decimal](./decimal) 实例对象。

```js
new Fraction(1, 2)
/*
Fraction {
  numer: Decimal { val: 1, int: 1, exp: 0 },
  denom: Decimal { val: 2, int: 2, exp: 0 }
}
*/
```

## 实例方法

### valueOf

**`valueOf()`**

该方法返回 Fraction 实例对象的数值形式，内部实际上是 `numer.div(denom).val`。当对象需要自动转换为数值的时候，会默认调用该方法。

```js
const f = new Fraction(1, 2)
f.valueOf() // 0.5
1 + f // 1.5
```

::: warning 注意
尽量不要使用 Fraction 实例对象参与 JavaScript 的原生算术操作，否则可能会出现[小数精度不准确](https://mop233.github.io/posts/js-decimal)的问题。

```js
const f = new Decimal(1, 5)
0.1 + f // 0.30000000000000004
```

:::

### toString

**`toString()`**

该方法返回 Fraction 实例对象的字符串形式。当对象需要自动转换为字符串的时候，会默认调用该方法。

需要注意的是：当 numer 为 0，或者 denom 为 1 时，会直接返回对应的整数字符串形式。

```js
new Fraction(1, 2).toString() // '1/2'
new Fraction(6, 3).toString() // '6/3'
new Fraction(0, 3).toString() // '0'
new Fraction(8, 1).toString() // '8'
```

### toTex

**`toTex()`**

与 [`toString()`](#tostring) 方法类似，返回的是 $\LaTeX$ 形式的字符串。

```js
new Fraction(1, 2).toTex() // '\frac{1}{2}'
new Fraction(6, 3).toTex() // '\frac{6}{3}'
new Fraction(0, 3).toTex() // '0'
new Fraction(8, 1).toTex() // '8'
```

在支持 $\LaTeX$ 的环境中（如本站），可以显示为 $\frac{1}{2}$。

### isInteger

**`isInteger()`**

该方法用来判断 Fraction 实例对象的数值是否为整数，并返回布尔值。

```js
new Fraction(1, 2).isInteger() // false
new Fraction(6, 3).isInteger() // true
new Fraction(0, 3).isInteger() // true
new Fraction(8, 1).isInteger() // true
```

### eq

**`eq(arg)`**

该方法用于比较当前 Fraction 实例对象和参数的数值是否相等，并返回布尔值。

该方法接受一个参数，如果参数是 Fraction 对象，将会直接比较两个分数对象的值，否则，会将自动将参数转为 Fraction 对象。

```js
new Fraction(1, 2).eq(new Fraction(1, 2)) // true
new Fraction(1, 2).eq(new Fraction(2, 3)) // false
new Fraction(1, 2).eq(4) // false
```

### gt

**`gt(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否大于参数的数值。

```js
new Fraction(8, 2).gt(4) // false
new Fraction(8, 2).gt(new Fraction(3, 4)) // true
```

### gte

**`gte(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否大于等于参数的数值。

```js
new Fraction(8, 2).gte(4) // true
new Fraction(8, 2).gte(new Fraction(3, 4)) // true
```

### lt

**`lt(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否小于参数的数值。

```js
new Fraction(8, 2).lt(4) // false
new Fraction(8, 2).lt(new Fraction(5)) // true
```

### lte

**`lte(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否小于等于参数的数值。

```js
new Fraction(8, 2).lte(4) // true
new Fraction(8, 2).lte(new Fraction(5)) // true
```

### reduce

**`reduce()`**

该方法用于对当前实例对象进行约分，并返回约分后的新对象。

```js
new Fraction(2, 8).reduce().toString() // '1/4'
new Fraction(10, 15).reduce().toString() // '2/3'
```

### add

**`add(arg = 0, simplify = false)`**

该方法用于将当前实例对象与参数的数值进行相加，并返回一个新的 Fraction 实例对象，新对象的分子分母分别对应相加后得到的分数。

该方法接受两个参数：

- 第一个参数如果不是 Fraction 类型，将会自动转为 Fraction 实例对象，该参数默认为 0，即返回原分数（非原对象）。
- 第二个参数必须是布尔值，表示是否对相加后的结果进行简化处理（约分），默认为 false ，即不简化。

```js
const f1 = new Fraction(3, 8)
const f2 = new Fraction(1, 8)
f1.add(f2).toString() // '4/8'
f1.add(f2, true).toString() // '1/2'
```

### sub

**`sub(arg = 0, simplify = false)`**

该方法与 [`add()`](#add) 方法用法一样，用于将当前实例对象与参数的数值相减。

```js
const f1 = new Fraction(3, 8)
const f2 = new Fraction(1, 8)
f1.sub(f2).toString() // '2/8'
f1.sub(f2, true).toString() // '1/4'
```

### mul

**`mul(arg = 1, simplify = false)`**

该方法与 [`add()`](#add) 方法用法一样，用于将当前实例对象与参数的数值相乘。

```js
const f1 = new Fraction(4, 8)
const f2 = new Fraction(4, 8)
f1.mul(f2).toString() // '16/64'
f1.mul(f2, true).toString() // '1/4'
```

### div

**`div(arg = 1, simplify = false)`**

该方法与 [`add()`](#add) 方法用法一样，用于将当前实例对象与参数的数值相除。

```js
const f1 = new Fraction(1, 4)
const f2 = new Fraction(1, 2)
f1.div(f2).toString() // '2/4'
f1.div(f2, true).toString() // '1/2'
```

::: danger 注意
第一个参数的数值不能为 0，否则会报错。

```js
Fraction.random().div(0) // TypeError: [algebra.js] Division by Zero.
```

:::

### abs

**`abs()`**

该方法返回一个 Fraction 实例对象，返回对象的数值为原对象数值的绝对值。

```js
new Fraction(3, 4).abs().toString() // '3/4'
new Fraction(-3, 4).abs().toString() // '3/4'
```

### neg

**`neg()`**

该方法返回一个 Fraction 实例对象，返回对象的数值为原对象数值的相反数。

```js
new Fraction(3, 4).neg().toString() // '-3/4'
new Fraction(-3, 4).neg().toString() // '3/4'
```

### rec

**`rec()`**

该方法返回一个 Fraction 实例对象，返回的分数对象为原分数对象的倒数。

```js
new Fraction(3, 4).rec().toString() // '4/3'
```

## 类方法

### compare

**`compare(arg1, arg2)`**

该方法接受两个参数，如果参数不是 Fraction 类型，将会自动转为 Fraction 实例对象。

- 如果 arg1 等于 arg2，返回 0。
- 如果 arg1 大于 arg2，返回 1。
- 如果 arg1 小于 arg2，返回 -1。

```js
const f1 = new Fraction(1, 2)
const f2 = new Fraction(1, 3)
Fraction.compare(f1, f2) // 1
```

### random

**`random(start1 = 0, end1 = 9, prec1 = 0, start2 = 1, end2 = 9, prec2 = 0)`**

该方法会随机返回一个分数对象。

该方法接受 6 个参数，前三个会传入 [`Decimal.random()`](./decimal#random) 方法，作为分子；后三个也会传入 [`Decimal.random()`](./decimal#random) 方法，作为分母。

如果不传递任何参数，该方法默认返回的 Fraction 实例对象中，分子为 0 - 9 的随机数，分母为 1 - 9 的随机数。

```js
Fraction.random().toString() // '4/7'
Fraction.random().toString() // '6/4'
```
