const request = require('request');
const geocode = (country, callback) =>{
const geocodeUrl = `http://api.mapbox.com/search/geocode/v6/forward?country=${country}&access_token=pk.eyJ1IjoiZW1hbm1haG1vdWQwIiwiYSI6ImNtMnluZHo4MDAybXoya3M0anh5ZXpnbWYifQ.YkPRl7tAdqJFRBuCOpzOBg`
request ({url : geocodeUrl , json : true} , (error , response) => {
    if (error){
        callback ("unable to connect geocode service" , undefined)
    }else if (response.body.message)  {
        callback (response.body.message , undefined )
    } else if (response.body.features.length == 0) {
        callback("Unable to find location" , undefined)
    } else {
        callback(undefined , {
            longitude : response.body.features[0].properties.coordinates.longitude,
            latitude : response.body.features[0].properties.coordinates.latitude
    })
    }
})
}
module.exports = geocode