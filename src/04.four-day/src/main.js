// Level 1
const yourAge = prompt('Enter your yourAge')
console.log(+yourAge > 18 ? 'You are old enough to drive.' : `You are left with ${18 - yourAge} years to drive.`);

const myAge = 30
if(myAge > yourAge) {
  console.log('me is older');
} else {
  console.log('your is older');
}

let a = 4
let b = 3
if(a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than b');
}
a > b ? 'a is greater than b' : 'a is less than b'


const num = prompt('Enter a number')
+num % 2 === 0 ? `${num} is an even number` : `${num} is is an odd number.`


// Level 2
const score = 100
if(score >= 90 && score <= 100) {
  console.log('A')
} else if(score >= 70 && score <= 89) {
  console.log('B');
} else if(score >= 60 && score <= 69) {
  console.log('C');
} else if(score >= 50 && score <= 59) {
  console.log('D');
} else {
  console.log('F');
}


const month = prompt('entry month')

if (month === '9' || month === '10' || month === '11') {
  console.log('Autumn');
} else if (month === '12' || month === '1' || month === '2') {
  console.log('Winter');
} else if (month === '3' || month === '4' || month === '5') {
  console.log('Spring');
} else if (month === '6' || month === '7' || month === '8') {
  console.log('Summer');
}

const today = new Date().getDay();
const todayMap = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
}
if(today === 6 || today === 7) {
  console.log(`${todayMap[today]} is a weekend`);
} else {
  console.log(`${todayMap[today]} is a working day.`);
}


// Level 3

const time = new Date()
time.setMonth(parseInt(month, 10) + 2)
time.setDate(0)
console.log(`${month} is ${time.getDate()} days`);
