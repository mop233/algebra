import Decimal from './decimal'
import { DIV_BY_ZERO } from './errors'

class Fraction {
  constructor(numer, denom = 1) {
    this.numer = new Decimal(numer)
    this.denom = new Decimal(denom)
    if (this.denom.eq(0)) throw new TypeError(DIV_BY_ZERO)
    if (this.numer.eq(0)) this.denom = new Decimal(1)
    Object.freeze(this)
  }

  static compare(arg1 = new this(), arg2 = new this()) {
    if (!(arg1 instanceof this)) arg1 = new this(arg1)
    if (!(arg2 instanceof this)) arg2 = new this(arg2)
    let p1 = arg1.numer.mul(arg2.denom)
    let p2 = arg1.denom.mul(arg2.numer)
    if (p1.gt(p2)) {
      return 1
    } else if (p1.lt(p2)) {
      return -1
    } else {
      return 0
    }
  }

  static random(
    start1 = 0,
    end1 = 9,
    prec1 = 0,
    start2 = 1,
    end2 = 9,
    prec2 = 0
  ) {
    let numer, denom
    do {
      numer = Decimal.random(start1, end1, prec1)
      denom = Decimal.random(start2, end2, prec2)
    } while (denom.eq(0))
    return new this(numer, denom)
  }

  valueOf() {
    return +this.numer.div(this.denom)
  }

  toString() {
    if (this.numer.eq(0) || this.denom.eq(1)) return `${+this}`
    let n = this.numer.abs()
    let d = this.denom.abs()
    return +this > 0 ? `${n}/${d}` : `-${n}/${d}`
  }

  toTex() {
    if (this.numer.eq(0) || this.denom.eq(1)) return `${+this}`
    let n = this.numer.abs()
    let d = this.denom.abs()
    return +this > 0 ? `\\frac{${n}}{${d}}` : `-\\frac{${n}}{${d}}`
  }

  #instance(numer, denom) {
    return new Fraction(numer, denom)
  }

  isInteger() {
    return Number.isInteger(+this)
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

  reduce() {
    let g = Decimal.gcd(this.numer, this.denom)
    return this.#instance(this.numer.div(g), this.denom.div(g))
  }

  add(arg = this.#instance(0), simplify = false) {
    if (!(arg instanceof this.constructor)) arg = this.#instance(arg)
    let l = Decimal.lcm(this.denom, arg.denom)
    let q1 = l.div(this.denom)
    let q2 = l.div(arg.denom)
    let f = this.#instance(this.numer.mul(q1).add(arg.numer.mul(q2)), l)
    return simplify ? f.reduce() : f
  }

  sub(arg = this.#instance(0), simplify = false) {
    if (!(arg instanceof this.constructor)) arg = this.#instance(arg)
    return this.add(arg.neg(), simplify)
  }

  mul(arg = this.#instance(1), simplify = false) {
    if (!(arg instanceof this.constructor)) arg = this.#instance(arg)
    let f = this.#instance(this.numer.mul(arg.numer), this.denom.mul(arg.denom))
    return simplify ? f.reduce() : f
  }

  div(arg = this.#instance(1), simplify = false) {
    if (!(arg instanceof this.constructor)) arg = this.#instance(arg)
    return this.mul(arg.rec(), simplify)
  }

  abs(simplify = false) {
    let f = this.#instance(this.numer.abs(), this.denom.abs())
    return simplify ? f.reduce() : f
  }

  neg(simplify = false) {
    let f = this.#instance(this.numer.mul(-1), this.denom)
    return simplify ? f.reduce() : f
  }

  rec(simplify = false) {
    let f = this.#instance(this.denom, this.numer)
    return simplify ? f.reduce() : f
  }
}

export default Object.freeze(Fraction)
