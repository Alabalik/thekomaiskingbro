const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/avatars/651165646171930655/b8513db0611967f768a5071406806da0.png?size=2048")
    .addField(':tools: **Sahibim: **', '<@407151247733293057> <@730103401320546395>')
    .addField(':gear:  **Geliştiricim: **','<@730103401320546395> <@407151247733293057> ')
    .setFooter(`Komutu kullanan (${message.author.username})`)
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekibimiz'],
  permLevel: 0
};

exports.help = {
  name: 'ekibimiz',
  description: 'Ekibimizin tamamını gösterir.',
  usage: 'ekibimiz'
};




