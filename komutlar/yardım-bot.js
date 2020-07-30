const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const kategoriliyardım = new Discord.RichEmbed()
  .setTitle("KOMA | VIP")
  .setColor("BLUE") 
  .setDescription("Örnek komut kullanımı; `k!eğlence`\n Destek sunucumuza gelerek bize destek çıkabilirsiniz!")
  .addField("**<a:yildiz:732191082426794105>Yetkili Komutları<a:yildiz:732191082426794105>**", `${prefix}yetkili : Yetkili komutlarını gösterir.`)
  .addField("**<a:yildiz:732191082426794105>Eğlence Komutları<a:yildiz:732191082426794105>**", `${prefix}eğlence : Eğlence komutlarını gösterir.`)
  .addField("**<a:yildiz:732191082426794105>Kullanıcı Komutları<a:yildiz:732191082426794105>**", `${prefix}kullanıcı : Kullanıcı komutlarını gösterir.`)
  .addField("**:musical_note: Müzik Komutları :musical_note:**", `${prefix}müzik : Müzik komutlarını gösterir.`)
  .addField("**<:AyarPng:734786223020703744> Prefix Değiştirme <:AyarPng:734786223020703744>**", `${prefix}prefix-ayarla : Botun değiştirir..`)
  .setThumbnail("https://cdn.discordapp.com/avatars/651165646171930655/247e4fd2fe621b460836216bbb26fd14.png")
  .addField("Linkler", "[Destek Sunucusu!](https://discord.gg/cmW6pck) | [Davet Et!](https://discord.com/oauth2/authorize?client_id=651165646171930655&scope=bot&permissions=8)")
  .setTimestamp()
  .setFooter(message.author.tag + " Tarafından istendi", message.author.avatarURL);
  message.channel.send(kategoriliyardım);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'KOMA VIP Yardım',
  usage: 'yardım <kategori>'
};