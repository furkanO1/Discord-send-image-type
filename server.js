const Discord = require("discord.js");
const client = new Discord.Client();
client.login('PASTE YOUR APPLICATION TOKEN')

client.on('message', msg => {

  if (msg.attachments.size > 0) {
    var Attachment = (msg.attachments).array();
      console.log(Attachment[0].url);
      msg.channel.send(Attachment[0].url);

    var request = require('request');
    var url = Attachment[0].url;
    var magic = {
        jpg: 'ffd8ffe0',
        png: '89504e47',
        gif: '47494638'
    };
    var options = {
        method: 'GET',
        url: url,
        encoding: null 
    };

    request(options, function (err, response, body) {
        if(!err && response.statusCode == 200){
            var magigNumberInBody = body.toString('hex',0,4);
          if(magigNumberInBody == magic.jpg){
            msg.channel.send("jpg");
          }
          if(magigNumberInBody == magic.png){
            msg.channel.send("png");
          }
            if (magigNumberInBody == magic.gif) {
              msg.channel.send("gif")

            }
        }
    });
  }
})
