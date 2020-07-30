const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime çay göndereceğimi yazmalısın.**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana çay gönderdi, bi teşekkür etmeyi unutma!**')
    .setImage(`https://media3.giphy.com/media/RIwnj1b1k1zT58SHqU/giphy.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çaygönder',
  description: 'İstediğiniz Kişiye nah çekersiniz.',
  usage: 'çaygönder'
};