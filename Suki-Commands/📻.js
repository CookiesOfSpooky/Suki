// Hello ! This is my command of radio (not play on youtube but a really radio). You can modify the radio on line 9 at Column 51 
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let canal = message.member.voice.channel
    if(!canal) return message.channel.send(":em_facher: **" + message.author.username + "**, vous devez être dans un salon vocal.") //You can modify this line for adapt on your Discord bot.
    
    canal.join().then(async connection => {
        const dispatcher = await connection.play('http://mcrscast1.mcr.iol.pt/comercial.mp3'); //There is the radio, you can modify him (*WARNING*: pick a radio on github or web but no in webside (YouTube, Spotify, ects or) or he will not fonctionned !)
      })                                          // there is the radio upside
}

module.exports.help = {
    name: "radio"
}; 

// Suki