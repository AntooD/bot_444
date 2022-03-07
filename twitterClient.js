const {TwitterApi} = require("twitter-api-v2")

const client = new TwitterApi({
    appKey:"XXXXXXXXXXXXXXXXXXXXXXXX",
    appSecret:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    accessToken:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    accessSecret:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
})


const rwClient = client.readWrite

module.exports = rwClient
