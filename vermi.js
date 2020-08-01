var express = require("express");
var http = require("http");
var app = express();

// Ping The Apps.
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendStatus(200);
});

// Request Listeners.
var listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);
//Const\\
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const token = process.env.BOT_TOKEN;
const prefix = config.prefix;
const owner = config.owner
const dev = config.piggy
const superagent = require("superagent");
const ms = require("ms");

var parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return (days?(written=true,days+` days`):``)+(written?`, `:``)
        +(hours?(written=true,hours+` hours`):``)+(written?`, `:``)
        +(minutes?(written=true,minutes+` minutes`):``)+(written?`, `:``)
        +(seconds?(written=true,seconds+` seconds`):``)+(written?`, `:``)
        +(milliseconds?milliseconds+` milliseconds`:``);
};


bot.on("ready", () => {
   console.log("konichiwaa!");
  
bot.user.setActivity(`sad days without discord T_T`, {
  type: "STREAMING",
  url:"https://www.twitch.tv/."}); 
});
 
bot.on("error", error => {
    console.log(error);
});




//Message Event\\
bot.on('message', message => {

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if (message.author.bot) return
if (message.channel.type === 'dm') return;


    if (message.content.toLowerCase().startsWith(prefix + 'test')) {
                    message.channel.send(
                        `Please insure that <@${bot.user.id}> has Administrator permissions on this server.`
                    );
                }
const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${prefix}\`, and I am taken, dont u dare dm me`);
  }

    
  
 if(message.content.toLowerCase().startsWith(prefix + "reload")){
    if(message.author.id !== config.owner) {
      message.reply(`you have no perms for this command!`)
      return;
    }
    if(message.author.id == config.owner  )  {
      var reload = require('require-reload')(require),
      api = reload('./mybot.js');
      try {
          api = reload('./mybot.js');
      } catch (e) {
          console.error("Failed to reload bot! Error: ", e);
      }
    message.channel.send('reloading my main...').then(sent =>{
    sent.edit('This is tiring')
});
   var pingEmbed = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setAuthor(`${bot.user.username}`)
   .setDescription('**`mybot.js` has be reloaded! dragy no errorsfound, all refreshed**');
   message.channel.send(pingEmbed)
   return;
};
    }
  
 
    
 


  //Help Command\\
