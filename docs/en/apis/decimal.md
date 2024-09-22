# Decimal

## Constructor

The Decimal constructor is used to create an integer or decimal object.

### Parameters

The constructor accepts one parameter: `new Decimal(arg)`. The parameter can be of various types.

- number

  If the parameter is a number, it will be used as is. If the parameter is NaN, it will be converted to 0:

  ```js
  const d1 = new Decimal(8)
  d1.valueOf() // 8

  const d2 = new Decimal(NaN)
  d2.valueOf() // 0
  ```

- string

  When the parameter is a string, the internal mechanism calls `parseFloat()` to convert it into a number. If it cannot be converted, it returns the string’s length:

  ```js
  const d1 = new Decimal('34px')
  d1.valueOf() // 34

  const d2 = new Decimal('abc12')
  d2.valueOf() // 5
  ```

- boolean

  If the parameter is a boolean, it will be converted to a number using the `Number()` function:

  ```js
  const d1 = new Decimal(true)
  d1.valueOf() // 1

  const d2 = new Decimal(false)
  d2.valueOf() // 0
  ```

- array

  If the parameter is an array, it will be converted to a number using the `Number()` function. If it cannot be converted, the length of the array will be returned:

  ```js
  const d1 = new Decimal([3.14])
  d1.valueOf() // 3.14

  const d2 = new Decimal([1, 2, 3])
  d2.valueOf() // 3
  ```

- object

  If the parameter is an object, it will be converted to a number using the `Number()` function. If it cannot be converted, the value will be 0:

  ```js
  const d1 = new Decimal({})
  d1.valueOf() // 0

  const d2 = new Decimal({ valueOf: () => 5 })
  d2.valueOf() // 5
  ```

- date

  When the parameter is a Date object, it is converted to a number (i.e., `+new Date()`):

  ```js
  const d = new Decimal(new Date())
  d.valueOf() // 1725979300532
  ```

- Decimal

  The parameter can be another Decimal instance, and its value will be used:

  ```js
  const d = new Decimal(new Decimal(2.5))
  d.valueOf() // 2.5
  ```

- other types

  If the parameter is undefined, null, or any type not listed above, an error will be thrown:

  ```js
  const d = new Decimal(null)
  // TypeError: [algebra.js] Invalid Argument.
  ```

## Instance Properties

::: danger WARNING
Warning Decimal instances are non-extensible. Any attempts to add, remove, or modify properties will result in an error.
:::

A Decimal instance has three properties: `val`, `int`, and `exp`:

```js
const d = new Decimal(3.14)
d // Decimal { val: 3.14, int: 314, exp: 2 }
```

### val

