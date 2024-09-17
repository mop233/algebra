import { version } from './package.json'
import Decimal from './src/decimal'
import Fraction from './src/fraction'

const algebra = {
  version,
  Decimal,
  Fraction
}

export default Object.freeze(algebra)