if (message.content.toLowerCase().startsWith(prefix + "help")) {
  var HelpEmbed = new Discord.MessageEmbed()
  .setColor('#64ff00')
  .setTitle('📬 Help Sent!')
  message.channel.send({embed:HelpEmbed})
  .then (m => m.delete({timeout :1500}))
  var Help2Embed = new Discord.MessageEmbed()
  .setAuthor('🔖|Help Page For ' + bot.user.username)
  .setColor('#64ff00')
  .setTitle('Reply with these cmd in server to get the inside commands')
  .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725312794643267584/helpimage.png')
  .addField(prefix + '**server**', '--Gets u our Server commands.`+server`and other `server cmd` can be used in <#684657636150345769> channel only')
  .addField(prefix + "**heads**", "-- `☢│ Hᴇᴀᴅ ᴘɪʟʟᴀʀ'ꜱ〢` commands in server.")
  .addField(prefix + '**mod**', '--Gives `Moderators`commands of server')
  .addField(prefix + '**fun**', '--All Fun commands Dragy gave me.')
  .addField(prefix + '**bot**', '--Sends Miss Vermi info commands.Better use <#684657636150345769> channel')
  .addField(prefix + '**general**', '--Gives general commands of `everyones` use.')
  .addField(prefix + 'Dragneel', "--Get Dragneel's **Youtube** and other **Social** platforms links")
  .setFooter(bot.user.username, bot.user.avatarURL());
  message.author.send({embed: Help2Embed});
};
//commands profile
 
  
  
  //server
  if (command === 'server') {
   if (message.channel.id !== "684657636150345769")
    return message.reply('please use <#684657636150345769> channel') ;{
    var  serverembed = new Discord.MessageEmbed()
    .setColor('#f10505')
    .setTitle('🏡|Server commands!')
    message.channel.send({embed :serverembed})
   .then (m => m.delete({timeout :1500}))
    var server2embed = new Discord.MessageEmbed()
    .setAuthor ('Server cmd for'  +  bot.user.username)
    .setColor('#45e424')
    .setTitle('Use the commands below to get SERVER INFO')
    .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725314755677388851/damn_opfi_clan_logo_2.png')
    .addField(prefix + '**guildinfo**', '--Gets our guild idea.')
    .addField(prefix + '**agree**', 'Server Unlocking command._Works: only in `WELCOME` channel_')
    .addField(prefix + '**invite**',"--Gets u our **FAMILY'S**  invite Link")
    .addField(prefix + '**rules**,','--Get `RULES` of our Guild')
    .addField(prefix + '**stats**','--Gets u some other stats of server')
    .setFooter(message.author.username,message.author.displayAvatarURL(),'Dragy NUB dev');
      message.channel.send({embed: server2embed});
      message.delete();
    
  }
  };
  
  //ADMINS
  if (message.content.toLowerCase().startsWith (prefix + 'heads')) {
    if (!message.member.hasPermission("MANAGE SERVER")) {
    return message.reply("Sorry,this CMD is for Guild ManagerS!")
    .then (m => m.delete({timeout :3000}))
} else {
  if (message.member.hasPermission('MANAGE SERVER')) {
  if (message.mentions.members.size < 1) {
    var adminembed = new Discord.MessageEmbed()
    .setColor('#c00f35')
    .setAuthor("🗽|Pillar cmd's!")
    message.channel.send ({embed: adminembed})
    .then (m => m.delete({timeout :1500}))
    var admin2embed = new Discord.MessageEmbed()
    .setAuthor('cmds for'+ message.author.username)
    .setColor('#c00f35')
    .setTitle("Cmd's for my dear Managers,use! them wisely")
    .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725910030955708467/head_pilars.png')
    .addField(prefix + '**purge**', '--cmd for deleting msges')
    .addField(prefix + '**mroles**', '--has trusted roles  cmd inside u can give,give wisely! ')
    .addField(prefix + '**vcrules**','--puts some vc rules that are needed!')
    .addField(prefix +'**crules**','--this put general chat rules in channel,Use it when u feel like needed!')
    .addField(prefix + '**say**','--basically says something with embed in chat,')
    .addField(prefix + 'vping','--Do check from time to time ' + bot.user.username)
    .addField(prefix +"howto","-- server dedicated commands; just use it and look into them")
    .setFooter('Dragy LOVES U GUYS','https://cdn.discordapp.com/attachments/726134541638697042/726135635273842828/lovey.gif')
    message.channel.send ({embed :admin2embed});
    message.delete();
    }
  }
  }}
  
  //MOD
  if (message.content.toLowerCase().startsWith(prefix + 'mod' )) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.reply("cmd restricted to MODS use,it has mod cmd only nothing very special! :poop:")
      .then (m => m.delete({timeout :3000}))
     } else {
       if (message.member.hasPermission('MANAGE_MESSAGES')) {
         if (message.mentions.members.size < 1) {
           var modembed = new Discord.MessageEmbed()
           .setColor('#ff4040')
           .setTitle("🤝 |Trusting u to use your commands wisely")
           .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725950305992310844/unknown.png')
           .addField(prefix + '**mute**','--mutes a mentioned user [doesnt have time limit]')
           .addField(prefix + '**unmute**','--unmutes a user')
           .addField(prefix + '**warn**','-- warns a user')
           .addField(prefix + '**unwarn**','--removes the warning')
           .addField(prefix + '**kick**','--kicks a user')
           .setFooter('U guys are the best','https://cdn.discordapp.com/attachments/726134541638697042/726136865404616774/lovey_2.gif')
           message.channel.send({embed: modembed});
           message.delete();
         }
       }
     }
  }

  //FUN
  if (message.content.toLowerCase().startsWith(prefix + 'fun')) {
    var funembed = new Discord.MessageEmbed()
    .setColor('#111010')
    .setTitle("<:emojifun:694934262117564537> | Fun cmd's sent")
    message.reply({embed:funembed})
    .then (m => m.delete({timeout :1500}))
    var fun2embed = new Discord.MessageEmbed() 
    .setAuthor('Fun cmd of ' + bot.user.username)
    .setColor('#111010')
    .setTitle(' Use them for Fun ,but dont spam with them')
    .addField(prefix + '**gift**','💝|Gift someone something special')
    .addField(prefix + '**flip**','💰|Heads or tails! who wins!')
    .addField(prefix + '**8ball**','🎱|sasta 8 ball! just try it :sweat_smile:')
    .addField(prefix + '**cat**','😽|Put a cute cat pic; `Server MANAGERS` use')
    .addField(prefix + '**dog**','🐕|woof woof!; `Server Managers` use')
    .addField(prefix + '**punch**','🤜| Punch someone very hard! Dont make em cry!')
    .addField(prefix + 'dragy','😅|Dragy tries his best to be funny')
    .setFooter(message.author.username,'https://cdn.discordapp.com/emojis/695280028140961853.gif?v=1')
    message.author.send({embed: fun2embed});
    message.delete();
    
  }

