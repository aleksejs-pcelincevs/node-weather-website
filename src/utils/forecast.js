const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/6e9ee879979cd7620487609a1b8551d0/' + lat + ',' + lon + '?units=si'

    request( { url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '. There is a ' + body.currently.precipProbability + '% chance of rain. Highest temperature ' + body.daily.data[0].temperatureHigh + '. Lowest temperature ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast