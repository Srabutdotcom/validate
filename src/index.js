export function validate(value, validTypes, validValues) {
   if (arguments.length == 0) return TypeError('Expected 1 parameter but nothing')
   if (arguments.length == 1) return true // value can be any type
   if (arguments.length == 2) {
      if((validTypes instanceof Array)==false) return TypeError('Parameter 2 must be Array')
      if (validTypes.length == 0) return true;
      // loop over validtypes
      const isValidType = validTypes.some(e => {
         const typeOf = typeof (e);
         if (typeOf == 'function') return value instanceof e;
         if ((typeOf == 'object') && (typeof (value) == 'object')) {
            if ((e === null) || (value === null)) return value === e;
            return handleObject(value, e)
         } 
         if(e=='integer') return Number.isInteger(value)
         return typeof (value) === e
      })
      if (isValidType == false) {
         return TypeError(`Unexpected type of value`)
      }
   }

   if ((arguments.length == 3) && validValues && (validValues.includes(value) == false)) {
      return TypeError(`Value is out of range, valid value should be within ${validValues.join(', ')}`)
   }

   return true;
}

function handleObject(value, object) {
   const valueEntries = Object.entries(value);
   const objectEntries = Object.entries(object);

   if ((objectEntries.length == 0) && (valueEntries.length == 0)) return true;

   return objectEntries.every((e, i) => {
      const [keyInObject, valueInObject] = e;
      const [keyInValue, valueInValue] = valueEntries[i];
      const validTypes = [];
      if(typeof(valueInObject)!=='object'){
         validTypes.push(typeof(valueInObject))
      } else if(valueInObject instanceof Object){
         validTypes.push(valueInObject)
      } else {
         validTypes.push(valueInObject.constructor)
      }

      const result =  (keyInValue === keyInObject) && (validate(valueInValue,validTypes) == true)
      if(result!==true) return false
      return true
   })
}

//`esbuild ./index.js --bundle --minify --format=esm --target=esnext --outfile=../dist/validate.js`