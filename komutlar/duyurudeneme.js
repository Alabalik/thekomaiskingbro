const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
	let mesaj = args.slice(0).join(' ');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
		.setTitle("DUYURU")
		.setFooter("")
    .setDescription(`**<:MegafonPng:734786237491314688> ${mesaj}**`)
		console.log("k!duyuru komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuruyapke'],
  permLevel: 0
};

exports.help = {
  name: 'duyuruyapke',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuruyapke [Duyuruda Yazıcak Şey]'
};