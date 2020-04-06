// Developer By Yuuutz , 16.10.2019 Started   , 2.11.2019 End
var Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
const shorten = require('isgd');
const moment = require("moment");
const qs = require('querystring');
const { CommandHandler } = require("djs-commands");
var approx = require('approximate-number');
const fetch = require('node-fetch');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const ytdl = require('ytdl-core');
const config = require("./config.json");
const CH = new CommandHandler({
  folder: __dirname + "/Commands/",
  prefix: config.prefix
  
});


//started

client.on("message", async (message) => {

  if(message.author.type === 'bot') return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;

  try{
      cmd.run(client,message,args)
  }catch(e){
      console.log(e)
  }

});

let info = client.emojis.get("663377773808844803") || "ℹ️" //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1

client.on("guildCreate", guild => {

    let channelID;
  let channels = guild.channels;
  channelLoop:
  for (let c of channels) {
      let channelType = c[1].type;
      if (channelType === "text") {
          channelID = c[0];
          break channelLoop;
      }
  }

  let channel = client.channels.get(guild.systemChannelID || channelID);

  let newserverEmbed = new RichEmbed()
  .setTitle(`${info}  Info`)
  .setDescription(`*nano*`)
  .setColor("#5DBCD2")
channel.send(newserverEmbed)
})























//owner contral panel


const devs = ["617035131416346626",""];

 
client.on('ready', () => {
  console.log(`Login Onilne `);
});

var data = JSON.parse(fs.readFileSync(`./data.json`, `UTF8`));
if (!prefix) {
  var prefix = data.prefix;
} else {
  prefix = data.prefix;
}
client.on(`message`, msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).split(` `);
  var command = `${args[0]}`;
  switch (command) {
    case `vip`:
      if (msg.author.id !== data.ownerID) return;
      var cmd = args[1];
      if (!cmd) return msg.reply(`**$vip** **| Move , setplay , setwt , setls , setname , setavatar , setstream , premium - اشتراك**`);
      switch (cmd) {
        case `move`:
          var guild = args[2];
          if (!guild) return msg.reply(`**لا يمكنني العثور على هذا سيرفر** \\:(`);
          if (isNaN(parseInt(guild)))
            return msg.reply(`**لا يمكنني العثور على هذا السيرفر** \\:(`);
          if (guild.length !== msg.guild.id.length)
            return msg.reply(`**لا يمكنني العثور على هذا السيرفر** \\:(`);
          msg.channel.send(
            `**أدعوني إلى سيرفر الجديد**: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&guild_id=${guild}&permissions=2146958847`
          );
          data.guildID = guild;
          break;
      }
      break;
  }
  fs.writeFileSync(`./data.json`, JSON.stringify(data, (null, 4)));
});
client.on(`guildCreate`, guild => {
  if (guild.id !== data.guildID) guild.leave();
  setTimeout(function Sweetie() {
    client.guilds.forEach(g => {
      if (g.id !== data.guildID) guild.leave();
    });
  }, 5000);
});

client.on(`ready`, () => {
  client.guilds.forEach(guild => {
    if (guild.id !== data.guildID) guild.leave();
  });
});

