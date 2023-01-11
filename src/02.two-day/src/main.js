// Level 1
const challenge = '30 Days Of JavaScript '
console.log(challenge)
console.log('length', challenge.length)
console.log('upperCase', challenge.toUpperCase())
console.log('lowerCase', challenge.toLowerCase())
console.log('first str', challenge.substring(0, 1))
console.log('replace', challenge.replace('30', ''))
console.log('includes Script', challenge.includes('Script'));
console.log('split array of space', challenge.split(' '));

const company = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log('split array of comma', company.split(','));

console.log('replace JavaScript to Python', challenge.replace('JavaScript', 'Python'))

console.log('charAt 15', challenge.charAt(15))

console.log('charCodeAt J', challenge.charCodeAt('J'))

console.log('indexOf a', challenge.indexOf('a'))

console.log('lastIndexOf', challenge.lastIndexOf('a'))

const str = 'You cannot end a sentence with because because because is a conjunction'
console.log('indexOf first because', str.indexOf('because'));
console.log('lastIndexOf last because', str.lastIndexOf('because'));
console.log('search first because', str.search(/because/));


console.log('trim', challenge.trim());
console.log('startsWith', challenge.startsWith('30'));
console.log('endsWith', challenge.endsWith('JavaScript '));
console.log('match a', challenge.match('a'));
console.log('concat', '30 Day of'.concat(' JavaScript'));
console.log('repeat challenge two', challenge.repeat(2));

// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
console.log('10' == 10);
console.log(parseFloat('9.8') === 10);
console.log('python'.includes('on'));
console.log('I hope this course is not full of jargon.'.indexOf('jargon') > -1);
console.log('include 0-100', Math.random() * 101);
console.log('include 50-100', Math.random() * 51 + 50);
console.log('include 0-255', Math.random() * 256);
const str1 = 'JavaScript'
console.log('random str1', str1[Math.floor(Math.random() * str1.length)]);
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
const str3 = 'You cannot end a sentence with because because because is a conjunction'
console.log('use substr remove because because because.', str3.substr(0, 31) + str3.substr(55));


// Level 3
const loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log('loveStr love Count.', loveStr.match(/love|Love/g).length);

const becauseStr = 'You cannot end a sentence with because because because is a conjunction'
console.log('becauseStr because Count', becauseStr.match(/because/g).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log('clean character code', sentence.replace(/%|\$|@|&|#|!|\?|;/g, ''));

const numberStr = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log('total num', numberStr.match(/[0-9]+/g).reduce((prev, item) => prev + +item, 0));