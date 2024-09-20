export default algebra

export namespace algebra {
  export const version: string

  export class Decimal {
    constructor(arg: any)

    readonly val: number
    readonly int: number
    readonly exp: number

    static compare(arg1: any, arg2: any): 0 | 1 | -1
    static gcd(...args: any[]): Decimal
    static lcm(...args: any[]): Decimal
    static random(start?: any, end?: any, prec?: any): Decimal

    valueOf(): number
    toString(): string

    isInteger(): boolean
    isEven(): boolean
    isOdd(): boolean

    eq(arg: any): boolean
    gt(arg: any): boolean
    gte(arg: any): boolean
    lt(arg: any): boolean
    lte(arg: any): boolean

    add(arg?: any): this
    sub(arg?: any): this
    mul(arg?: any): this
    div(arg?: any): this

    abs(): this
    neg(): this
    mod(arg: any): this
  }

  export class Fraction {
    constructor(numer: any, denom: any)

    readonly numer: Decimal
    readonly denom: Decimal

    static compare(arg1: any, arg2: any): 0 | 1 | -1
    static random(
      start1?: any,
      end1?: any,
      prec1?: any,
      start2?: any,
      end2?: any,
      prec2?: any
    ): Fraction

    valueOf(): number
    toString(): string
    toTex(): string

    isInteger(): boolean

    eq(arg: any): boolean
    gt(arg: any): boolean
    gte(arg: any): boolean
    lt(arg: any): boolean
    lte(arg: any): boolean

    reduce(): this
    add(arg?: any, simplify?: boolean): this
    sub(arg?: any, simplify?: boolean): this
    mul(arg?: any, simplify?: boolean): this
    div(arg?: any, simplify?: boolean): this

    abs(simplify?: boolean): this
    neg(simplify?: boolean): this
    rec(simplify?: boolean): this
  }
}
