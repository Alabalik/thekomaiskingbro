const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.RichEmbed()
.setColor(`#CE2D0B`)
.setTimestamp()
.addField(`<a:yildiz:732191082426794105>Toplam Üye<a:yildiz:732191082426794105>`, `**${üyesayi}**`, true)
.addField(`<a:yildiz:732191082426794105>Kullanıcılar<a:yildiz:732191082426794105>`, `**${kullanıcılar}**`, true)
.addField(`<a:yildiz:732191082426794105>Botlar<a:yildiz:732191082426794105>`, `**${botlar}**`, true)
.addField(`<a:yildiz:732191082426794105>Üye Durumları<a:yildiz:732191082426794105>`, `**<:OnaylanmPng:734786238346952779>   ${message.guild.members.filter(o => o.presence.status === 'online').size} **Çevrimiçi\n**<:BeklemedePng:734786225176838174> ${message.guild.members.filter(i => i.presence.status === 'idle').size} **Boşta\n**<:ReddedilmiPng:734786239911428117> ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**<:KapatlmPng:734786235846885456> ${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
.setFooter(message.author.tag + " Tarafından istendi", message.author.avatarURL);
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};