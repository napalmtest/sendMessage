module.exports = sendMessage = function (userID, message) {
    var post_data = {
        'to': userID,
        'messages': [{
                'type': 'text',
                'text': message
            }]
    };
    console.log('POST DATA: ' + post_data);
    var post_options = {
        uri: 'https://api.line.me/v2/bot/message/push',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + channelToken
        },
        body: post_data,
        json: true
    };
    function callback(error, response, body) {
        console.log('RESPONSE: ' + body);
        if (!error && response.statusCode == 200) {
        }
    }
    request(post_options, callback);
}