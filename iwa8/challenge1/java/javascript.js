const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
  name: leoName, // use a colon to assign value to the property name
  balance: leoBalance,
  accessId: '47afb389-8014-4d0b-aff3-e40203d2107f', // removed the space and used camel case
  age: 24,
  address: { // create a nested address object
    number: leoNumber,
    street: leoStreet,
    'postal-code': leoPostal // wrap in quotes because of the hyphen
  }
}

const sarah = {
  name: sarahName + ' ' + sarahSurname, // concatenate the first and last name with a space
  age: 62,
  accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8', // added missing quotes
  balance: sarahBalance,
  address: { number: sarahNumber,street: sarahStreet,'postal-code': sarahPostal
  }
}

console.log(leo, leo.address['postal-code']) // corrected the object property access syntax
console.log(sarah, sarah.address['postal-code']) // corrected the object property access syntax