//BOT
  if (message.content.toLowerCase().startsWith(prefix + 'bot')) {
    var botembed = new Discord.MessageEmbed()
    .setColor('#87fd05')
    .setTitle("Miss vermi info cmd's sent")
    message.channel.send({embed:botembed})
    .then (m => m.delete({timeout :1500}))
    var bot2embed = new Discord.MessageEmbed()
    .setAuthor('info cmd of '+ bot.user.username)
    .setColor('#ee09b8')
    .setTitle('Use of cmd is prohibited in general channels')
    .setDescription('use CMD in  <#684657636150345769> channel')
    .addField(prefix + 'botinfo','--Miss vermi info',true)
    .addField(prefix + 'ping','-- ping of vermi',true)
    .addField(prefix +'uptime','--Gets u the uptime of bot')
    .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/726668680389197914/782b8266b5ab779e02f92049d7704597.jpg')
    .setFooter(message.author.username,message.author.displayAvatarURL())
    message.author.send({embed:bot2embed});
    message.delete();
       
  }

//GENERAL
  if (message.content.toLowerCase().startsWith(prefix+ 'general')) {
  message.reply('umm,Check ur dm!')
  .then (m => m.delete({timeout :1500}))
    var genreembed = new Discord.MessageEmbed()
    .setColor('#006cfc')
    .setAuthor('Some general commands!' + bot.user.username)
    .setTitle("Use them but don't overuse")
    .setDescription('`Mods` will see if they are overused')
    .addField(prefix +'avatar|av','--Get u the avatar|',true)
    .addField(prefix + 'profile','can be used in <#684657636150345769> channel only',true)
    .setFooter(message.author.username,message.author.displayAvatarURL())
    message.author.send({embed:genreembed});
    message.delete();
    
   }


//MAIN COMMAND START FROM HERE

