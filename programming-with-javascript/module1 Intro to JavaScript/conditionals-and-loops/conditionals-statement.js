// if else

var result = 30;

if(result > 40) {
    console.log('Pass');
} else {
    console.log('Fail');
}


// if, else if, else

var place = 'first';

if(place == 'first') {
    console.log('Gold');
} else if(place == 'second') {
    console.log('Silver');
} else if(place == 'third') {
    console.log('Bronze');
} else {
    console.log('No medal');
}


// switch statement
var place = 'first';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
        break;
}