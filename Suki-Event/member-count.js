module.exports = client => {
    const channelId = '698242214072942692'
  
    const updateMembers = guild => {
      const channel = guild.channels.cache.get(channelId)
      channel.setName(`🍪┃Members: ${guild.memberCount}`)
      // 500 -> 500
      // 1300 -> 13,00
    }
    client.on('guildMemberAdd', member => updateMembers(member.guild))
    client.on('guildMemberRemove', member => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('698239250545770577')
    updateMembers(guild)
  }