//SERVER
//#1 GUILDINFO
if (message.content.toLowerCase().startsWith(prefix + 'guildinfo')) {
  if (message.channel.id !== "684657636150345769") 
  return message.reply('pls use <#684657636150345769> channel ! trying to keep generals clean') ;{
    var GuildInfoEmbed = new Discord.MessageEmbed()
    .setColor('#7e00fc')
    .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725312794643267584/helpimage.png')
    .setTitle(message.guild.name + ' Info')
    .setDescription("Guild: **Feary Wizards** aKa **DragneeL's Home**:- PUBGM LITE clan striving to become the best and this server is their home; where we love getting new wizards ,cause we love you ! Hope u like us too, enjoy and have FUN.")
    .addField("🖍|Name", message.guild.name, true)
    .addField("👤|Owner", message.guild.owner, true)
    .addField("🌍|Region", message.guild.region, true)
    .addField("🛡|Verification level", message.guild.verificationLevel, true)
    .addField("👥|Members", message.guild.memberCount, true)
    .addField("📡|Channels", message.guild.channels.cache.size, true)
    .addField("🎭|Roles", message.guild.roles.cache.size, true)
    .addField("💳|ID", message.guild.id, true)
    .addField("🕕|Created On", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`,true)
message.channel.send({embed: GuildInfoEmbed})

}
}
  
//#2AGREE  
if (message.content.toLowerCase().startsWith(prefix + 'agree')) {
  let memberRole = message.guild.roles.cache.find(r => r.name === "Verified wizard");
message.member.roles.add(memberRole).catch(console.error);
message.delete()
};
  
//#3invite
    if (message.content.startsWith(prefix + "invite")) {
                    const inviteembed = new Discord.MessageEmbed()
                        .setColor('#52fc03')
                        .setAuthor(bot.user.username, bot.user.displayAvatarURL())
                        .setTitle("📥|Dragy's invite letter!")
                        .setDescription('https://discord.gg/G35CMMj')
                        .setFooter('Dragy nub dev', 'https://cdn.discordapp.com/attachments/720837151926911026/721533324136284172/circle_best_logo.png');
                    message.channel.send(inviteembed);
                }

//rules

  if (message.content.toLowerCase().startsWith(prefix + "rules")) {
    var rulesembed = new Discord.MessageEmbed()
      .setColor("#00ff7c")
      .setTitle("Home Sweet Home");
    message.channel.send({ embed: rulesembed })
    .then (m => m.delete({timeout :1500}))
    var rule2embed = new Discord.MessageEmbed()
      .setTitle("Rules in our Home")
      .setDescription("**its your Family too,so just bear and follow the rules**")
    .setThumbnail("https://cdn.discordapp.com/attachments/721588221716201572/728490280633892894/clan_opfi_blur.png")
    .addField("<a:1_emoji_89:695280101830557815>|#1","Be nice again be Double nice" )
    .addField("<a:1_emoji_89:695280101830557815>|#2", "Please read each channel topic and use each channel appropiately.")
    .addField("<a:1_emoji_89:695280101830557815>|#3","No excessive cussing please.")
    .addField( "<a:1_emoji_89:695280101830557815>|#4"," No Homophobic Slurs, Inappropiate topics, Discrimination, Racist Slurs of any kind.")
    .addField("<a:1_emoji_89:695280101830557815>|#5", "Do not ask for ranks please,if u want get some high roles and rank please check #ranks-loop channel;u will get the details!")
    .addField("<a:1_emoji_89:695280101830557815>|#6","No excessive spamming please (You only gain xp once per minute so do not try to spam for xp) and there is <#680244415259738352> channel for emote spam. You will be punished accordingly if seen by mods.")
    .addField("<a:1_emoji_89:695280101830557815>|#7","Do not bring drama or start arguments in this chat, keep it in dms if need be.")
    .addField("<a:1_emoji_89:695280101830557815>|#8"," Do not tag `☢│ HEAD ᴘɪʟʟᴀʀ'ꜱ〢`   if you were banned or punished. Make an appeal.")
    .addField("<a:1_emoji_89:695280101830557815>|#9"," Do not tag  `☢│ Aꜱᴛʀᴀʟ ᴍᴏᴅS 〢`  + unless you have their permission and if someone asks you not to tag them please respect their wishes, do not be a smart-ass. (You can tag ).")
    .addField("<a:1_emoji_89:695280101830557815>|#10","Do not abuse any bugs or your perms, if you find a bug please report it in [<#685156265801941060>]( https://discord.gg/G35CMMj).")
    .addField("<a:1_emoji_89:695280101830557815>|#11", "Do not send inappropiate, phising, or malicious links or images or you will be punished accordingly.")
    .addField("<a:1_emoji_89:695280101830557815>|#12","In voice chats, please do not scream or be an overall nusiance, if you are listening to music (must be appropiate), do so in the music chat.")
    .addField("<a:1_emoji_89:695280101830557815>|#13","No political, hitler, etc. talk please, positive vibes only. :sunglasses:")
    .addField("<a:1_emoji_89:695280101830557815>|#14", "Have fun!!! (And invite your friends! [Server link (https://discord.gg/G35CMMj)]")
    .setFooter("Rules by" + message.author.username)
    .setTimestamp();
    message.author.send({embed:rule2embed})
    message.delete();
  }



//FOR CHANNEL USE BY MANAGERS
//#SRULES 

   if (message.content.toLowerCase().startsWith(prefix + 'srules' )) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.reply("Server rules coming down")
      .then (m => m.delete({timeout :3000}))
     } else {
       if (message.member.hasPermission('MANAGE_MESSAGES')) {
         if (message.mentions.members.size < 1) {
           var rule2embed = new Discord.MessageEmbed()
      .setTitle("Rules in our Home")
      .setDescription("**its your Family too,so just bear and follow the rules**")
    .setThumbnail("https://cdn.discordapp.com/attachments/721588221716201572/728490280633892894/clan_opfi_blur.png")
    .addField("<a:1_emoji_89:695280101830557815>|#1","Be nice again be Double nice" )
    .addField("<a:1_emoji_89:695280101830557815>|#2", "Please read each channel topic and use each channel appropiately.")
    .addField("<a:1_emoji_89:695280101830557815>|#3","No excessive cussing please.")
    .addField( "<a:1_emoji_89:695280101830557815>|#4"," No Homophobic Slurs, Inappropiate topics, Discrimination, Racist Slurs of any kind.")
    .addField("<a:1_emoji_89:695280101830557815>|#5", "Do not ask for ranks please,if u want get some high roles and rank please check <#729939475324731413> channel;u will get the details!")
    .addField("<a:1_emoji_89:695280101830557815>|#6","No excessive spamming please (You only gain xp once per minute so its no use and beware of bots too lol) and there is <#680244415259738352> channel for emote spam. You will be punished accordingly if seen by mods.")
    .addField("<a:1_emoji_89:695280101830557815>|#7","Do not bring drama or start arguments in this chat, keep it in dms if need be.")
    .addField("<a:1_emoji_89:695280101830557815>|#8"," Do not tag <@&700767688158609478>   if you were banned or punished. Make an appeal.")
    .addField("<a:1_emoji_89:695280101830557815>|#9"," Do not tag  <@&677432747958075392> all the time  + unless you have their permission and if someone asks you not to tag them please respect their wishes, do not be a smart-ass. (You can tag ).")
    .addField("<a:1_emoji_89:695280101830557815>|#10","Do not abuse any bugs or your perms, if you find a bug please report it in [<#685156265801941060>]( https://discord.gg/G35CMMj).")
    .addField("<a:1_emoji_89:695280101830557815>|#11", "Do not send inappropiate, phising, or malicious links or images or you will be punished accordingly.")
    .addField("<a:1_emoji_89:695280101830557815>|#12","In voice chats, please do not scream or be an overall nusiance, if you are listening to music (must be appropiate), do so in the music chat.")
    .addField("<a:1_emoji_89:695280101830557815>|#13","No political, hitler, etc. talk please, positive vibes only. :sunglasses:")
    .addField("<a:1_emoji_89:695280101830557815>|#14", "Have fun!!! (And invite your friends!. [Server link](https://discord.gg/G35CMMj))")
    .setFooter("Rules by" + message.author.username)
    .setTimestamp();
    message.channel.send({embed:rule2embed})
    message.delete();
    }
   }
 }
}



