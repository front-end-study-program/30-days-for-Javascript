// Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let i = 0
while(i <= 10) {
  console.log(i);
  i++
}

let j = 0
do {
  console.log(j);
  j++
} while (j <= 10);

let a = 10
while(a > 0) {
  console.log(a);
  a--
}

let b = 10
do {
  console.log(b);
  b--
} while (b > 0);


for (let index = 0; index < 10; index++) {
  console.log(index);
}

let result = ''

for (let index = 0; index <= 6; index++) {
  const cur = '#'.repeat(index + 1)
  result += cur + '\n'
}

console.log(result);


let result1 = ''
for (let index = 0; index <= 10; index++) {
  result1 += `${index} x ${index} = ${index * index}\n`
}
console.log(result1);


let result2 = 'i i^2 i^3\n'
for (let index = 0; index < array.length; index++) {
  result2 += `${index} ${index^2} ${index^3}\n` 
}
console.log(result2);

for (let index = 0; index <= 100; index++) {
  if(index % 2 === 0) {
    console.log(index);
  }   
}

for (let index = 0; index <= 100; index++) {
  if(index % 2 !== 0) {
    console.log(index);
  }   
}


let total = 0
for (let index = 0; index <= 100; index++) {
  total += index
}
console.log(total);


const result3 = []
for (let index = 0; index <= 5; index++) {
  result3.push(Math.random())  
}

const result4 = []
while(result4.length < 5) {
  const randomNum = Math.random()
  if(!result4.includes(randomNum)) {
    result4.push(randomNum)
  }
}


const randomStr = 'dashgdjqwejkwbfdchdsfijekwqekkwqe242364t3274812093jnsds'
let ids = ''
for (let index = 0; index < 6; index++) {
  ids += randomStr[Math.floor(Math.random() * randomStr.length)]  
}
console.log(ids);

// Level 2
const getRanHex = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}

console.log(getRanHex(6));


function random_rgba() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
console.log(random_rgba());


for (let index = 0; index < countries.length; index++) {
  countries[index] = countries[index].toLocaleUpperCase()
}


for (let index = 0; index < countries.length; index++) {
  if (/land/i.test(countries[index])) {
    console.log(countries[index]);
  } else {
    console.log('All these countries are without land');
  }
}


for (let index = 0; index < countries.length; index++) {
  if (/ia$/i.test(countries[index])) {
    console.log(countries[index]);
  } else {
    console.log('These are countries ends without ia');
  }
}

let result5 = ''
for (let index = 0; index < countries.length; index++) {
  if(countries[index].length > result5.length) {
    result5 = countries[index]
  }
}


let result6 = []
for (let index = 0; index < countries.length; index++) {
  if(countries[index].length === 5) {
    result6.push(countries[index])
  }
}


let result7 = ''
for (let index = 0; index < webTechs.length; index++) {
  if(webTechs[index].length ===  result7.length) {
    result7 = webTechs[index]
  }
}


const result8 = []
for (let index = 0; index < webTechs.length; index++) {
  const cur = webTechs[index]
  result8.push([cur, cur.length])
}



for (const item of mernStack) {
  console.log(item);
}

const fruits = ['banana', 'orange', 'mango', 'lemon']
const result9 = []
for (let index = fruits.length; index > 0; index--) {
  result9.push(fruits[index])  
}

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (const items of fullStack) {
  for (const innerItem of items) {
    console.log(innerItem);
  }
}


