function a(e,n,r){if(arguments.length==0)throw TypeError("Expected 1 parameter but nothing");if(arguments.length==1)return!0;if(arguments.length==2){if(!(n instanceof Array))throw TypeError("Parameter 2 must be Array");if(n.length==0)return!0;if(n.some(t=>{let f=typeof t;return f=="function"?e instanceof t:f=="object"&&typeof e=="object"?t===null||e===null?e===t:l(e,t):typeof e===t})==!1)throw TypeError("Unexpected type of value")}if(arguments.length==2&&r&&r.includes(e)==!1)throw TypeError(`Value is out of range, valid value should be within ${r.join(", ")}`);return!0}function l(e,n){let r=Object.entries(e),o=Object.entries(n);return o.length==0&&r.length==0?!0:o.length!==r.length?!1:r.every((t,f)=>{let[i,u]=t,[s,c]=o[f];return i===s&&typeof u==typeof c})}export{a as validate};
