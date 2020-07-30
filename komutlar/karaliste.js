const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
   const kl = require('quick.db')
          const i = await kl.fetch(`kara_${message.channel.id}`); // \
    if (i == 'kara') return message.reply("Malesef Sen Karalistedesin Ve Komutları Kullanamassın ")
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')

  db.set(`kara_${nesne}`, 'kara')

   message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Bu Kullanıcı Artık Kara Listede :white_check_mark: ").setColor("Dark"));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'karalist',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};