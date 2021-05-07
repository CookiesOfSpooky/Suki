const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new Discord.MessageEmbed()
    .setTitle("**Suki => Invitation**")
    .addField("*invite me!*","[Invite Suki](https://discord.com/oauth2/authorize?client_id=834046579387924521&scope=bot&permissions=8)")
    .addField("*support help!*","[Support Server](https://discord.gg/UnUNNZNX4G)")
    .setFooter(`● Suki ● Utilisateur: ${message.author.username}`)

    message.channel.send(embed)
}
module.exports.help = {
    name: "invite"
}