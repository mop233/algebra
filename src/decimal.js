import { INVALID_ARG, MUST_BE_INT, DIV_BY_ZERO } from './errors'
import { random, toNum } from './helpers'

class Decimal {
  constructor(arg) {
    let str = String(toNum(arg))
    this.val = +str
    this.int = +str.replace('.', '')
    this.exp = str.indexOf('.') < 0 ? 0 : str.split('.')[1].length
    Object.freeze(this)
  }

  static compare(arg1, arg2) {
    let d1 = new this(arg1)
    let d2 = new this(arg2)
    let e = d1.exp > d2.exp ? d1.exp : d2.exp
    let p1 = +d1.mul(10 ** e)
    let p2 = +d2.mul(10 ** e)
    if (p1 > p2) {
      return 1
    } else if (p1 < p2) {
      return -1
    } else {
      return 0
    }
  }

  static gcd(...args) {
    let dArr = args.map(arg => new this(arg))
    const g = (a, b) => (b.eq(0) ? a.abs() : g(b, a.mod(b)))
    try {
      return dArr.reduce((prev, next) => g(prev, next))
    } catch (error) {
      throw new TypeError(INVALID_ARG)
    }
  }

  static lcm(...args) {
    let dArr = args.map(arg => new this(arg))
    const l = (a, b) =>
      a.eq(0) && b.eq(0) ? 0 : a.mul(b).div(this.gcd(a, b)).abs()
    try {
      return dArr.reduce((prev, next) => l(prev, next))
    } catch (error) {
      throw new TypeError(INVALID_ARG)
    }
  }

  static random(start = 0, end = 9, prec = 0) {
    let s = new this(start)
    let e = new this(end)
    let p = new this(prec)
    if (s.isInteger() && e.isInteger() && p.isInteger()) {
      let min = s.lt(e) ? s : e
      let max = s.gt(e) ? s : e
      let intPart = random(+min, +max)
      let decPart = '.'
      for (let i = 0; i < +p.sub(1); i++) {
        decPart += random(0, 9)
      }
      decPart += random(1, 9)
      let result = p.gt(0) ? new this(intPart + decPart) : new this(intPart)
      if (result.lt(min) && !min.eq(max)) return result.add(1)
      if (result.gt(max) && !min.eq(max)) return result.sub(1)
      return result
    }
    throw new TypeError(MUST_BE_INT)
  }

  valueOf() {
    return this.val
  }

  toString() {
    return String(this.val)
  }

  #instance(arg) {
    return new Decimal(arg)
  }

  isInteger() {
    return Number.isInteger(+this)
  }

  isEven() {
    return this.isInteger() && +this % 2 === 0
  }

  isOdd() {
    return this.isInteger() && +this % 2 !== 0
  }

  eq(arg) {
    return this.constructor.compare(this, arg) === 0
  }

  gt(arg) {
    return this.constructor.compare(this, arg) > 0
  }

  gte(arg) {
    return this.constructor.compare(this, arg) >= 0
  }

  lt(arg) {
    return this.constructor.compare(this, arg) < 0
  }

  lte(arg) {
    return this.constructor.compare(this, arg) <= 0
  }

  add(arg = 0) {
    let d = this.#instance(arg)
    let e1 = this.exp
    let e2 = d.exp
    return this.#instance(
      (this.int * 10 ** e2 + d.int * 10 ** e1) / 10 ** (e1 + e2)
    )
  }

  sub(arg = 0) {
    let d = this.#instance(arg)
    return this.add(d.neg())
  }

  mul(arg = 1) {
    let d = this.#instance(arg)
    let e = this.exp + d.exp
    return this.#instance((this.int * d.int) / 10 ** e)
  }

  div(arg = 1) {
    let d = this.#instance(arg)
    if (d.eq(0)) throw new TypeError(DIV_BY_ZERO)
    let e = d.exp - this.exp
    return this.#instance(this.int / d.int).mul(10 ** e)
  }

  abs() {
    return this.#instance(Math.abs(+this))
  }

  neg() {
    return this.mul(-1)
  }

  mod(arg) {
    let d = this.#instance(arg)
    if (d.eq(0)) return this.#instance(this)
    let e = this.exp > d.exp ? this.exp : d.exp
    return this.#instance((+this.mul(10 ** e) % +d.mul(10 ** e)) / 10 ** e)
  }
}

export default Object.freeze(Decimal)