//owner
client.on("message", message => {
    var argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
      if (!prefix) {
        var prefix = data.prefix;
      } else {
        prefix = data.prefix;
      }
      if (!devs.includes(message.author.id)) return;
    if (message.content.startsWith(data.prefix + "setplay")) {
              client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark: تم تغير الحاله  ${argresult}**`);
    } else if (message.content === data.prefix + "dfghjkoiuytrewqqwertyuiuytresa") {
      message.guild.leave();
    } else if (message.content.startsWith(data.prefix + "setwt")) {
      client.user.setActivity(argresult, { type: "WATCHING" });
      message.channel.sendMessage(`**:white_check_mark:    تم تغير الحاله${argresult}**`);
    } else if (message.content.startsWith(data.prefix + "setls")) {
        
      client.user.setActivity(argresult, { type: "LISTENING" });
      message.channel.sendMessage(`**:white_check_mark: م تغير الحاله  ${argresult}**`);
    } else if (message.content.startsWith(data.prefix + "setname")) {
      client.user.setUsername(argresult).then;
      message.channel.sendMessage(`**${argresult}** : تم تغير الاسم البوت:>`);
    } else if (message.content.startsWith(data.prefix + "setavatar")) {
      client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else if (message.content.startsWith(data.prefix + "setstream")) {
      client.user.setGame(argresult, "https://www.twitch.tv/yuuutz");
      message.channel.sendMessage(`**:white_check_mark: تم تغير الحاله  ${argresult}**`);
    }
  });


 const smu = "2020/05/06";
  client.on("message", message => {
    var argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
      if (!prefix) {
        var prefix = data.prefix;
      } else {
        prefix = data.prefix;
      }
      if (!devs.includes(message.author.id)) return;
      if (message.content.startsWith(data.prefix + "premium") | message.content.startsWith(data.prefix + "اشتراك")) {
        message.delete();
        var start = moment()[2020, 04, 06];
    var end   = moment([2020, 05, 06]);
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('information About Your Premium')
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
       Today is : ** ${moment().format("dddd, MMMM YYYY")} **
       Your Plus Subscribe End in : ** ${smu} **  
       Registered in :  ** ${message.guild.name} **
       Time left :   ** ${moment("20200506", "YYYYMMDD",  true).fromNow()} ** `)
      .setFooter(`Developer By vPS Group`)
      .setTimestamp()

      message.channel.sendEmbed(embed)
    }
    }); 



    //voice online

let vojson = JSON.parse(fs.readFileSync('./vojson.json', 'utf8'))
    client.on('message', message => {
        if(message.content.startsWith(prefix + "setvc")) {
    let channel = message.content.split(" ").slice(1).join(" ")
    let channelfind = message.guild.channels.find('name', `${channel}`)
    if(!channel) return message.channel.send('الرجاء كتابة مثال اسم القناة الصوتية: -setVc <Channel name>')
    if(!channelfind) return message.channel.send('الرجاء كتابة مثال اسم القناة الصوتية: -setVc <Channel name>')
    vojson[message.guild.id] = {
    stats: 'enable',
    chid: channelfind.id,
    guild: message.guild.id
     
    }
    channelfind.setName(`VoiceOnline: ${message.guild.members.filter(m => m.voiceChannel).size}`)
    message.channel.send('**Done The Voice Online Is Turned on**')
    }
        if(message.content.startsWith(prefix + "vc off")) {
          message.guild.channels.find('id', `${vojson[message.guild.id].chid}`).delete()
        vojson[message.guild.id] = {
            stats: 'disable',
            chid: 'undefined',
            guild: message.guild.id
            }
            message.channel.send('**Done The Voice Online Is Turned Off**')
     
    }
    fs.writeFile("./vojson.json", JSON.stringify(vojson), (err) => {
        if (err) console.error(err)
      })
    })
     
    client.on('voiceStateUpdate', (oldMember , newMember) => {
                if(!vojson[oldMember.guild.id]) vojson[oldMember.guild.id] = {
                    stats: 'disable',
                    chid: 'undefined',
                    guild: 'undefined'
                }
                        if (vojson[oldMember.guild.id].stats === 'enable') {
                            let ch = vojson[oldMember.guild.id].chid
                            let channel = oldMember.guild.channels.get(ch)
                            let guildid = vojson[oldMember.guild.id].guild
                            channel.setName(`VoiceOnline: ${oldMember.guild.members.filter(m => m.voiceChannel).size}`)
                        };
                        if (vojson[oldMember.guild.id].stats === 'disable') {
                        return;
                        }
            });


 client.on("message", message => {
        if(message.content.startsWith(data.prefix + "vmute")) {
        var mnt = message.mentions.members.first();
        if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
        if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
        if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
        mnt.setMute(true).then(() => {
        message.channel.send(`تم كتم الصوت بنجاح ${mnt} :+1:`)
        }).catch(console.error);
        }
        if(message.content.startsWith(prefix + "unvmute")) {
        var mnt = message.mentions.members.first();
        if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
        if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
        if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
        mnt.setMute(false).then(() => {
        message.channel.send(`تم إلغاء الصوت بنجاح ${mnt} :+1:`)
        }).catch(console.error);
        }
        }); 


 client.on('message', message => {  
        if (message.author.bot) return; 
        if (message.content.startsWith(prefix + 'clear')) { 
        if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
         if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** ليس لديك نهايات!**`);
         if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**ليس لدي إذن!**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 300) return message.reply(`** لا يمكن أن يكون الرقم أكثر من **300** .**`).then(messages => messages.delete(5000))
        if(!messagecount) args = '300';
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
        message.channel.send(`**تم الحذف \`${msgs.size}\` الرسائل.**`).then(messages => messages.delete(5000));
        })
      }
    }); 
    


