import { version } from '../package.json'
import Decimal from './decimal'
import Fraction from './fraction'

const algebra = {
  version,
  Decimal,
  Fraction
}

export default Object.freeze(algebra)
