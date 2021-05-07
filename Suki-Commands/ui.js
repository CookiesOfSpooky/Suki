const Discord = require('discord.js');
const moment = require("moment");



module.exports.run = async(client, message, args) => {

    const status = {
        online: "<:online:839926352546627604> En Ligne",
        idle: "<:afk:839926292640038942> Inactif/Afk",
        dnd: "<:dnd:839925895644577812> Ne Pas Déranger",
        offline: ":black_circle: Déconnecté/Invisible"
    };
   
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    

    if(member.user.id == message.guild.ownerID){
        acknowledgements = 'Fondateur';
    }

    if(member.user.id === "687254300019261450"){
        acknowledgements = 'Développeur Vérifié'
    }

    if(member.user.id !== "687254300019261450", message.guild.ownerID){
        acknowledgements = 'Aucun privilèges ne ont été détecté sur vous !'
    }

    if(member.user.id === "436887075401236491"){
        acknowledgements = 'Branleur certifié'
    }

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor(randomColor)
        .setFooter(`MisterLight • Utilisateur: ${member.user.username}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField("Status",`${status[member.user.presence.status]}`, true)
        .addField('Rejoint le: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Créer le: ",`${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField(`Rôles: [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        .addField("Privilèges: ", `${acknowledgements}`, true);
        
    message.channel.send({embed});

}

module.exports.help = {
    name: "test"
}