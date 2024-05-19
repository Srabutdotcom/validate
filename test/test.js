import { validate } from '../src/index.js'

validate('abcd', ['string'])// true;
validate(null, ['object'])// false
validate([], [Array, Uint8Array])// true
validate(true, [Array, Uint8Array, {}])// false
validate(123, ['number', Uint8Array, {}])// true
validate(123, ['number'], [123]) // true
validate(123, ['number'], [0]) // false
validate([1, 2, 3], [[1, 2, 3]]) // true
validate({ a: 10 }, [{ b: 10 }]) // false

