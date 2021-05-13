const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let canal = message.member.voice.channel

    if (!canal) return message.channel.send(`**<:em_facher:840322568761114634> ${message.author.username}** | *Vous n'êtes pas dans un salon vocal !*`) //You can modify this line

    canal.leave();
    message.channel.send(`**<:em_content:840322390949101588> ${message.author.username}** | *J'ai bien été déconnecté du salon !`) //You can modify this line
}
module.exports.help = {
    name: "stop"
}

// S u k i 