const Discord = require("discord.js");
const moment = require("moment");
const DBL = require("dblapi.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if(!message.author.id === '687254300019261450') return message.channel.send("T'es un développeur du bot ? Non ? Donc tu peut pas :)")
  
    const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
try {
    const messageArray = message.content.split(" ");
    const args = messageArray.slice(1);
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
  evaled = require("util").inspect(evaled);

    message.channel.send(`${clean(evaled)}`, {code:"xl"});
  } catch (err) {
    message.channel.send(`\`ERROR\`\n\`\`\`xl\n${clean(err)}\n\`\`\``);

}
}

module.exports.help = {
    name: "eval",
    aliases: "e"
}