client.on('message', async message => {// البحث عن انفايت معين
    let messageArray = message.content.split(' ');
    let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "infoinv")) {
      if(!args) return message.reply('**حدد اسم دعوة**');
      message.guild.fetchInvites().then(i => {
        let inv = i.get(args[0]);
        if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
        var iNv = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField('# - صاحب الدعوة',inv.inviter,true)
        .addField('# - روم الدعوة',inv.channel,true)
        .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
        .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
        .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
        .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
        message.channel.send(iNv);
      });
    }
  });





let warning = JSON.parse(fs.readFileSync('./warning.json' , 'utf8'));
client.on('message',message=>{
if(message.author.bot || message.channel.type == "dm"||!message.channel.guild) return;
let prefix = '$';
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if(command == 'warn'){if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let T = warning[message.guild.id].warns;
let user = message.mentions.users.first();if(!user)return message.channel.send(`**:rolling_eyes: لا يمكنني العثور على هذا العضو**`)
let reason = message.content.split(" ").slice(2).join(" ");if(!reason) return message.channel.send(`**:rolling_eyes: يرجى تحديد سبب.**`)
let W = warning[message.guild.id].warns;
let ID = 0;let leng = 0;
W.forEach(w =>{ID++;
if(w.id !== undefined) leng++;
})
if(leng === 90) return message.channel.send(`** لا يمكنك إعطاء أكثر من \`90\` Warns**, يرجى إعادة تعيين قائمة التحذير.`)
T.push({user:user.id,by:message.author.id,reason:reason,time:moment(Date.now()).format('llll'),id:ID+1})
message.channel.send(`**✅ @${user.username} حذر!**`);
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
user.send(new Discord.RichEmbed().addField('**:warning: You were warned!**',reason)
.setFooter(message.guild.name,message.guild.iconURL).setTimestamp().setColor('#fffe62'));return;}
if(command == 'warnings') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let count = 0;let page = message.content.split(" ")[1];if(!page || isNaN(page)) page = 1;if(page > 4) return message.channel.send('**يتم تسجيل التحذيرات فقط على 4 صفحات!**')
let embed = new Discord.RichEmbed().setFooter(message.author.username,message.author.avatarURL)
let W = warning[message.guild.id].warns;
W.forEach(w =>{if(!w.id) return;count++;
if(page == 1) {if(count > 24) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`تحذير معرف (**${ID}**) - بواسطة <@${By}>
المستخدم: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 24) embed.addField('**:sparkles: مرة أخرى ?**',`${message.content.split(" ")[0]} 2`);
}if(page == 2) {if(count <= 24) return null;if(count > 45) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`تحذير معرف (**${ID}**) -واسطة <@${By}>
المستخدم: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 45) embed.addField('**:sparkles: مرة أخرى ?**',`${message.content.split(" ")[0]} 3`);
}if(page == 3) {if(count <= 45) return null;if(count > 69) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`تحذير معرف (**${ID}**) - واسطة <@${By}>
المستخدم: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 69) embed.addField('**:sparkles: مرة أخرى ?**',`${message.content.split(" ")[0]} 4`);
}if(page == 4) {if(count <= 69) return null;if(count > 92) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`تحذير معرف (**${ID}**) - واسطة  <@${By}>
المستخدم: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 64) embed.addField('**ممتلئ**',`** **`);}});
embed.setTitle(`**${count} تحذيرات** [ ${page}/4 ]`)
message.channel.send(embed)};
if(command == 'removewarn' || command == 'rm') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]};
let args = message.content.split(" ")[1];if(!args) return message.channel.send(
`**:rolling_eyes: يرجى تحديد رقم التحذير أو ذكر المستخدم أو (الكل) لحذف جميع التحذيرات.**`);
let user = message.mentions.members.first();
if(user) {
let C = 0;let a = warning[message.guild.id].warns
a.forEach(w=>{
if(w.user !== user.id) return
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
C++;
})
if(C === 0) return message.channel.send(`**:mag: لا يمكنني العثور على التحذير الذي تبحث عنه.**`)
return message.channel.send('**✅ '+C+' تمت إزالة التحذيرات.**');
};
if(args == 'all') {
let c = 0;let W = warning[message.guild.id].warns; 
W.forEach(w =>{if(w.id !== undefined) c++;})
warning[message.guild.id] = {warns:[]};
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
return message.channel.send('**✅ '+c+' warnings has been removed.**')
}if(isNaN(args)) return message.channel.send(
    `**:rolling_eyes: يرجى تحديد رقم التحذير أو ذكر المستخدم أو (الكل) لحذف جميع التحذيرات.**`);
