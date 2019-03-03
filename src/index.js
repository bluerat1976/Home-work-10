var age = 42;
console.log('my age is ', age);
console.log('type of age is ', typeof age);

var myname = 'Tania';
console.log('my name is ', myname);
console.log('type of myname is', typeof myname);

var married = false;
console.log('I am married ', married);
console.log('type of married ', typeof married);

var a;
console.log('a has value: ',a);
console.log('type of a is ', typeof a);

var b = null;
console.log('b has value: ', b);
console.log('type of b is ', typeof b);

var persone = {
    name: 'Tatiana',
    age: 42,
    married: false,
};
console.log('value of persone is ', persone);
console.log('type of persone is ', typeof persone);

var myArray = [12, 'cats', true];
console.log('myArray has value ',myArray);
console.log('type of myArray is ', typeof myArray);


var myAge = 42;
if (myAge >= 25) {
    console.log('I am over 25 years');
} else {
    console.log('I am under 25');
}

var myage = 42;
var result = (myage >= 25) ? 'I am over 25' : 'I am under 25';
console.log(result);