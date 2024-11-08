const request = require('request');
const geocode =require("./views/geocode");
const forecast =require("./views/forecast");
const country = process.argv[2];

geocode( country , (error , data) => {
    if(error){console.log("ERROR : " , error)}
    else {console.log("DATA : "  , data)}
    forecast(data.latitude , data.longitude , (error , data) => {
        if(error){console.log("ERROR : " , error)}
        else {console.log("DATA : " , data)}
    })
})