const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    


    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail("https://media.discordapp.net/attachments/651606399796641808/730924648111276113/kompng.png?width=448&height=452")
        .addField('💻 API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('📶 Botun Pingi : ', Math.floor(botping) + 'ms')
        .setFooter(`KOMA VIP Gelişmiş Ping Sistemi`);

        
    return message.channel.send(pingembed);
        

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pong", "ping"],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};