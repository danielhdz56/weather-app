const yargs = require('yargs');
const axios = require('axios');

const argv = yargs //customization to input from terminal
.options({ //options are the flags that we can have when we input
    a: { //the flag to use when running node
        demand: true, //this is required, you can't run without an -a flag
        alias: 'address', //another way to write the same flag, --address
        describe: 'Address to fetch weather for', //message for help
        string: true //this tells it to always parse the address as a string 
    }
})
.help() //built in help flag --help
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// equivalent to request, but accepts promises, which keeps code easier to maintain because we are not nesting as much (compared to callback method)
axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/b8df38ec04f30fa4a1ee07f2f7680aea/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, but it feels like ${apparentTemperature}`)
}).catch((e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    } else {
        console.log(`From throw: ${e.message}`);
    }
})