let W = warning[message.guild.id].warns;
let find = false;
W.forEach(w =>{
if(w.id == args) {
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
find = true;return message.channel.send('**✅ تمت إزالة تحذيرات واحدةs.**')
}});if(find == false) return message.channel.send(`**:mag: لا يمكنني العثور على التحذير الذي تبحث عنه.**`)}});









client.on("message", msg => {
  if(msg.author.bot || !msg.guild) return;
  let [command, ...args] = msg.content.slice(prefix.length).split(/ +/g);
  if(command === "space") {
    if(args.shift() === "all") {
      let rooms = msg.guild.channels.filter(r=> r.name.includes("-") || r.name.includes("_"))
      rooms.forEach(r=> r.setName(r.name.replace(/-/g, " ").replace(/_/g, " ")))
       msg.channel.send("**فعلت أنا متباعدة "+rooms.size+" الرومات ...**")
      .catch(err=> msg.channel.send("لدي خطأ ، يرجى التحقق من permissons بلدي"))
    } 
    else if(msg.mentions.channels.firstUsage) {
      let room = msg.guild.channels.find(m=> m.name === msg.mentions.channels.first().name)
      room.setName(room.name.replace(/-/g, " ").replace(/_/g, " ")).then(sec=> msg.channel.send("**فعلت أنا متباعدة "+room+" ...**"))
      .catch(err=> msg.channel.send("لدي خطأ ، يرجى التحقق من permissons بلدي"))
    } 
    else msg.channel.send("**Usage: "+prefix+"space <all | mention channel>**")
  }
 
})

















