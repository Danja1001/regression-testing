var fs = require('fs');
const { WebClient } = require('@slack/client');


const token = 'your-token';
const conversationId = 'your conversation id';


var files = fs.readdirSync('backstop_data/bitmaps_reference/');
var fileName = '';


const web = new WebClient(token);


web.chat.postMessage({
    channel: conversationId,
    text: 'Hey! New test frontend is here!',
    attachments: [
        {
            "color": "#36a64f",
            "author_name": "Alex & Danja",
            "title": "Test Front-End",
            "text": "Regression Automated Layout Testing.",
            "fields": [
                {
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }
            ],
        }
    ]
})
    .then((res) => {
        // `res` contains information about the posted message
        console.log('Message sent: ', res.ts);
    })
    .catch(console.error);


for(var i = 0; i < files.length; i++)
{
    fileName = 'backstop_data/bitmaps_reference/' + files[i];


    web.files.upload({
        fileName,
        file: fs.createReadStream(`${fileName}`),
        channels: conversationId,
        title: 'MusicWorld, main page test'
    })
        .then((res) => {
            console.log('File uploaded: ', res.file.id);
        })
        .catch(console.error);
}