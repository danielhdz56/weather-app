# weather-app
## Description
* A weather application that lets you input an address to retrieve the weather.
* Address input values
   * zipcodes
   * street address
   * cities
   * states
   * countries
   * and more!
* NPM Packages used
   * fs
   * lodash
   * yargs
   * axios (app-promise.js)
   * request (app.js)
* API's used
   * google (maps)
   * darksky (weather)

## Setup 
1. Clone this repo using the command line
```shellSession
git clone https://github.com/danielhdz56/weather-app.git
```
![clone](/images/cloneRepo.png?raw=true "Clone")

2. Change directory and install packages using npm 
```shellSession
cd weather-app/
npm install
```
![npmInstall](/images/npmInstall.png?raw=true "Install")

## How to Use
### Help
Access help by using the `--help` or `-h` flag
```shellSession
node app-promise.js --help
```
![help](/images/help.png?raw=true "Help")

### Possible entries  

Address | `node app-promise.js -a '[inputAddressHere]'`
 :---: | :---:
Zipcode | `node app-promise.js -a 77067` ![zipcode](/images/zipcode.png?raw=true "Zipcode")
Street Address | `node app-promise.js -a '88 Colin P Kelly Jr St'` ![streetAddress](/images/streetAddress.png?raw=true "streetAddress")
City | `node app-promise.js -a 'houston'` ![city](/images/city.png?raw=true "City")
State | `node app-promise.js -a 'texas'` ![state](/images/state.png?raw=true "State")
Country | `node app-promise.js -a 'usa'` ![country](/images/country.png?raw=true "Country")
Etc. | `node app-promise.js -a 'common grounds'` ![etc](/images/etc.png?raw=true "Etc")

### app-promise.js vs app.js
* app-promise.js
   * ES6 Promises to chain asynchronous requests
   * Code is easier to maintain (not nesting a ton of callbacks to achieve the same result)
   * npm axios, promise based HTTP client
* app.js
   * Uses callbacks to chain asyncronous requests
   * Code is harder to maintain (a bunch of nested functions which results in heavy indentation)
   * npm request, simplified HTTP request client 

Both work, but app-promise.js is cleaner and easier to maintain