//ADMIN commands----- HEAD PILLARS COMMANDS
//#1 PURGE
if (message.content.toLowerCase().startsWith(prefix + 'purge')) {
    if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
        message.reply('ahh crap  I don\'t have the permission **Manage_Messages**.');
        return;
    } else {
        if (message.member.hasPermission('MANAGE_SERVER')) {
        var amount = args.join(' ')
        if (isNaN(amount)) {
        message.reply('Please provide a number between 1 and 100.')
        return;
      };

      if (!amount) {
      message.reply('Please provide an amount.')
    } else {
      message.channel.bulkDelete(amount);
    var PurgeEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(bot.user.tag, bot.user.avatarURL)
    .addField('Action', 'Nuke')
    .addField('Nuked Amount', amount)
    .addField('Nuked By', message.author)
    .addField('Nuked Channel', message.channel.name);
    if (!message.guild.channels.cache.get("728635890561187881")) {
        message.channel.send("**I couldn't find my `logs` channel,so umm make one.**")
          return;
    } else {
      message.guild.channels.cache.get("728635890561187881").send({embed: PurgeEmbed})
      return;
      }
     }
    } else {
       message.channel.send('nope  don\'t have the perms to do that')
       message.guild.owner.send(`${message.author} tried to use \`nuke command\``)
    }
  };
};


//#2 crules
 if (message.content.toLowerCase().startsWith(prefix +'crules'))
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("umm its a server management command!")
    .then (m => m.delete({timeout :3000}))
} else {
  if (message.member.hasPermission('MANAGE_MESSAGES')) {
  if (message.mentions.members.size < 1) {
    var crulesembed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username,message.author.displayAvatarURL())
    .setTitle('Please abide by these')
    .setDescription('Be like a FAMILY, despite being different lets try to be one, cause Dragy never wants fights in family')
    .addField('#1','Stop doing the shit u are doing right now.')
    .addField('#2','keep the chat clean and friendly')
    .addField('#3','No offending or offenciveness towards anyone')
    .addField('#4','Got a problem! Report to <#686431099781644308> with `--report@user` and put the details needed! mods will get you')
    .setFooter('Chat rules by' + message.author.username)
    .setTimestamp()
    message.channel.send({embed:crulesembed});
    message.delete();
     }
  }
   }
 
//#3 ----SAY COMMAND
//embed Command\\
if (message.content.toLowerCase().startsWith(prefix + 'embed'))  
if (!message.member.hasPermission('MANAGE_GUILD')){ return 
}
 else {
  if (message.member.hasPermission('MANAGE_GUILD')) {
  if (message.mentions.members.size < 1) {

if (args[0]) {
  var SayEmbed = new Discord.MessageEmbed()
  .setColor('#00c5fc')
  .setThumbnail(message.author.avatarURL)
  .setDescription(args.join(' '));
message.channel.send({embed: SayEmbed})
message.delete();
};
};
};
}

//SAY COMMAND\\------------------------
if (message.content.startsWith(prefix + "say") && ["672695020100386846"].includes(message.author.id)) {
let channel = message.mentions.channels.first();
if (!channel) channel = message.channel;
let content = args.join(" ");
if(channel) content = args.slice(1).join(" ");
return channel.send(content)
message.delete();
}

//norm say\\----------
  if (message.content.toLowerCase().startsWith (prefix + 'vsay')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
    return
    } else {
  if (message.member.hasPermission('ADMINISTRATOR')) {
  if (message.mentions.members.size < 1) {
   var sayMessage = args.join(" ")
   message.delete();
   message.channel.send(sayMessage);
  }
  }
}
  }


