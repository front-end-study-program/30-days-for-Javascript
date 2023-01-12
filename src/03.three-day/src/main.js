// Level 1
const firstName = 'first'
const lastName = 'last'
const country = 'China'
const city = 'Hangzhou'
const age = 18
const isMarried = false
const year1 = 1997
console.log('typeof data type', typeof city, typeof age, typeof isMarried)

console.log('10' === 10)
console.log(parseInt('9.8') === 10)

console.log(1 < 2, 2 < 3, 3 < 4);
console.log(2 < 1, 3 < 2, 4 < 3)

4 > 3 && console.log('4 > 3', 4 > 3)
4 >= 3 && console.log('4 >= 3', 4 >= 3)
4 < 3 && console.log('4 < 3', 4 < 3)
4 <= 3 && console.log('4 <= 3', 4 <= 3)
4 == 4 && console.log('4 == 4', 4 == 4)
4 === 4 && console.log('4 === 4', 4 === 4)
4 != 4 && console.log('4 != 4', 4 != 4)
4 !== 4 && console.log('4 !== 4', 4 !== 4)
4 != '4' && console.log("4 != '4'", 4 != '4')
4 == '4' && console.log("4 == '4'",4 == '4')
4 === '4' && console.log("4 === '4'", 4 === '4')
console.log('python str length', 'python'.length);

4 > 3 && 10 < 12 && console.log('4 > 3 && 10 < 12', 4 > 3 && 10 < 12)
4 > 3 && 10 > 12 && console.log('4 > 3 && 10 > 12', 4 > 3 && 10 > 12)
(4 > 3 || 10 < 12) && console.log('4 > 3 || 10 < 12', 4 > 3 || 10 < 12)
(4 > 3 || 10 > 12) && console.log('4 > 3 || 10 > 12', 4 > 3 || 10 > 12)
!(4 > 3) && console.log('!(4 > 3)', !(4 > 3))
!(4 < 3) && console.log('!(4 < 3)', !(4 < 3))
!(false) && console.log('!(false)', !(false))
!(4 > 3 && 10 < 12) && console.log('!(4 > 3 && 10 < 12)', !(4 > 3 && 10 < 12))
!(4 > 3 && 10 > 12) && console.log('!(4 > 3 && 10 > 12)', !(4 > 3 && 10 > 12))
!(4 === '4') && console.log("!(4 === '4')", !(4 === '4'))
!'dragon'.includes('on') && !'python'.includes('on') && console.log("There is no 'on' in both dragon and python");


const time = new Date()
const year = time.getFullYear()
const month = time.getMonth() + 1
const date = time.getDate()
const day = time.getDay()
const hours = time.getHours()
const minutes = time.getMinutes()
const seconds = time.getTime()


// Level 2
// const b = prompt('Enter base')
// const h = prompt('Enter height')
// console.log(`The area of the triangle is ${0.5 * b * h}`);


// const sideA = prompt('Enter side a')
// const sideB = prompt('Enter side b')
// const sideC = prompt('Enter side c')
// console.log(`The perimeter of the triangle is ${+sideA + +sideB + +sideC}`);


// const length = prompt('length')
// const width = prompt('width')
// console.log(`${2 * (+length + +width)} = 2 * ${length} + ${width}`);


// const radius = prompt('radius')
// console.log(`${2 * Math.PI * radius} = 2 * ${Math.PI} * ${radius}`);


// const first_name = prompt('name')
// console.log(first_name.length > 7 ? 'your name is long.' : 'your name is short.');


// const firstName1 = 'Asabeneh'
// const lastName1 = 'Yetayeh'
// console.log(firstName1.length > lastName1.length);


// let myAge = 250
// let yourAge = 25


// const year2 = prompt('Enter birth year')
// const curYear = new Date().getFullYear()
// console.log(curYear - +year2 > 18 ? `You are ${curYear - +year2}. You are old enough to drive` : `You are ${curYear - +year2}. You will be allowed to drive after 3 years.`);



// const year3 = prompt('Enter number of years you live')
// const curTime = new Date()
// const curYear1 = curTime.getFullYear()
// curTime.setFullYear(curYear1 + +year3)
// console.log(`You lived ${curTime.getTime()} seconds. ${curTime.getFullYear()}`)


const time1 = new Date()
const Y = time1.getFullYear()
const M = time1.getMonth() + 1
const D = time1.getDate()
const H = time1.getHours()
const m = time1.getMinutes()
console.log(`${Y}-${M}-${D} ${H}:${m}\n${D}-${M}-${Y} ${H}:${m}\n${D}/${M}/${Y} ${H}:${D}`);

// Level 3
console.log(`${Y}-${M}-${D} ${('' + H).padStart(2, '0')}:${('' + m).padStart(2, '0')}`);