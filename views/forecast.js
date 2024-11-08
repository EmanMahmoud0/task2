const request = require('request');
const forecast = (latitude, longitude, callback) => {
const url = `http://api.weatherapi.com/v1/current.json?key=50666f910c364d1788481806240111&q=${latitude},${longitude}`
request({url, json: true}, (error,response) => {
    if (error) {
        callback(`THIS SITE CAN'T BE REACHED`, undefined)
    } else if (response.body.error) {
        callback(response.body.error.message , undefined)
    } else {
        callback(undefined, `${response.body.location.name} it is: ${response.body.current.condition.text} 
            and temp is: ${response.body.current.temp_c}`)
    }
})
}
module.exports = forecast;