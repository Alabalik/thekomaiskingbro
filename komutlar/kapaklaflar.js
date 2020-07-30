exports.run = async (client, msg, args) => {
    let kapak=[
      "Yalanım yok ki benim, aklımdasın hala. Ne yapayım güzelim gereksiz şeyleri kafa hep takıyorum.",
      "Çok kaşar, az yaşar",
      "A101'de satılan 25 kuruşluk çikolatanın tadını bile veremeyen insanlar var. Öyle gereksizler... ",
      "Bizim ölüyle işimiz gömene kadardır aslanım.",
      "Bak,bir kuruşun olmasa da olur ama bir duruşun olsun aslanım.",
      "Benim adım ezanla başladı,selayla biter lan. Sana değil alayına gider.",
      "Biz ölmeyi çoktan göze aldık aslanım yanımızda kimi götürecez onu düşünüyoruz.",
      "Şuan kime ne olacağı belli değil ama  birazdan kime ne olduğu belli olacak aslanım.",
      "Jilet olmuş 75 kuruş artık adam harcamakta lükse girdi aslanım.",
      "Adamlığımızı sorgulamak sana mı kaldı lan pamuk şeker",
      "Gözümü boyamaya çalışma aslanım.Benim dünyam zaten rengarenk",
      "Sen çekici olabilirsin ama ben daha yolda kalmadım zalım karı",
      "Benim ortamım serttir ama merttir delikanlı.",
      "Muza basarsın ayağın kayar,damarıma basarsın hayatın kayar.",
      "Ama en azından hayattayız bu da bir şey...",
      "İstediğin gibi değilsek isteklerini değiştireceksin delikanlı.Ben değişmem.",
      "Sizin yere göğe sığdıramadıklarınızı ben bir mezara sığdırırım.",
      "Orda bir kişilik yer var ama o kişilik sende yok.",
      "Ruhsatımız olmasa da biz de tabancayız.",
      "Ölüm bir tenefus arası caz yapma aslanım sanada gelir sırası.",
      
      
      
      
  


    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Ya Kime Kapak Laf Soyluyecem?')
  }});
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${kapak[Math.floor(Math.random() * 16)]}.`)
    }})
    }
    
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
  exports.help = {
    name: 'kapaklaflar',
    description: 'Etiketlediniz Kisiye Kapak Laflar Soler.',
    usage: 'k!kapaklaflar'
   }