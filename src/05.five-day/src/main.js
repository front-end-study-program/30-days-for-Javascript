// Level1
const emptyArr = []
const fiveArr = [1, 2, 3, 4, 5]
console.log('Find the length of fiveArr', fiveArr.length);
console.log('Get the first item, the middle item and the last item of the fiveArr', fiveArr[0], fiveArr[Math.ceil((fiveArr.length - 1) / 2)], fiveArr[fiveArr.length - 1]);

const mixedDataTypes = [{}, 1, '1', false, [], null, new Date()]
console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log('Print the array using console.log()', itCompanies);
console.log('Print the number of companies in the itCompanies', itCompanies.length);
console.log('Print the first company, middle and last company', itCompanies[0], itCompanies[Math.ceil((fiveArr.length - 1) / 2)], itCompanies[fiveArr.length - 1]);
itCompanies.map(item => console.log(item))
itCompanies.map(item => console.log(item.toLocaleUpperCase()))
console.log(itCompanies.join('、') + '都是大型IT公司');
const findCompany = itCompanies.find(item => item === 'Facebook')
console.log(findCompany || '未找到公司');
console.log(itCompanies.filter(item => item.includes('o')));

console.log(fiveArr.sort((a, b) => b - a));
console.log(itCompanies.reverse());
console.log(itCompanies.slice(-3));
console.log([...itCompanies.slice(0, Math.ceil((itCompanies.length - 1) / 2)), ...itCompanies.slice(Math.ceil((itCompanies.length - 1) / 2) + 1)]);
console.log(itCompanies.splice(0, 1));
console.log(itCompanies.splice(Math.ceil((itCompanies.length - 1) / 2), 1));
console.log(itCompanies.splice(itCompanies.length - 1, 1));
itCompanies = []


// Level 2
import { webTechs } from './countries'
import { countries } from './web_techs'

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/\.|,/g, '').split(' ')
console.log(words)
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
!shoppingCart.includes('Meat') && shoppingCart.unshift('Meat')
!shoppingCart.includes('Sugar') && shoppingCart.unshift('Sugar')
shoppingCart.pop()
const teaIdx = shoppingCart.findIndex('Tea')
teaIdx > -1 && (shoppingCart[teaIdx] = 'Green Tea')

countries.includes('Ethiopia') ? console.log('ETHIOPIA') : console.log(countries)
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a, b) => a - b)
console.log(ages[0], ages[ages.length - 1], ages[Math.ceil((ages.length - 1) / 2)]);
let total = 0
ages.reduce((prev, item) => total = prev + item, 0)
console.log(total / ages.length);

let one, two
if (countries.length % 2) {
  one = countries.slice(0, countries.length / 2)
  two = countries.slice(countries.length / 2)
} else {
  countries.unshift('China')
  one = countries.slice(0, countries.length / 2)
  two = countries.slice(countries.length / 2)
}
console.log(one, two);