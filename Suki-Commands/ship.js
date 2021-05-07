const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
        let user1 = args[0];
        let user2 = args.slice(1).join(' ');
        if (!user1) return message.channel.send("**Suki:** *veuillez sélectionner les deux joueurs.*")
        if (!user2) return message.channel.send("**Suki:** *veuillez sélectionner le dernier joueur.*")
        var ship = Math.floor(Math.random() * 100) + 1;
        if (ship === 0) {
                    const badmatch = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(`<@${user1}> + <@${user2}> =  **${ship}%**` || "*Vous n'avez aucune chance")
                    .setDescription(`:broken_heart: **${ship}%** :broken_heart:`);
                    message.channel.send(badmatch);
           } else if (ship <= 25) {
                const perfectmatch = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(`<@${user1}> + <@${user2}> ont une petite chances...`)
                    .setDescription(`:heart: ${ship} :heart:`);
                    message.channel.send(perfectmatch);
           } else if (ship <= 50) {
                const yeahembed = new Discord.MessageEmbed()
                .setColor(0x00A2E8)
                .setTitle(`<@${user1}> + <@${user2}> ont une chance !`)
                .setDescription(`:heart: ${ship} :heart:`);
                message.channel.send(yeahembed)
           } else if (ship <= 75) {
               const match = new Discord.MessageEmbed()
                .setColor(0x00A2E8)
                .setTitle(`<@${user1}> + <@${user2}> ont énormément de chances !`)
                .setDescription(`:heart: ${ship} :heart:`);
                message.channel.send(match);
            } else if (ship === 100) {
                const full = new Discord.MessageEmbed()
                .setColor(0x00A2E8)
                .setTitle(`<@${user1}> + <@${user2}> doivent ce marier`)
                .setDescription(`:heart: ${ship} :heart:`);
                message.channel.send(full)
            }
}
module.exports.help = {
    name: "ship"
}