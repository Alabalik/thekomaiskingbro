const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  


message.channel.send(`KOMA Botun Sunucunuzu Böyle Koruması İçin YÖNETİCİ Yetkisi Olmalı Ve Sonrasında Kendiliğinden Saldırıları Önler.
`) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'antispam',
  description: 'sayaç', 
  usage: 'antispam'
};