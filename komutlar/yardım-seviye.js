const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('k!seviye','Seviyenizi gösterir.')
.addField('k!seviye resim','Seviye Kartınızın Resmini Değiştirir')
.addField('k!seviye renk','Seviye Kartınızın Rengini Değiştirir')
.setFooter('KOMA | VIP Seviye Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};