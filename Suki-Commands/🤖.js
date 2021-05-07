const Discord = require("discord.js")
const os = require('os');
const cpuStat = require("cpu-stat");
const moment = require("moment");
const config = require("../config.json");
 
 
module.exports.run = async(client, message, args) => {
 
    let { version } = require("discord.js");
 
    cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
 
        let début = Date.now();
        let embedStats = new Discord.MessageEmbed()
            .setTitle("__**Informations de Suki**__")
            .setColor("RANDOM")
            .addField("Créateur du bot :", config.author)
            .addField("RAM Utilisée ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("Serveurs   ", `${client.guilds.cache.size}   (Membres: ${message.guild.memberCount})`, true)
            .addField("Temps:", `${duration(client.uptime)}`, true)
            .addField("Discord.js ", `v${version}`, true)
            .addField("Node ", `${process.version}`, true)
            .addField("CPU ", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("Utilisation du CPU ", `\`${percent.toFixed(2)}%\``, true)
            .addField("Ping", `**${Date.now() - début}** ms`)
            .addField("Architecture", `\`${os.arch()}\``, true)
            .addField("Platforme", `\`\`${os.platform()}\`\``, true)
            .addField("Language de Dev du bot :", config.lan)
            .addField("Animé Préféré", config.anime)
            .setFooter(config.footer)
            .setTimestamp()
 
        message.channel.send(embedStats)
    })
 
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')}J, ${hrs.padStart(2, '0')}H, ${min.padStart(2, '0')}min , ${sec.padStart(2, '0')}s.`
    }
 
}
 
module.exports.help = {
    name: "bi"
}

//This command are copyrighted by S p o o k y !
// Please don't repost this command of your name
//Thank you, S p o o k y