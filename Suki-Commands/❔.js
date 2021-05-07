const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async(client, message, args) => {

    var step1embed = new Discord.MessageEmbed()
    .setTitle("**Pour accèder à la page d'aide de Suki, veuiller chosir votre préférence...**")
    .addField("• Channel `1`", "*recevoir la page d'aide dans ce salon*")
    .addField("• Message Privées `2`", "*recevoir la page d'aide dans vos messages privées (attention d'avoir activées les messages privées sur le serveur !)*")
    .addField("**Veuillez sélectionner**", "`1 ou 2...`")
    .setFooter(config.footer)
    .setTimestamp()
    message.channel.send(step1embed)

    message.channel.awaitMessages(response => response.content === '1', {
        max: 1,
        time: 15000,
        errors: ['time'],
        }).then((collected) => {
            var step2embed = new Discord.MessageEmbed()
            .setTitle("**Page d'aide de Suki**")
            .addField("*• Informations* `1`","`invite`")
            .setFooter(config.footer)
            .setTimestamp()
            message.channel.send(step2embed)
       });
    message.channel.awaitMessages(response => response.content === '2', {
        max: 1,
        time: 15000,
        errors: ['time'],
        }).then((collected) => {
            var step2embed = new Discord.MessageEmbed()
            .setTitle("**Page d'aide de Suki**")
            .addField("*• Informations* `1`","`invite`")
            .setFooter(config.footer)
            .setTimestamp()
            message.author.send(step2embed)
            message.channel.send("**La page d'aide a bien été envoyé !**")
        });
}
module.exports.help = {
    name: "help",
    aliases: "?"
}