//M roles ------------------------------------\\
if (message.content.toLowerCase().startsWith(prefix + 'mroles')  && message.member.hasPermission('MANAGE_SERVER')) {
  var mrolesembed = new Discord.MessageEmbed()
  .setColor('#87fd05')
  .setAuthor('command by' + message.author.username)
  .setTitle('Server dedicated roles')
  .addField('mroles','`addmod/unmod`| `ytadd`| `yt+add`| `gfxadd`| `clanadd`')
  .setFooter('beep boop,beep boop','https://cdn.discordapp.com/attachments/726134541638697042/726134624849362944/4639_veryleaksgif.gif')
  message.channel.send({embed:mrolesembed})
  message.delete();
  } 

 //#a)addmod Command\\
if (message.content.toLowerCase().startsWith(prefix + 'addmod')) {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our OP wizard,for this trusted role.')
  } else {
    var msg = message.mentions.members.first();
    const trustRole = message.guild.roles.cache.get('677432747958075392')
    msg.roles.add(trustRole).catch(console.error);
    var trustEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setColor('#4ed333')
    .setDescription('<a:emoji_96:725928974877720677> ' + msg.user.tag + ' is now trusted new mod, OP!')
    .setFooter('Be Careful people','https://cdn.discordapp.com/attachments/726134541638697042/726136863605391420/8375_siren_blue.gif')
    message.channel.send({embed: trustEmbed})
    .then (m => m.delete({timeout :5000}))
    message.delete();
   };
  };
 };
};

 //#b)unmod Command\\
if (message.content.toLowerCase().startsWith(prefix + 'unmod')) {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, permissions aint yours!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Please provide a member to unmod.')
  } else {
    var msg = message.mentions.members.first();
    const trustRole = message.guild.roles.cache.get('677432747958075392')
    msg.roles.remove(trustRole);
    var untrustEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setColor('#ff4040')
    .setDescription(':x: ' + msg.user.tag + ' is now demoted,Thanks for all u did :heart:')
    message.channel.send({embed: untrustEmbed})
    .then (m => m.delete({timeout :2500}))
    message.delete();
   };
  };
 };
}; 

//#c YT-ADD ----
if (message.content.toLowerCase().startsWith(prefix + "apply") && message.guild.channels.cache.get('729940234107879464')) {
    message.delete({timeout:1000});
    var applyembed = new Discord.MessageEmbed()
    .setColor('#3760fc')
    .setDescription(`${message.author} You applied for the <@&677432747555291148> role(**PLEASE PUT UR CHANNEL LINK TOO IF U HAVEN'T ENTERED WITH COMMAND and hope u read the requirements**) We will get back to you soon!Good Day`)
    message.channel.send({embed:applyembed});
    var receiveembed = new Discord.MessageEmbed()
    .setColor('#3760fc')
    .setDescription(`**${message.author}** just applied for the <@&677432747555291148> rank!Don't keep him waiting and make sure he gave his channel link`)
    message.guild.channels.cache.get("729940533551824956").send({embed: receiveembed} );
 }

if (message.content.toLowerCase().startsWith(prefix + "ytadd" )) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our OP wizard,for this trusted role.')
  } else {
    
    let role = message.guild.roles.cache.get("677432747555291148");
    let user = message.mentions.members.first()
    user.roles.add(role).catch(console.error);
  var ytembed = new Discord.MessageEmbed()
    .setColor('#3760fc')
    .setDescription(`**${user.user.username}** You have been accepted, congrats on getting the <@&677432747555291148> role! make sure u ask ur perks `)
    message.guild.channels.cache.get("729943660124176494").send(`${user.toString()}`).then(sent =>{
    sent.edit({embed:ytembed})
   })
}
}
}
};

//#d YT+ADD -----------
if (message.content.toLowerCase().startsWith(prefix + "yt+apply") && message.guild.channels.cache.get('729940234107879464')) {
    message.delete({timeout:1000});
    var applyembed = new Discord.MessageEmbed()
    .setColor('#ff255e')
    .setDescription(`${message.author} You applied for the <@&712709020653322261> special role (CHANNEL LINK IS A MUST and hope u read the requirements) Management will get back to you soon!Good Day`)
    message.channel.send({embed:applyembed});
    var receiveembed = new Discord.MessageEmbed()
    .setColor('#ff255e')
    .setDescription(`**${message.author}** just applied for the <@&712709020653322261> **Special rank**!Don't keep him waiting and make sure to check the channel link`)
    message.guild.channels.cache.get("729940533551824956").send({embed: receiveembed} );
 }

