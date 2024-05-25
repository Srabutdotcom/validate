## README.md for validate.js

**validate.js** provides a utility function for validating arguments in JavaScript.

**Installation:**

This library is not intended for external installation. It's meant to be included directly in your project.

**Usage:**

The `validate.js` library exports a single function named `validate`.  This function takes three arguments:

1. **value (required):** The value to be validated.
2. **types (optional):** An array of valid types for the `value`.
3. **values (optional):** An array of valid values for the `value` (if applicable).

return { true | TypeError }

**Example:**

```javascript
import { validate } from 'https://deno.land/x/validatevalue/mod.js';
// to use source code use url https://deno.land/x/validatevalue/src/index.js

let isValid
// Validate a string value
const name = "John Doe";
isValid = validate(name, ["string"]); // return true

// Validate an integer within a range
const age = 25;
isValid = validate(age, ["number"], [18, 25, 30]); // return true

// Validate an object with specific properties
const user = { name: "Alice", age: 30 };
const userTypes = { name: "string", age: 10 };
isValid = validate(user, [userTypes]); // return true

//invalid value
isValid = validate(123, ["string"]); // return TypeError
```

**Function Behavior:**

- If no arguments are provided, the function return `TypeError` indicating that at least one argument (the value to validate) is required.
- If only the value is provided, the function simply returns `true`, assuming no type or value restrictions are specified.
- If the second argument (`types`) is provided:
    - It must be an array.
    - If the array is empty, all types are considered valid (no type checking).
    - If the array contains types, the function checks if the `value`'s type matches any of the specified types using `instanceof` for functions and deep object comparison for objects.
    - If a type mismatch occurs, the function return `TypeError` with a descriptive message.
- If the third argument (`validValues`) is provided:
    - It must be an array.
    - The function checks if the `value` exists within the `validValues` array using the `includes` method.
    - If the `value` is not found in the valid values list, the function return `TypeError` with a message indicating the expected valid values.

**Additional Notes:**

- This implementation performs basic type and value validation. For more complex validation scenarios, consider using dedicated validation libraries.
- The deep object comparison is a simplified approach. You might need to customize it for specific object validation needs.

**Contributing:**

This is a basic example. Feel free to modify and extend the functionality based on your specific requirements.