The `val` property holds the numeric value converted from the [parameter](#parameters):

```js
const d1 = new Decimal(6)
d1.val // 6

const d2 = new Decimal(2.5)
d1.val // 2.5
```

### int

The `int` property holds the integer part of the `val` property after removing the decimal point:

```js
const d1 = new Decimal(8)
d1.int // 8

const d2 = new Decimal(4.7)
d2.int // 47

const d3 = new Decimal(0.5)
d3.int // 5
```

### exp

The `exp` property is of numeric type. When the `val` property is an integer, the `exp` property is 0; when the `val` property is a decimal, the exp property is the number of decimal places:

```js
const d1 = new Decimal(8)
d1.exp // 0

const d2 = new Decimal(2.5)
d2.exp // 1

const d3 = new Decimal(0.05)
d3.exp // 2
```

## Instance Methods

### valueOf

**`valueOf()`**

This method returns the numeric form of the Decimal instance, which is the same as the object's `val` value. It is called by default when the object is automatically converted to a numeric value.

```js
const d = new Decimal(3)
d.valueOf() // 3
1 + d.valueOf() // 4
1 + d // 4
```

::: warning
Try to avoid using Decimal instances in native JavaScript arithmetic operations, as it may lead to [inaccurate decimal precision](https://mopsite.github.io/posts/js-decimal).

```js
const d = new Decimal(3.14)
1 + d // 4.140000000000001
```

:::

### toString

**`toString()`**

This method returns the string representation of the Decimal instance by converting the [`val`](#val) property to a string. It is called by default when the object is automatically converted to a string.

```js
const d = new Decimal(3)
d.toString() // '3'
'a' + d.toString() // 'a3'
'a' + d // 'a3'
```

### isInteger

**`isInteger()`**

This method checks if the numeric value of the Decimal instance is an integer and returns a boolean.

```js
const d1 = new Decimal(2)
d1.isInteger() // true

const d2 = new Decimal(2.5)
d2.isInteger() // false
```

### isEven

**`isEven()`**

This method checks if the numeric value of the Decimal instance is an even number and returns a boolean.

```js
const d1 = new Decimal(4)
d1.isEven() // true

const d2 = new Decimal(5)
d2.isEven() // false
```

### isOdd

**`isOdd()`**

This method checks if the numeric value of the Decimal instance is an odd number and returns a boolean.

```js
const d1 = new Decimal(4)
d1.isOdd() // false

const d2 = new Decimal(5)
d2.isOdd() // true
```

::: warning
Odd and even numbers are integers. If the numeric value of the Decimal instance is not an integer, the result will be false.

```js
const d1 = new Decimal(4.4)
d1.isEven() // false

const d2 = new Decimal(5.5)
d2.isOdd() // false
```

:::

### eq

**`eq(arg)`**

This method accepts one argument, which must be one of the [allowed parameter types](#parameters) of the Decimal constructor.

It checks if the numeric value of the current instance equals the argument and returns a boolean.

```js
const d = new Decimal(8)
d.eq(8) // true
d.eq(6) // false
```

### gt

**`gt(arg)`**

Similar to the [`eq()`](#eq) method, this method checks if the numeric value of the current instance is greater than the argument.

```js
const d = new Decimal(8)
d.gt(6) // true
d.gt(9) // false
```

### gte

**`gte(arg)`**

Similar to the [`eq()`](#eq) method, this method checks if the numeric value of the current instance is greater than or equal to the argument.

```js
const d = new Decimal(8)
d.gte(6) // true
d.gte(8) // true
d.gte(9) // false
```

### lt

**`lt(arg)`**

Similar to the [`eq()`](#eq) method, this method checks if the numeric value of the current instance is less than the argument.

```js
const d = new Decimal(8)
d.lt(6) // false
d.lt(9) // true
```

### lte

**`lte(arg)`**

Similar to the [`eq()`](#eq) method, this method checks if the numeric value of the current instance is less than or equal to the argument.

```js
const d = new Decimal(8)
d.lte(6) // false
d.lte(8) // true
d.lte(9) // true
```

### add

**`add(arg = 0)`**

This method accepts one argument, which must be one of the [allowed parameter types](#parameters) of the Decimal constructor.

It adds the numeric value of the current instance to the argument and returns a new Decimal instance. The [`val`](#val) property of the returned instance is the sum of the two values.

```js
0.2 + 0.1 // 0.30000000000000004
const d = new Decimal(0.2)
d.add(0.1) // Decimal { val: 0.3, int: 3, exp: 1 }
// Fixed the decimal precision issue
d.add(0.1).valueOf() // 0.3
```

The default value for the argument is 0. If no argument is passed, the returned instance has the same value as the original instance (i.e., adding 0 to the value of the original instance):

```js
const d = new Decimal(5)
d.add().val // 5
```

### sub

**`sub(arg = 0)`**

This method is similar to [`add()`](#add), but it subtracts the numeric value of the argument from the current instance.

```js
2.88 - 1.12 // 1.7599999999999998
const d1 = new Decimal(2.88)
const d2 = new Decimal(1.12)
d1.sub(d2).val // 1.76
```

The default value for the argument is 0.

### mul

**`mul(arg = 1)`**

This method is similar to [`add()`](#add), but it multiplies the numeric value of the current instance by the argument.

```js
const d1 = new Decimal(8)
const d2 = new Decimal(4)
d1.mul(d2).val // 32
```

The default value for the argument is 1.

### div

**`div(arg = 1)`**

This method is similar to [`add()`](#add), but it divides the numeric value of the current instance by the argument.

```js
const d1 = new Decimal(8)
const d2 = new Decimal(4)
d1.div(d2).val // 2
```

The default value for the argument is 1.

::: danger
The argument cannot be 0; otherwise, an error will be thrown.

```js
Decimal.random().div(0) // TypeError: [algebra.js] Division by Zero.
```

:::

### abs

**`abs()`**

This method returns a new Decimal instance with the absolute value of the current instance's numeric value.

```js
const d1 = new Decimal(3)
d1.abs().val // 3
const d2 = new Decimal(-4)
d2.abs().val // 4
```

### neg

**`abs()`**

This method returns a new Decimal instance with the negated value of the current instance's numeric value.

```js
const d1 = new Decimal(3)
d1.neg().val // -3
const d2 = new Decimal(-4)
d2.neg().val // 4
```

### mod

**`mod(arg)`**

This method accepts one argument, which must be one of the [allowed parameter types](#parameters) of the Decimal constructor.

It returns a new Decimal instance with the remainder when dividing the current instance's numeric value by the argument.

```js
const d1 = new Decimal(5)
const d2 = new Decimal(3)
d1.mod(d2).val // 2
```

## Class Methods

### compare

**`compare(arg1, arg2)`**

This method accepts two arguments, which must be one of the [allowed parameter types](#parameters) of the Decimal constructor.

- If arg1 equals arg2, it returns 0.
- If arg1 is greater than arg2, it returns 1.
- If arg1 is less than arg2, it returns -1.

```js
Decimal.compare(6, 6) // 0
Decimal.compare(6, 5) // 1
Decimal.compare(6, 8) // -1
```

### gcd

**`gcd(...args)`**

This method accepts one or more arguments, which are converted to Decimal instances internally.

If only one argument is passed, it returns a new Decimal instance with the [`val`](#val) property equal to that argument's value.

```js
Decimal.gcd(6).val // 6
```

If two or more arguments are passed, it returns a new Decimal instance with the greatest common divisor of those values as the [`val`](#val) property.

```js
Decimal.gcd(6, 8).val // 2
```

### lcm

**`lcm(...args)`**

This method is similar to [`gcd()`](#gcd), but it returns the least common multiple.

```js
Decimal.lcm(6).val // 6
Decimal.lcm(4, 6).val // 12
```

### random

**`random(start = 0, end = 9, prec = 0)`**

This method returns a random Decimal instance.

It accepts three arguments: start and end define the range of values for the returned Decimal instance (inclusive), and prec defines the number of decimal places (0 means integer).

The default values return a random Decimal instance with an integer value between 0 and 9.

```js
Decimal.random().val // 7
Decimal.random(10, 20).val // 15
Decimal.random(0, 9, 2).val // 3.14
```

::: warning
These three parameters must all be integers; otherwise, an error will be thrown.

```js
Decimal.random(0.1, 9, 0) // TypeError: [algebra.js] Must be type of Integer.
```

:::

## Method Chaining

The methods that return a Decimal instance in the aforementioned approach can all be used in a chain call.

```js
import algebra from '@mop233/algebra'

const { Decimal } = algebra

Decimal.random().add(3).mul(2).neg().toString() // '-24'
```