if (message.content.toLowerCase().startsWith(prefix + "yt+add" )) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our OP wizard,for this trusted role.')
  } else {
    
    let role = message.guild.roles.cache.get("712709020653322261");
    let user = message.mentions.members.first()
    user.roles.add(role).catch(console.error);
  var ytembed = new Discord.MessageEmbed()
    .setColor('#3760fc')
    .setDescription(`**${user.user.username}** <@&712709020653322261>  Special role has been given,**WE are happy to have such a big YOUTUBER among us**! Thank u for joining in  `)
    message.guild.channels.cache.get("729943660124176494").send(`${user.toString()}`).then(sent =>{
    sent.edit({embed:ytembed})
   })
}
}
}
};

//e)GFXADD\\
if (message.content.toLowerCase().startsWith(prefix + "gfxapply") && message.guild.channels.cache.get('729940234107879464')) {
    message.delete({timeout:1000});
    var applyembed = new Discord.MessageEmbed()
    .setColor('#f16798')
    .setDescription(`${message.author} You applied for the <@&730312225692319794> special role (please give the best u made with **Dragneel** details in it) Management will get back to you soon!Good Day`)
    message.channel.send({embed:applyembed});
    var receiveembed = new Discord.MessageEmbed()
    .setColor('#ff255e')
    .setDescription(`**${message.author}** just applied for the <@&730312225692319794> **Special rank**!Well i will check it out Personally but do tag me if someone applied`)
    message.guild.channels.cache.get("729940533551824956").send({embed: receiveembed} );
}

if (message.content.toLowerCase().startsWith(prefix + "gfxadd" )) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our OP wizard,for this trusted role.')
  } else {
    
    let role = message.guild.roles.cache.get("730312225692319794");
    let user = message.mentions.members.first()
    user.roles.add(role).catch(console.error);
  var gfxembed = new Discord.MessageEmbed()
    .setColor('#f16798')
    .setDescription(`**${user.user.username}** <@&730312225692319794>  Special role has been given,**Indeed Dragy liked ur art**! You are now our op artist! Keep creating  `)
    message.guild.channels.cache.get("729943660124176494").send(`${user.toString()}`).then(sent =>{
    sent.edit({embed:gfxembed})
   })
}
}
}
};




//e) CLAN APPLY\\
if (message.content.toLowerCase().startsWith(prefix + "clanapply") && message.guild.channels.cache.get('677816256488931328')) {
    message.delete({timeout:1000});
    var applyembed = new Discord.MessageEmbed()
    .setColor('#02e29f')
    .setDescription(`${message.author} You applied for the <@&677465656966381588> 
    **Hope u read  everything in<#677560689732223027>**
     __**Some extra Questions,answer them in the same format below**__
  
 > \`Previous clan\` -- **\`Clan Name\`**
 > \`Esports experience\` > **\`No |Fair enough| GooD| Regulars\`**
 > \`Joining for\`-- **\`Esports | Casual Rank Playing| Time pass\`**
  __**Now after that please include Your GAME STATS PIC RIGHT BELOW**__`)
    message.channel.send({embed:applyembed});
    var receiveembed = new Discord.MessageEmbed()
    .setColor('#02e29f')
    .setDescription(`**${message.author}** just applied for the <@&677465656966381588> **Special rank**!Would be very helpful if **Management** Please Filter out the applicants stats according to the requirements`)
    message.guild.channels.cache.get("732091739736899655").send({embed: receiveembed} );
}
// CLAN SELECTED
if (message.content.toLowerCase().startsWith(prefix + "clanadd" )) {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('ADMINISTRATOR')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our OP wizard,for this trusted role.')
  } else {
    
    let role = message.guild.roles.cache.get("677465656966381588");
    let user = message.mentions.members.first()
    user.roles.add(role).catch(console.error);
  var gfxembed = new Discord.MessageEmbed()
    .setColor('#f16798')
    .setDescription(`**${user.user.username}** <@&677465656966381588> role AND  ur application for joining **FEARY WIZARDS**  has been accepted ! Quite close to us now, u are ! **PLease send ur ingame ID in the <#702700849683628134>**  and tag** Dragneel** ,so we can add you `)
    message.guild.channels.cache.get("729943660124176494").send(`${user.toString()}`).then(sent =>{
    sent.edit({embed:gfxembed})
   })
}
}
}
};

// CLAN DENIED
if (message.content.toLowerCase().startsWith(prefix + "cdenied" )) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our  wizard first.')
  } else {
    
    let role = message.guild.roles.cache.get("677465656966381588");
    let user = message.mentions.members.first()
    user.roles.add(role).catch(console.error);
  var gfxembed = new Discord.MessageEmbed()
    .setColor('#f16798')
    .setDescription(`**${user.user.username}** <@&677465656966381588> requirements were not met as per requirements mentioned in <#677560689732223027>! **please make sure the requirements are met accordingly**`)
    message.guild.channels.cache.get("729943660124176494").send(`${user.toString()}`).then(sent =>{
    sent.edit({embed:gfxembed})
   })
}
}
}
};



