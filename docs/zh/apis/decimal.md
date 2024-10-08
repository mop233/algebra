# Decimal

## 构造函数

Decimal 构造函数用于创建一个整数或小数对象。

### 参数

该构造函数接受一个参数：`new Decimal(arg)`，参数可以是多种类型。

- number 类型

  若参数为数值，将会使用该数值；若参数为 NaN，将会转换为数值 0：

  ```js
  const d1 = new Decimal(8)
  d1.valueOf() // 8

  const d2 = new Decimal(NaN)
  d2.valueOf() // 0
  ```

- string 类型

  当参数为字符串时，内部将会调用 `parseFloat()` 函数将其转换为对应的数值，若不能转换为数值，则返回该字符串的 length 属性：

  ```js
  const d1 = new Decimal('34px')
  d1.valueOf() // 34

  const d2 = new Decimal('abc12')
  d2.valueOf() // 5
  ```

- boolean 类型

  当参数为布尔值时，内部将会调用 `Number()` 函数将其转换为对应的数值：

  ```js
  const d1 = new Decimal(true)
  d1.valueOf() // 1

  const d2 = new Decimal(false)
  d2.valueOf() // 0
  ```

- array 类型

  当参数为数组时，内部将会调用 `Number()` 函数将其转换为对应的数值，若不能转换为数值，则返回该数组的 length 属性：

  ```js
  const d1 = new Decimal([3.14])
  d1.valueOf() // 3.14

  const d2 = new Decimal([1, 2, 3])
  d2.valueOf() // 3
  ```

- object 类型

  当参数为普通对象时，内部将会调用 `Number()` 函数将其转换为对应的数值，若不能转换为数值，则返回数值 0：

  ```js
  const d1 = new Decimal({})
  d1.valueOf() // 0

  const d2 = new Decimal({ valueOf: () => 5 })
  d2.valueOf() // 5
  ```

- date 类型

  当参数为 date 对象时，内部会将其转换为数值形式，即 `+new Date()`：

  ```js
  const d = new Decimal(new Date())
  d.valueOf() // 1725979300532
  ```

- Decimal 类型

  参数可以是另一个 Decimal 实例对象，内部会使用其数值：

  ```js
  const d = new Decimal(new Decimal(2.5))
  d.valueOf() // 2.5
  ```

- 其他类型

  当参数为 undefined、null，或除上述类型以外的其他类型，都会直接报错：

  ```js
  const d = new Decimal(null)
  // TypeError: [algebra.js] Invalid Argument.
  ```

## 实例属性

::: danger 注意
Decimal 实例对象为非扩展对象，对该对象进行任何添加、删除或修改属性的操作均为非法。
:::

Decimal 实例对象有三个属性，`val`、`int` 和 `exp`：

```js
const d = new Decimal(3.14)
d // Decimal { val: 3.14, int: 314, exp: 2 }
```

### val

