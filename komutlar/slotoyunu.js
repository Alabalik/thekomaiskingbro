const Discord = require('discord.js');
exports.run = async (client, message, args) => {
if(!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('Mesaj Gönderme iznim yok. Lütfen görevim için mesaj gönderme özelliğini etkinleştirin!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("Kazandın reis şansın yaver gidiyor!", aicon)
            .setTitle(':slot_machine: Slot Makinesi :slot_machine:')
            .addField('Sonuç:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('Kaybettin dostum!', aicon)
            .setTitle(':slot_machine: Slot Makinesi :slot_machine:')
            .addField('Sonuç', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(embed);
    }

}


exports.conf = {
    aliases: []
};

exports.help = {
    name: 'slotoyna',
    description: 'Slot Makinesi',
    usage: 'slotoyna'
}