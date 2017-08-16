console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => { //Will run before the previous setTimeout but after finishing up
    console.log('Second setTimeout works');
}, 0);

console.log('Finishing up');