client.on('guildCreate', guild => {
  let support = client.guilds.get('663377773808844803') // حط هنا ايدي سيرفر السبورت
  if(support === undefined) return
  let role = support.roles.find(r => r.name == 'Recipient :') // بدلها بأسم الرتبة يلي تبيها للمستخدمين
  let member = support.members.get(guild.owner.user.id) 
  if(member) {
    member.addRole(role)
  } else {
    console.log(`this user not in support server`)
  }
})






 







 client.on("message", msg => {
    if(msg.author.bot) return undefined;
    if(msg.content.startsWith(prefix + "avatar")) {
    let args = msg.content.split(" ")[1];
    if(!args) return msg.channel.send(`:white_check_mark: | **Using:** \`${prefix}avatar [ID]\`**`)
    var mention = args
    client.fetchUser(mention).then((user) => {
    let avatar = new Discord.RichEmbed()
    .setAuthor(user.username,user.avatarURL)
    .setTitle(`:white_check_mark: | Avatar Link`)
    .setURL(`${user.avatarURL}`)
    .setImage(`${user.avatarURL}`)
    .setFooter(msg.author.username,msg.author.avatarURL)
    msg.channel.send(avatar)
    })
    }
    })




client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** هذا الأمر فقط السيرفر**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":unamused: | **آسف ولكن ليس لديك إذن `BAN_MEMBERS`**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":unamused: | **آسف ليس لدي إذن `BAN_MEMBERS`**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":white_check_mark: | **Using:** `$ban [mention]`");
  if (!message.guild.member(user)
  .bannable) return message.reply("** :arrows_counterclockwise:  |الدور يجب أن يكون في القمة مع `ADMINISTRATION`**");


  message.guild.member(user).ban(7, user);

message.channel.send(`:white_check_mark: **| ${user.tag} محظور من السيرفر  **  `)

}
});





let al = JSON.parse(fs.readFileSync(`./antilinks.json`, `utf8`));



client.on('message', message => {
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;

    if (!al[message.guild.id]) al[message.guild.id] = {
        onoff: 'Off'
    }

    if (message.content === prefix + 'linksinfo') {
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.reply(":x: | **آسف ولكن ليس لديك إذن `BAN_MEMBERS`**");
        var embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}'s Config`)


            .addField(`Antilinks : `, `Antilinks State : ${al[message.guild.id].onoff}`)

        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + 'antiadv') {
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.reply(" :x:  | **آسف ولكن ليس لديك إذن `MANAGE_SERVER`**");
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (al[message.guild.id].onoff === 'Off') return [message.channel.send(`**:shield: | The antiadv protection has been toggled to On!**`), al[message.guild.id].onoff = 'On']
            if (al[message.guild.id].onoff === 'On') return [message.channel.send(`**:x: | The antiadv protection has been toggled to Off!**`), al[message.guild.id].onoff = 'Off'] //:D

        }
    }
    if (message.content.includes('https://','discord.gg','google.com','youtube.com')) {
        if (al[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
        return message.reply(`** :shield: | غير مسموح لك بمشاركة الروابط **`)
    }
   
    fs.writeFile("./antilinks.json", JSON.stringify(al), (err) => {
        if (err) console.error(err)
    });
});


client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** هذا الأمر فقط للسيرفر**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":x: | **آسف ولكن ليس لديك إذن`KICK_MEMBERS` **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**:x: | **آسف ليس لدي إذن `KICK_MEMBERS` **");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":hushed:  | **Using:** `$kick [mention]`");
  if (!message.guild.member(user)
  .bannable) return message.reply("** :thinking:  | الدور يجب أن يكون في القمة مع `ADMINISTRATION`**");


  message.guild.member(user).kick(7, user);

message.channel.send(`:white_check_mark:  **| ${user.tag} طرد من السيرفر !  **  `)

}
});





client.on('message', message => {
  let gl = client.guilds.get("663377773808844803").emojis.find(r => r.name === "VIP :");
  if (message.content.startsWith(prefix + 'short')) {
      let args = message.content.split(" ").slice(1);
      if (!args[0]) return message.channel.send(`**${gl} | الاِستخدام: $short \`LINK\`. **`)
      if (!args[1]) {
          shorten.shorten(args[0], function (res) {
              if (res.startsWith('Error:')) return message.channel.send(`**${gl} الاِستخدام: $short \`LINK\`. **`);
              message.channel.send(`**${gl} | الرابط المختصر : ${res}**`);
          })
      } else {
          shorten.custom(args[0], args[1], function (res) {
              if (res.startsWith('Error:')) return message.channel.send(`**${gl} الرابط المختصر : ${res}**`);
              message.channel.send(`**${gl} | الرابط المختصر : ${res}**`);
          })
      }
  }
});