`val` 属性为数值类型。即调用构造函数时，[参数](#参数)转换后的数值：

```js
const d1 = new Decimal(6)
d1.val // 6

const d2 = new Decimal(2.5)
d1.val // 2.5
```

### int

`int` 属性为数值类型。该属性为 `val` 属性去除小数点之后的整数形式：

```js
const d1 = new Decimal(8)
d1.int // 8

const d2 = new Decimal(4.7)
d2.int // 47

const d3 = new Decimal(0.5)
d3.int // 5
```

### exp

`exp` 属性为数值类型。当 `val` 属性是整数时，`exp` 属性为 0；当 `val` 属性是小数时，`exp` 属性为小数位数：

```js
const d1 = new Decimal(8)
d1.exp // 0

const d2 = new Decimal(2.5)
d2.exp // 1

const d3 = new Decimal(0.05)
d3.exp // 2
```

## 实例方法

### valueOf

**`valueOf()`**

该方法返回 Decimal 实例对象的数值形式，与对象的 `val` 值相同。当对象需要自动转换为数值的时候，会默认调用该方法。

```js
const d = new Decimal(3)
d.valueOf() // 3
1 + d.valueOf() // 4
1 + d // 4
```

::: warning 注意
尽量不要使用 Decimal 实例对象参与 JavaScript 的原生算术操作，否则可能会出现[小数精度不准确](https://mopsite.github.io/posts/js-decimal)的问题。

```js
const d = new Decimal(3.14)
1 + d // 4.140000000000001
```

:::

### toString

**`toString()`**

该方法返回 Decimal 实例对象的字符串形式，即将 [`val`](#val) 属性直接转为字符串。当对象需要自动转换为字符串的时候，会默认调用该方法。

```js
const d = new Decimal(3)
d.toString() // '3'
'a' + d.toString() // 'a3'
'a' + d // 'a3'
```

### isInteger

**`isInteger()`**

该方法用来判断 Decimal 实例对象的数值是否为整数，并返回布尔值。

```js
const d1 = new Decimal(2)
d1.isInteger() // true

const d2 = new Decimal(2.5)
d2.isInteger() // false
```

### isEven

**`isEven()`**

该方法用来判断 Decimal 实例对象的数值是否为偶数，并返回布尔值。

```js
const d1 = new Decimal(4)
d1.isEven() // true

const d2 = new Decimal(5)
d2.isEven() // false
```

### isOdd

**`isOdd()`**

该方法用来判断 Decimal 实例对象的数值是否为奇数，并返回布尔值。

```js
const d1 = new Decimal(4)
d1.isOdd() // false

const d2 = new Decimal(5)
d2.isOdd() // true
```

::: warning 注意
奇数和偶数都是整数，若 Decimal 实例对象的数值不为整数，判断结果都为 false。

```js
const d1 = new Decimal(4.4)
d1.isEven() // false

const d2 = new Decimal(5.5)
d2.isOdd() // false
```

:::

### eq

**`eq(arg)`**

该方法接受一个参数，参数必须是 Decimal 构造函数允许的任意[参数类型](#参数)。

该方法用于判断当前实例对象与参数的数值是否相等，并返回布尔值。

```js
const d = new Decimal(8)
d.eq(8) // true
d.eq(6) // false
```

### gt

**`gt(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否大于参数的数值。

```js
const d = new Decimal(8)
d.gt(6) // true
d.gt(9) // false
```

### gte

**`gte(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否大于等于参数的数值。

```js
const d = new Decimal(8)
d.gte(6) // true
d.gte(8) // true
d.gte(9) // false
```

### lt

**`lt(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否小于参数的数值。

```js
const d = new Decimal(8)
d.lt(6) // false
d.lt(9) // true
```

### lte

**`lte(arg)`**

与 [`eq()`](#eq) 方法用法一样，用于判断当前实例对象的数值是否小于等于参数的数值。

```js
const d = new Decimal(8)
d.lte(6) // false
d.lte(8) // true
d.lte(9) // true
```

### add

**`add(arg = 0)`**

该方法接受一个参数，参数必须是 Decimal 构造函数允许的任意[参数类型](#参数)。

该方法用于将当前实例对象与参数的数值相加，并返回一个新的 Decimal 实例对象。返回的实例对象的 [`val`](#val) 属性就是相加之后的数值。

```js
0.2 + 0.1 // 0.30000000000000004
const d = new Decimal(0.2)
d.add(0.1) // Decimal { val: 0.3, int: 3, exp: 1 }
// 解决了小数精度问题
d.add(0.1).valueOf() // 0.3
```

该方法的参数默认值为 0，如果不传参，返回的新实例对象数值为原实例对象数值（即原实例对象的数值与 0 相加）：

```js
const d = new Decimal(5)
d.add().val // 5
```

### sub

**`sub(arg = 0)`**

该方法与 [`add()`](#add) 方法用法一样，用于将当前实例对象与参数的数值相减。

```js
2.88 - 1.12 // 1.7599999999999998
const d1 = new Decimal(2.88)
const d2 = new Decimal(1.12)
d1.sub(d2).val // 1.76
```

该方法的参数默认值为 0。

### mul

**`mul(arg = 1)`**

该方法与 [`add()`](#add) 方法用法一样，用于将当前实例对象与参数的数值相乘。

```js
const d1 = new Decimal(8)
const d2 = new Decimal(4)
d1.mul(d2).val // 32
```

该方法的参数默认值为 1。

### div

**`div(arg = 1)`**

该方法与 [`add()`](#add) 方法用法一样，用于将当前实例对象与参数的数值相乘。

```js
const d1 = new Decimal(8)
const d2 = new Decimal(4)
d1.div(d2).val // 2
```

该方法的参数默认值为 1。

::: danger 注意
参数的数值不能为 0，否则会报错。

```js
Decimal.random().div(0) // TypeError: [algebra.js] Division by Zero.
```

:::

### abs

**`abs()`**

该方法返回一个 Decimal 实例对象，返回对象的数值为原对象数值的绝对值。

```js
const d1 = new Decimal(3)
d1.abs().val // 3
const d2 = new Decimal(-4)
d2.abs().val // 4
```

### neg

**`abs()`**

该方法返回一个 Decimal 实例对象，返回对象的数值为原对象数值的相反数。

```js
const d1 = new Decimal(3)
d1.neg().val // -3
const d2 = new Decimal(-4)
d2.neg().val // 4
```

### mod

**`mod(arg)`**

该方法接受一个参数，参数必须是 Decimal 构造函数允许的任意[参数类型](#参数)。

该方法用于对当前对象的数值和参数的数值取余，并返回一个新的 Decimal 实例对象，返回对象的数值为取得的余数。

```js
const d1 = new Decimal(5)
const d2 = new Decimal(3)
d1.mod(d2).val // 2
```

## 类方法

### compare

**`compare(arg1, arg2)`**

该方法接受两个参数，参数必须是 Decimal 构造函数允许的任意[参数类型](#参数)。

- 如果 arg1 等于 arg2，返回 0。
- 如果 arg1 大于 arg2，返回 1。
- 如果 arg1 小于 arg2，返回 -1。

```js
Decimal.compare(6, 6) // 0
Decimal.compare(6, 5) // 1
Decimal.compare(6, 8) // -1
```

### gcd

**`gcd(...args)`**

该方法接受一个或多个参数，内部会将传入的参数转为 Decimal 实例对象。

如果只传入一个参数，将以该参数的数值为 [`val`](#val) 属性返回一个新的 Decimal 对象。

```js
Decimal.gcd(6).val // 6
```

如果传入两个或以上参数，会求出这些对象数值的最大公约数，并以最大公约数为 [`val`](#val) 属性返回一个新的 Decimal 实例对象。

```js
Decimal.gcd(6, 8).val // 2
```

### lcm

**`lcm(...args)`**

该方法与 [`gcd()`](#gcd) 方法的用法一样，不过返回的是最小公倍数。

```js
Decimal.lcm(6).val // 6
Decimal.lcm(4, 6).val // 12
```

### random

**`random(start = 0, end = 9, prec = 0)`**

该方法用于随机返回一个 Decimal 实例对象。

该方法接受三个参数，其中 start 和 end 用来决定所返回 Decimal 实例对象的数值取值范围（包含起止值），prec 用来决定数值的小数位数（为 0 即整数）。

参数的默认值表示随机返回的 Decimal 实例对象的数值为 0 - 9 的整数。

```js
Decimal.random().val // 7
Decimal.random(10, 20).val // 15
Decimal.random(0, 9, 2).val // 3.14
```

::: warning 注意
这三个参数必须均为整数，否则会报错。

```js
Decimal.random(0.1, 9, 0) // TypeError: [algebra.js] Must be type of Integer.
```

:::

## 链式调用

上述方法中，凡是返回 Decimal 实例对象的方法，都可以采用链式调用：

```js
import algebra from '@mop233/algebra'

const { Decimal } = algebra

Decimal.random().add(3).mul(2).neg().toString() // '-24'
```
