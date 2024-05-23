import { validate } from '../src/index.js'

console.log(`validate('abcd', ['string']) :`,validate('abcd', ['string']))// true;
console.log(`validate(null, ['object']) :`,validate(null, ['object']))// false
console.log(`validate([], [Array, Uint8Array]) :`,validate([], [Array, Uint8Array]))// true
console.log(`validate(true, [Array, Uint8Array, {}]) :`,validate(true, [Array, Uint8Array, {}]))// false
console.log(`validate(123, ['number', Uint8Array, {}]) :`,validate(123, ['number', Uint8Array, {}]))// true
console.log(`validate(123, ['number'], [123])) :`,validate(123, ['number'], [123])) // true
console.log(`validate(123, ['number'], [0])) :`,validate(123, ['number'], [0])) // false
console.log(`validate([1, 2, 3], [[1, 2, 3]])) :`,validate([1, 2, 3], [[1, 2, 3]])) // true
console.log(`validate({ a: 10 }, [{ b: 10 }])) :`,validate({ a: 10 }, [{ b: 10 }])) // false
console.log(`validate('n',['number','string'],['n',1])) :`,validate('n',['number','string'],['n',1])) // true
console.log(`validate('n',['number','string'],[1])) :`,validate('n',['number','string'],[1])) // false

