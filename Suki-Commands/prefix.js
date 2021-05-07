const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("**Tu n'a pas la permission.**");
  if(!args[0] || args[0 == "help"]) return message.reply("Utilisation: **s-prefix <mettre le prefix>**");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.MessageEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}