const Discord = require("discord.js");
const ms = require("ms")

module.exports.run = async(client, message,args) => {
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')}J, ${hrs.padStart(2, '0')}H, ${min.padStart(2, '0')}min , ${sec.padStart(2, '0')}s.`
    }
    message.channel.send(`**FudiciaRP est en ligne depuis ${duration(client.uptime)} !**`)
}
module.exports.help ={
    name: "uptime"
}