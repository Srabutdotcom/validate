export function validate(value, validTypes, validValues) {
   if (arguments.length == 0) throw TypeError('Expected 1 parameter but nothing')
   if (arguments.length == 1) return true // value can be any type
   if (arguments.length == 2) {
      if((validTypes instanceof Array)==false) throw TypeError('Parameter 2 must be Array');
      if (validTypes.length == 0) return true;
      // loop over validtypes
      const isValidType = validTypes.some(e => {
         const typeOf = typeof (e);
         if (typeOf == 'function') return value instanceof e;
         if ((typeOf == 'object') && (typeof (value) == 'object')) {
            if ((e === null) || (value === null)) return value === e;
            return handleObject(value, e)
         } else {
            return typeof (value) === e
         }
      })
      if (isValidType == false) {
         throw TypeError(`Unexpected type of value`)
      }
   }

   if ((arguments.length == 2) && validValues && (validValues.includes(value) == false)) {
      throw TypeError(`Value is out of range, valid value should be within ${validValues.join(', ')}`)
   }

   return true;
}

function handleObject(value, object) {
   const valueEntries = Object.entries(value);
   const objectEntries = Object.entries(object);

   if ((objectEntries.length == 0) && (valueEntries.length == 0)) return true;
   if (objectEntries.length !== valueEntries.length) return false

   return valueEntries.every((e, i) => {
      const [keyInValue, valueInValue] = e;
      const [keyInObject, valueInObject] = objectEntries[i];
      return (keyInValue === keyInObject) && (typeof (valueInValue) === typeof (valueInObject))
   })
}

//`esbuild ./index.js --bundle --minify --format=esm --target=es2022 --outfile=../dist/validate.js`