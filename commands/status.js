const Discord = require('discord.js');
const config = require("../config.json");
const prefix = config.prefix

module.exports.run = async (client, message, args) => {
  if (message.author.id != "465662909645848577") return message.channel.send("You are not the bot owner!")
  
  if (args[0]) {
    message.delete();
    client.user.setStatus(args[0])
  } else {
    message.delete();
    client.user.setStatus('dnd')
  }
    
}

module.exports.config = {
    name: "status",
    noalias: "No aliases",
    aliases: [],
    usage: ".status",
    description: "Sets status.",
    accessibleby: "Bot Owner"
}