client.on('message', message => {
  if(message.content.startsWith(prefix +"server")){ // الامر
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
  if(!message.channel.guild) return message.reply(' ');
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
  const now = new Date();
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  const days = millis / 1000 / 60 / 60 / 24;
  let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
  var embed  = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("**🆔 Server ID:**", message.guild.id,true)
  .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
  .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
  .addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
  .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
  .addField("**🌍 Others **" , message.guild.region,true)
  .addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
  .setColor('#000000')
  message.channel.sendEmbed(embed)
   
  }
  });
  









client.on('message', message => {
  if (message.content.startsWith("$uptime")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .addField('Uptime', timeCon(process.uptime()), true)
          .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
          .addField('Guild Count', client.guilds.size, true)
  })
}
});

function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\n  MuteChat / ميوت كتابي\n")
      .setFooter("Anti - Spam")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**:small_blue_diamond:لقد قمت بمخالفة قوانين السيرفر**\n \n:gun: : نوع العقوبه\nMuteChat / ميوت كتابي\n:clock1: وقت وتاريخ العقوبه:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("Anti - Spam")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});


client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "$mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});




client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "$unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});

/////////////////////////////////////////
client.on("message", message => {
  if(message.content.startsWith(prefix + "setnick")){
  if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
  var user = message.mentions.members.first();
  var args = message.content.split(" ").slice(2);
  var nick = args.join(" ");
  if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
  if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`⛔ | لا استطيع التغيير **${user.user.username}**'s اللقب لأن الرتبه أعلى من رتبتي!`);
  message.guild.member(user.user).setNickname(`${nick}`).then(() => {
  message.channel.send(`تغيرت بنجاح **${user.user.username}** اللقب إلى **${nick}**`)
  }).catch(console.error); 
  }
  }); 






 client.on("message", message => {
  if (message.content === "$help") {
   const embed = new Discord.RichEmbed() 
       .setColor("#ffff00")
       .setThumbnail(message.author.avatarURL)
       .setDescription(`
 
 =-=-Public Commands-=-=

 $infoinv = لمعرفه معلومات دعوه
 $avatar  = يظهر الصورة الخاصة بك أو شخص آخر
 $short =  يعمل رابط مختصر و سريع 
 $embed = لتحويل رساله عاديه الى امبيد
 $uptime  = لمعرفه مدة التشغيل
 $ping = لمعرفه سرعه البوت 

 =-=-Admin Commands-=-=

 $backup = اكتب الامر رايح يعطيك قائمه خاصه
 $vmute = صوت كتم صوت عضو
 $unvmute = يزيل كتم الصوت من أحد الأعضاء
 $setvc + $vc off = Ex : $setvc nano | لعمل روم يعدد الاشخاص في روم
 $clear = لحذف رسال في روم عدد محدد
 $warn = الامر تحذير
 $warnings = رؤية التحذير
 $space = استبدال "-" بمسافات في أسماء في رومات
 $ban = الامر الباند 
 $kick = الامر الطرد
 $server = الامر السيرفر يظهرلك كل معلومات السيرفر
 $mute = الامر الميوت شات
 $unmute = فك ميوت شات
 $roleinfo = يعطي معلومات رتبه حسل تحديدك
 $setnick = تغير  الاسم نيك نيم 
 $antiadv = الامر الحمايه من الروابط
 $linksinfo = يعطيك معلومات عن حمايه 
 
=-=-Owner Commands-=-=

$vip = اكتب الامر رايح تجيك قائمه 


=-=-=-=-=-=-=-=-=-=

Piwi Group : Link
         
 `)
 
 
 message.author.sendEmbed(embed)
 
 }
 }); 












 client.login(`${data.token}`);
