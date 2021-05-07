const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json")



client.login(config.token);

client.commands = new Discord.Collection();

fs.readdir("./Suki-Commands/", (error, f) => {
    if(error) return console.log(error);
    console.log(`${f.length} Commmande reçu ( ${f} )`);

    f.forEach((f) => {
        const commande = require(`./Suki-Commands/${f}`);
        const yukicomms= f.split(".")[0];

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Suki-Event/", (error, f) => {
    if(error) return console.log(error);
    console.log(`${f.length} events en chargement !`);

    f.forEach((f) => {
        const events = require(`./Suki-Event/${f}`);
        const event = f.split(".")[0];

        client.on(event,events.bind(null, client))
    });
});

client.on('ready', () => {
    console.log("Suki => Online")
})

client.on('message', message => { //this event is fired, whenever the bot sees a new message
    if (message.mentions.has(client.user)) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
       message.reply("**My prefix is 's-'.**            __`Soon`__ `you` `will` `modify` `my` `prefix` `for` `your` `server` !")
    }
 });

client.on("message", async message => {

    if(message.author.client) return;
    if(message.channel.type === "dm") return;
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }
})

const activities_list = [
    "Suki - By S p o o k y",
    "for help => s-invite",
    "for invite link and server link => s-invite",
    "Developped by S p o o k y"
]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});