# Fraction

## Constructor

The Fraction constructor is used to create a fraction object.

This constructor takes two parameters: `new Fraction(numer, denom)`, which are the numerator (`numer`) and denominator (`denom`). They must be of any [parameter type](./decimal#parameters) allowed by the Decimal constructor.

At least one parameter, the numerator, is required. If no denominator is provided, it defaults to 1.

```js
new Fraction() // TypeError: [algebra.js] Invalid Argument.
// Denominator cannot be 0, otherwise an error occurs
new Fraction(1, 0) // TypeError: [algebra.js] Division by Zero.
new Fraction(1, 2).toString() // '1/2'
new Fraction(3).toString() // '3'
```

Note that if the numerator is 0, the denominator will automatically be set to 1 regardless of the value passed.

```js
new Fraction(0, 5)
/*
Fraction {
  numer: Decimal { val: 0, int: 0, exp: 0 },
  denom: Decimal { val: 1, int: 1, exp: 0 }
}
*/
```

## Instance Properties

::: danger WARNING
Fraction instances are non-extensible objects. Adding, removing, or modifying properties of these objects is not allowed.
:::

Fraction instances have two properties: `numer` and `denom`, which represent the numerator and denominator, respectively, and are both instances of [Decimal](./decimal).

```js
new Fraction(1, 2)
/*
Fraction {
  numer: Decimal { val: 1, int: 1, exp: 0 },
  denom: Decimal { val: 2, int: 2, exp: 0 }
}
*/
```

## Instance Methods

### valueOf

**`valueOf()`**

This method returns the numerical value of the Fraction instance, which is internally computed as `numer.div(denom).val`. This method is automatically called when the object needs to be converted to a number.

```js
const f = new Fraction(1, 2)
f.valueOf() // 0.5
1 + f // 1.5
```

::: warning
Avoid using Fraction instances in JavaScript’s native arithmetic operations, as it may result in [inaccurate decimal precision](<(https://mopsite.github.io/posts/js-decimal)>).

```js
const f = new Decimal(1, 5)
0.1 + f // 0.30000000000000004
```

:::

### toString

**`toString()`**

This method returns the string representation of the Fraction instance. It is automatically called when the object needs to be converted to a string.

Note: When the numerator is 0 or the denominator is 1, the result is a whole number in string form.

```js
new Fraction(1, 2).toString() // '1/2'
new Fraction(6, 3).toString() // '6/3'
new Fraction(0, 3).toString() // '0'
new Fraction(8, 1).toString() // '8'
```

### toTex

**`toTex()`**

Similar to the [`toString()`](#tostring) method, this returns the string representation in $\LaTeX$ format.

```js
new Fraction(1, 2).toTex() // '\frac{1}{2}'
new Fraction(6, 3).toTex() // '\frac{6}{3}'
new Fraction(0, 3).toTex() // '0'
new Fraction(8, 1).toTex() // '8'
```

In environments supporting $\LaTeX$ (like this site), it can be rendered as $\frac{1}{2}$.

### isInteger

**`isInteger()`**

This method is used to check whether the fraction instance represents an integer.

```js
new Fraction(1, 2).isInteger() // false
new Fraction(6, 3).isInteger() // true
new Fraction(0, 3).isInteger() // true
new Fraction(8, 1).isInteger() // true
```

### eq

**`eq(arg)`**

This method is used to compare whether the value of the current Fraction instance is equal to the parameter and returns a boolean.

It accepts one parameter. If the parameter is a Fraction object, it will directly compare the values of the two Fraction objects. Otherwise, the parameter will be automatically converted to a Fraction object.

```js
new Fraction(1, 2).eq(new Fraction(1, 2)) // true
new Fraction(1, 2).eq(new Fraction(2, 3)) // false
new Fraction(1, 2).eq(4) // false
```

### gt

**`gt(arg)`**

This method works similarly to [`eq()`](#eq), but is used to determine if the value of the current instance is greater than the value of the argument.

```js
new Fraction(8, 2).gt(4) // false
new Fraction(8, 2).gt(new Fraction(3, 4)) // true
```

### gte

**`gte(arg)`**

This method works similarly to [`eq()`](#eq), but is used to determine if the value of the current instance is greater than or equal to the value of the argument.

```js
new Fraction(8, 2).gte(4) // true
new Fraction(8, 2).gte(new Fraction(3, 4)) // true
```

### lt

**`lt(arg)`**

This method works similarly to [`eq()`](#eq), but is used to determine if the value of the current instance is less than the value of the argument.

```js
new Fraction(8, 2).lt(4) // false
new Fraction(8, 2).lt(new Fraction(5)) // true
```

### lte

**`lte(arg)`**

This method works similarly to [`eq()`](#eq), but is used to determine if the value of the current instance is less than or equal to the value of the argument.

```js
new Fraction(8, 2).lte(4) // true
new Fraction(8, 2).lte(new Fraction(5)) // true
```

### reduce

**`reduce()`**

This method is used to reduce the current instance and return a new object with the reduced fraction.

```js
new Fraction(2, 8).reduce().toString() // '1/4'
new Fraction(10, 15).reduce().toString() // '2/3'
```

### add

**`add(arg = 0, simplify = false)`**

This method is used to add the value of the argument to the current instance and return a new Fraction object, where the numerator and denominator correspond to the added result.

It accepts two parameters:

- The first argument, if not of Fraction type, will automatically be converted into a Fraction object. This argument defaults to 0, meaning it returns the original fraction (but not the original object).
- The second argument must be a boolean, indicating whether to simplify (reduce) the result. It defaults to false, meaning no simplification.

```js
const f1 = new Fraction(3, 8)
const f2 = new Fraction(1, 8)
f1.add(f2).toString() // '4/8'
f1.add(f2, true).toString() // '1/2'
```

### sub

**`sub(arg = 0, simplify = false)`**

This method works similarly to [`add()`](#add), but is used to subtract the value of the argument from the current instance.

```js
const f1 = new Fraction(3, 8)
const f2 = new Fraction(1, 8)
f1.sub(f2).toString() // '2/8'
f1.sub(f2, true).toString() // '1/4'
```

### mul

**`mul(arg = 1, simplify = false)`**

This method works similarly to [`add()`](#add), but is used to multiply the current instance by the value of the argument.

```js
const f1 = new Fraction(4, 8)
const f2 = new Fraction(4, 8)
f1.mul(f2).toString() // '16/64'
f1.mul(f2, true).toString() // '1/4'
```

### div

**`div(arg = 1, simplify = false)`**

This method works similarly to [`add()`](#add), but is used to divide the current instance by the value of the argument.

```js
const f1 = new Fraction(1, 4)
const f2 = new Fraction(1, 2)
f1.div(f2).toString() // '2/4'
f1.div(f2, true).toString() // '1/2'
```

::: danger
The first argument cannot be zero, or it will throw an error.

```js
Fraction.random().div(0) // TypeError: [algebra.js] Division by Zero.
```

:::

### abs

**`abs()`**

This method returns a Fraction instance where the value is the absolute value of the original object.

```js
new Fraction(3, 4).abs().toString() // '3/4'
new Fraction(-3, 4).abs().toString() // '3/4'
```

### neg

**`neg()`**

This method returns a Fraction instance where the value is the negative of the original object.

```js
new Fraction(3, 4).neg().toString() // '-3/4'
new Fraction(-3, 4).neg().toString() // '3/4'
```

### rec

**`rec()`**

This method returns a Fraction instance where the fraction is the reciprocal of the original fraction.

```js
new Fraction(3, 4).rec().toString() // '4/3'
```

## Class Methods

### compare

**`compare(arg1, arg2)`**

This method accepts two arguments. If they are not of Fraction type, they will be automatically converted into Fraction objects.

- If arg1 is equal to arg2, it returns 0.
- If arg1 is greater than arg2, it returns 1.
- If arg1 is less than arg2, it returns -1.

```js
const f1 = new Fraction(1, 2)
const f2 = new Fraction(1, 3)
Fraction.compare(f1, f2) // 1
```

### random

**`random(start1 = 0, end1 = 9, prec1 = 0, start2 = 1, end2 = 9, prec2 = 0)`**

This method returns a random fraction object.

The method accepts 6 parameters. The first three are passed to the [`Decimal.random()`](./decimal#random) method for the numerator, and the last three are passed for the denominator.

If no arguments are passed, it returns a Fraction instance where the numerator is a random number between 0 and 9, and the denominator is a random number between 1 and 9.

```js
Fraction.random().toString() // '4/7'
Fraction.random().toString() // '6/4'
```

## Method Chaining

The methods that return a Fraction instance in the aforementioned approach can all be used in a chain call.

```js
import algebra from '@mop233/algebra'

const { Fraction } = algebra

Fraction.random().mul(2).rec().toString() // '2/3'
```