//HOW TO --------------------------------------\\
if (message.content.startsWith(prefix +'howto') 
&& message.member.hasPermission('MANAGE_SERVER')) {
var hwotoembed = new Discord.MessageEmbed()
.setAuthor('howto for' + message.author.username)
.setColor('#aef105')
.setTitle('kind of info how to get these ')
.addField(prefix + 'howto[text]',' **[text]**--`head`|`mod`|`gfx`|`clan`|`vip/royal`|`12/7support`|`partner`|`yt`|`abroaders`')
.setFooter("aren't these special","https://cdn.discordapp.com/attachments/726134541638697042/729228707423584256/694931842486239243.gif")
message.channel.send({embed:hwotoembed})
message.delete();

};

//TEXT-------------------------------------\\







  //Eval command\\
if (message.content.toLowerCase().startsWith(prefix + 'eval')) {
    if (message.author.id === config.owner) {
    const clean = text => {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
    };
      
                                                                    
      
    try {
        const code = args.join(" ");
        let evaled = eval(code);
      
        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      
        message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          var errEmbed = new Discord.MessageEmbed()
          .setColor('RED')
          .setAuthor(bot.user.username, bot.user.avatarURL)
          .setTitle('Error!')
          .setDescription(`\`\`\`xl\n${clean(err)}\n\`\`\``)
        message.channel.send({embed: errEmbed});
    };
};
};
  
  if (message.content === 'prefix ' || message.content === 'kawai prefix') {
  message.channel.send('My prefix is **' + prefix + '**.')
};
  
  if (message.content =='prefix'|| message.content === 'morning') {
     if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.reply("Aye aye!, morning ")
     } else {
       if (message.member.hasPermission('MANAGE_MESSAGES')) {
         if (message.mentions.members.size < 1) {
    message.channel.send ('**very gd morning,new day ,new goals,get OP**')
   }
 }
     }
  }

  
  if (message.content =='prefix'|| message.content === 'Morning') {
    return message.reply("Aye aye!, morning ")
     }

  bot.muteUser = function (user, channel, callback) {
    var object = {"readMessages": true, "sendMessages": false};
    self.bot.overwritePermissions(channel, user, object, callback);
}

bot.unmuteUser = function (user, channel, callback) {
    var object = {"readMessages": true, "sendMessages": true};
    self.bot.overwritePermissions(channel, user, object, callback);
}

  //Join Command\\
if (message.content.toLowerCase().startsWith(prefix + 'agree')) {
  let memberRole = message.guild.roles.cache.find(r => r.name === "Verified wizard");
message.member.roles.add(memberRole).catch(console.error);
message.delete()
};
  
 
  
 
  
  //VVPing Command\\
if (message.content.toLowerCase().startsWith(prefix + 'vping')) {
 if (!message.member.hasPermission("MANAGE SERVER")){
    return;
  } else {
    if  (message.member.hasPermission('MANAGE SERVER')){
      if (message.mentions.members.size < 1)
  var pingEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("!PONG")
  .addField("📶|Latency", `${new Date() - new Date(message.createdTimestamp)}ms`,true)
  .addField("💖|Mah Heart", `${Math.floor(bot.ws.ping)}ms`,true)
  .setFooter("Ping for" + bot.user.username,bot.user.displayAvatarURL())
  .setTimestamp()
  
   message.channel.send(pingEmbed)
   .then (m => m.delete({timeout :3000}))
   }
  }
  }                                      

 //ping
 if (message.content.toLowerCase().startsWith(prefix + 'ping')) {
 if (message.channel.id !== "684657636150345769") return null ;{
  var pingEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("!PONG")
  .addField("📶|Latency", `${new Date() - new Date(message.createdTimestamp)}ms`,true)
  .addField("💖|Mah Heart", `${Math.floor(bot.ws.ping)}ms`,true)
  .setFooter("Ping for" + bot.user.username,bot.user.displayAvatarURL())
  .setTimestamp()
  
   message.channel.send(pingEmbed)
   .then (m => m.delete({timeout :4000}))
   }
  }
 //uptime 
if (message.content.toLowerCase().startsWith(prefix + "uptime")) {
    message.channel.send(`**kawai chan** was last restarted **${(bot.uptime / 60000).toFixed(0)} minutes** ago!`)
   }
  
 
  
  
  
  
  
  
} ) ;

          

 

                bot.login(token)