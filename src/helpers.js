import Decimal from './decimal'
import { INVALID_ARG } from './errors'

export const type = o => o?.constructor.name.toLowerCase()

export const toNum = arg => {
  let t = type(arg)
  if (t === 'number') {
    return isNaN(arg) ? 0 : arg
  } else if (t === 'string') {
    return isNaN(parseFloat(arg)) ? arg.length : parseFloat(arg)
  } else if (t === 'boolean') {
    return +arg
  } else if (t === 'array') {
    return isNaN(+arg) ? arg.length : +arg
  } else if (t === 'object') {
    return isNaN(+arg) ? 0 : +arg
  } else if (t === 'date') {
    return +arg
  } else if (arg instanceof Decimal) {
    return +arg
  }
  throw new TypeError(INVALID_ARG)
}

export const random = (num1, num2) => {
  let min = num1 < num2 ? num1 : num2
  let max = num1 > num2 ? num1 : num2
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  )
}
