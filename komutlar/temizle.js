const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  const juke = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**<:HashtagPng:734786232248172574> Eylem: **', 'Sohbet silme')
    .addField('**<:TamirPng:734786243556147260> Yetkili: **', message.author.username)
    .addField('**Sonuç: **', `<a:yesiltik:736615581771628594> Başarılı`)
    .setFooter(`${args[0]} Adet Mesaj Sildim`)
    message.channel.send(juke).catch().then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'süpür', 'temizle'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};