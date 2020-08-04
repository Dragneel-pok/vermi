 var express = require("express");
var http = require("http");
var app = express();

// Ping The Apps.
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendStatus(200);
});

// Request Listeners.///
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);
//Const\\
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const token = process.env.BOT_TOKEN;
const prefix = config.prefix;
const owner = config.owner;
const dev = config.piggy;
const superagent = require("superagent");
const ms = require("ms");

var parseTime = function (milliseconds) {
  var seconds = Math.floor(milliseconds / 1000);
  milliseconds %= 1000;
  var minutes = Math.floor(seconds / 60);
  seconds %= 60;
  var hours = Math.floor(minutes / 60);
  minutes %= 60;
  var days = Math.floor(hours / 24);
  hours %= 24;
  var written = false;
  return (
    (days ? ((written = true), days + ` days`) : ``) +
    (written ? `, ` : ``) +
    (hours ? ((written = true), hours + ` hours`) : ``) +
    (written ? `, ` : ``) +
    (minutes ? ((written = true), minutes + ` minutes`) : ``) +
    (written ? `, ` : ``) +
    (seconds ? ((written = true), seconds + ` seconds`) : ``) +
    (written ? `, ` : ``) +
    (milliseconds ? milliseconds + ` milliseconds` : ``)
  );
};

bot.on("ready", () => {

   console.log("konichiwaa!");
  
bot.user.setActivity(` sad days,no discord T_T`, {
  type: "STREAMING",
  url:"https://www.twitch.tv/."}); 
});
 
bot.on("error", error => {
    console.log(error);
});


 
//Message Event\\
bot.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.content.toLowerCase().startsWith(prefix + "test")) {
    message.channel.send(
      `Please insure that <@${bot.user.id}> has Administrator permissions on this server.`
    );
  }
  const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(
      `My prefix is \`${prefix}\`, and I am taken, dont u dare dm me`
    );
  }

    
//RELOAD  
 if(message.content.toLowerCase().startsWith(prefix + "reload")){
    if(message.author.id !== config.owner) {
      message.reply(`you have no perms for this command!`)
      return;
    }
    if(message.author.id == config.owner  )  {
      var reload = require('require-reload')(require),
      api = reload('./vermi.js');
      try {
          api = reload('./vermi.js');
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
  
//Info command\\
if (message.content.toLowerCase().startsWith(prefix + 'info')) {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    var InfoEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setThumbnail(bot.user.avatarURL)
    .setTitle(bot.user.tag + `'s Info`)
    .setDescription('</> with love by <@672695020100386846>!')
    .addField('Prefix', prefix, true)
    .addField("Creator", "Dragneel-NUB", true)
    .addField("Libary", "Node.JS & Discord.JS", true)
    .addField("Version", config.ver, true)
    .addField('Guilds', bot.guilds.cache.size, true)
    .addField("Channels", bot.channels.cache.size, true)
    .addField("Users",bot.users.cache.size, true)
    .addField("Ping", Math.round(bot.ws.ping) + "ms", true)
    .addField("Memory Used", `${Math.round(used * 100) / 100}MB`,true)
    .addField("Uptime", parseTime(bot.uptime), true);
message.channel.send({embed: InfoEmbed});
};
     
 if (message.content.toLowerCase().startsWith(prefix + 'guilds') && ["672695020100386846"].includes(message.author.id)) {
  
    const guildNames = bot.guilds.cache.map(g => g.name).join("\n")
    message.channel.send('**' + bot.user.username + '\'s Guilds.**\n ```' + guildNames + '```')
}; 

  //Help Command\\
  if (message.content.toLowerCase().startsWith(prefix + "help")) {
    var HelpEmbed = new Discord.MessageEmbed()
      .setColor("#64ff00")
      .setTitle("📬 Help Sent!");
    message.channel
      .send({ embed: HelpEmbed })
      .then((m) => m.delete({ timeout: 1500 }));
    var Help2Embed = new Discord.MessageEmbed()
      .setAuthor("🔖|Help Page For " + bot.user.username)
      .setColor("#64ff00")
      .setTitle("Reply with these cmd in server to get the inside commands")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/721588221716201572/725312794643267584/helpimage.png"
      )
      .addField(
        prefix + "**server**",
        "--Gets u our Server commands.`+server`and other `server cmd` can be used in <#684657636150345769> channel only"
      )
      .addField(
        prefix + "**heads**",
        "-- `☢│ Hᴇᴀᴅ ᴘɪʟʟᴀʀ'ꜱ〢` commands in server."
      )
      .addField(prefix + "**mod**", "--Gives `Moderators`commands of server")
      .addField(prefix + "**fun**", "--All Fun commands Dragy gave me.")
      .addField(
        prefix + "**bot**",
        "--Sends Miss Vermi info commands.Better use <#684657636150345769> channel"
      )
      .addField(
        prefix + "**general**",
        "--Gives general commands of `everyones` use."
      )
      .addField(
        prefix + "Dragneel",
        "--Get Dragneel's **Youtube** and other **Social** platforms links"
      )
      .setFooter(bot.user.username, bot.user.avatarURL());
    message.author.send({ embed: Help2Embed });
  }
  //commands profile

  //server
  if (command === "server") {
    if (message.channel.id !== "684657636150345769")
      return message.reply("please use <#684657636150345769> channel");
    {
      var serverembed = new Discord.MessageEmbed()
        .setColor("#f10505")
        .setTitle("🏡|Server commands!");
      message.channel
        .send({ embed: serverembed })
        .then((m) => m.delete({ timeout: 1500 }));
      var server2embed = new Discord.MessageEmbed()
        .setAuthor("Server cmd for" + bot.user.username)
        .setColor("#45e424")
        .setTitle("Use the commands below to get SERVER INFO")
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/721588221716201572/725314755677388851/damn_opfi_clan_logo_2.png"
        )
        .addField(prefix + "**guildinfo**", "--Gets our guild idea.")
        .addField(
          prefix + "**agree**",
          "Server Unlocking command._Works: only in `WELCOME` channel_"
        )
        .addField(
          prefix + "**invite**",
          "--Gets u our **FAMILY'S**  invite Link"
        )
        .addField(prefix + "**rules**,", "--Get `RULES` of our Guild")
        .addField(prefix + "**stats**", "--Gets u some other stats of server")
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL(),
          "Dragy NUB dev"
        );
      message.channel.send({ embed: server2embed });
      message.delete();
    }
  }

  //ADMINS
  if (message.content.toLowerCase().startsWith(prefix + "heads")) {
    if (!message.member.hasPermission("MANAGE SERVER")) {
      return message
        .reply("Sorry,this CMD is for Guild ManagerS!")
        .then((m) => m.delete({ timeout: 3000 }));
    } else {
      if (message.member.hasPermission("MANAGE SERVER")) {
        if (message.mentions.members.size < 1) {
          var adminembed = new Discord.MessageEmbed()
            .setColor("#c00f35")
            .setAuthor("🗽|Pillar cmd's!");
          message.channel
            .send({ embed: adminembed })
            .then((m) => m.delete({ timeout: 1500 }));
          var admin2embed = new Discord.MessageEmbed()
            .setAuthor("cmds for" + message.author.username)
            .setColor("#c00f35")
            .setTitle("Cmd's for my dear Managers,use! them wisely")
            .setThumbnail(
              "https://cdn.discordapp.com/attachments/721588221716201572/725910030955708467/head_pilars.png"
            )
            .addField(prefix + "**purge**", "--cmd for deleting msges")
            .addField(
              prefix + "**mroles**",
              "--has trusted roles  cmd inside u can give,give wisely! "
            )
            .addField(
              prefix + "**vcrules**",
              "--puts some vc rules that are needed!"
            )
            .addField(
              prefix + "**crules**",
              "--this put general chat rules in channel,Use it when u feel like needed!"
            )
            .addField(
              prefix + "**say**",
              "--basically says something with embed in chat,"
            )
            .addField(
              prefix + "vping",
              "--Do check from time to time " + bot.user.username
            )
            .addField(
              prefix + "howto",
              "-- server dedicated commands; just use it and look into them"
            )
            .setFooter(
              "Dragy LOVES U GUYS",
              "https://cdn.discordapp.com/attachments/726134541638697042/726135635273842828/lovey.gif"
            );
          message.channel.send({ embed: admin2embed });
          message.delete();
        }
      }
    }
  }

  //MOD
  if (message.content.toLowerCase().startsWith(prefix + "mod")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply(
          "cmd restricted to MODS use,it has mod cmd only nothing very special! :poop:"
        )
        .then((m) => m.delete({ timeout: 3000 }));
    } else {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (message.mentions.members.size < 1) {
          var modembed = new Discord.MessageEmbed()
            .setColor("#ff4040")
            .setTitle("🤝 |Trusting u to use your commands wisely")
            .setThumbnail(
              "https://cdn.discordapp.com/attachments/721588221716201572/725950305992310844/unknown.png"
            )
            .addField(
              prefix + "**mute**",
              "--mutes a mentioned user [doesnt have time limit]"
            )
            .addField(prefix + "**unmute**", "--unmutes a user")
            .addField(prefix + "**warn**", "-- warns a user")
            .addField(prefix + "**unwarn**", "--removes the warning")
            .addField(prefix + "**kick**", "--kicks a user")
            .setFooter(
              "U guys are the best",
              "https://cdn.discordapp.com/attachments/726134541638697042/726136865404616774/lovey_2.gif"
            );
          message.channel.send({ embed: modembed });
          message.delete();
        }
      }
    }
  }

  //FUN
  if (message.content.toLowerCase().startsWith(prefix + "fun")) {
    var funembed = new Discord.MessageEmbed()
      .setColor("#111010")
      .setTitle("<:emojifun:694934262117564537> | Fun cmd's sent");
    message.reply({ embed: funembed }).then((m) => m.delete({ timeout: 1500 }));
    var fun2embed = new Discord.MessageEmbed()
      .setAuthor("Fun cmd of " + bot.user.username)
      .setColor("#111010")
      .setTitle(" Use them for Fun ,but dont spam with them")
      .addField(prefix + "**gift**", "💝|Gift someone something special")
      .addField(prefix + "**flip**", "💰|Heads or tails! who wins!")
      .addField(
        prefix + "**8ball**",
        "🎱|sasta 8 ball! just try it :sweat_smile:"
      )
      .addField(
        prefix + "**cat**",
        "😽|Put a cute cat pic; `Server MANAGERS` use"
      )
      .addField(prefix + "**dog**", "🐕|woof woof!; `Server Managers` use")
      .addField(
        prefix + "**punch**",
        "🤜| Punch someone very hard! Dont make em cry!"
      )
      .addField(prefix + "dragy", "😅|Dragy tries his best to be funny")
      .setFooter(
        message.author.username,
        "https://cdn.discordapp.com/emojis/695280028140961853.gif?v=1"
      );
    message.author.send({ embed: fun2embed });
    message.delete();
  }

  //BOT
  if (message.content.toLowerCase().startsWith(prefix + "bot")) {
    var botembed = new Discord.MessageEmbed()
      .setColor("#87fd05")
      .setTitle("Miss vermi info cmd's sent");
    message.channel
      .send({ embed: botembed })
      .then((m) => m.delete({ timeout: 1500 }));
    var bot2embed = new Discord.MessageEmbed()
    .setAuthor('info cmd of '+ bot.user.username)
    .setColor('#ee09b8')
    .setTitle('Use of cmd is prohibited in general channels')
    .setDescription('use CMD in  <#684657636150345769> channel')
    .addField(prefix + 'info','--Miss vermi info',true)
    .addField(prefix + 'ping','-- ping of vermi',true)
    .addField(prefix +'uptime','--Gets u the uptime of bot')
    .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/726668680389197914/782b8266b5ab779e02f92049d7704597.jpg')
    .setFooter(message.author.username,message.author.displayAvatarURL())
    message.author.send({embed:bot2embed});
    message.delete();
  }

  //GENERAL
  if (message.content.toLowerCase().startsWith(prefix + "general")) {
    message.reply("umm,Check ur dm!").then((m) => m.delete({ timeout: 1500 }));
    var genreembed = new Discord.MessageEmbed()
      .setColor("#006cfc")
      .setAuthor("Some general commands!" + bot.user.username)
      .setTitle("Use them but don't overuse")
      .setDescription("`Mods` will see if they are overused")
      .addField(prefix + "avatar|av", "--Get u the avatar|", true)
      .addField(
        prefix + "profile",
        "can be used in <#684657636150345769> channel only",
        true
      )
      .setFooter(message.author.username, message.author.displayAvatarURL());
    message.author.send({ embed: genreembed });
    message.delete();
    
   }


//MAIN COMMAND START FROM HERE

//SERVER
//#1 GUILDINFO
if (message.content.toLowerCase().startsWith(prefix + 'guildinfo')) {
  message.delete();
  if (message.channel.id !== "684657636150345769") 
  return message.reply('pls use <#684657636150345769> channel ! trying to keep generals clean')
  .then(m => m.delete({timeout:3000}))
  {
   
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
    message.channel
      .send({ embed: rulesembed })
      .then((m) => m.delete({ timeout: 1500 }));
    var rule2embed = new Discord.MessageEmbed()
      .setTitle("Rules in our Home")
      .setDescription(
        "**its your Family too,so just bear and follow the rules**"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/721588221716201572/728490280633892894/clan_opfi_blur.png"
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#1",
        "Be nice again be Double nice"
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#2",
        "Please read each channel topic and use each channel appropiately."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#3",
        "No excessive cussing please."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#4",
        " No Homophobic Slurs, Inappropiate topics, Discrimination, Racist Slurs of any kind."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#5",
        "Do not ask for ranks please,if u want get some high roles and rank please check #ranks-loop channel;u will get the details!"
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#6",
        "No excessive spamming please (You only gain xp once per minute so do not try to spam for xp) and there is <#680244415259738352> channel for emote spam. You will be punished accordingly if seen by mods."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#7",
        "Do not bring drama or start arguments in this chat, keep it in dms if need be."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#8",
        " Do not tag `☢│ HEAD ᴘɪʟʟᴀʀ'ꜱ〢`   if you were banned or punished. Make an appeal."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#9",
        " Do not tag  `☢│ Aꜱᴛʀᴀʟ ᴍᴏᴅS 〢`  + unless you have their permission and if someone asks you not to tag them please respect their wishes, do not be a smart-ass. (You can tag )."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#10",
        "Do not abuse any bugs or your perms, if you find a bug please report it in [<#685156265801941060>]( https://discord.gg/G35CMMj)."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#11",
        "Do not send inappropiate, phising, or malicious links or images or you will be punished accordingly."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#12",
        "In voice chats, please do not scream or be an overall nusiance, if you are listening to music (must be appropiate), do so in the music chat."
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#13",
        "No political, hitler, etc. talk please, positive vibes only. :sunglasses:"
      )
      .addField(
        "<a:1_emoji_89:695280101830557815>|#14",
        "Have fun!!! (And invite your friends! [Server link (https://discord.gg/G35CMMj)]"
      )
      .setFooter("Rules by" + message.author.username)
      .setTimestamp();
    message.author.send({ embed: rule2embed });
    message.delete();
  }

  //FOR CHANNEL USE BY MANAGERS
  //#SRULES

  if (message.content.toLowerCase().startsWith(prefix + "srules")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("Server rules coming down")
        .then((m) => m.delete({ timeout: 3000 }));
    } else {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (message.mentions.members.size < 1) {
          var rule2embed = new Discord.MessageEmbed()
            .setTitle("Rules in our Home")
            .setDescription(
              "**its your Family too,so just bear and follow the rules**"
            )
            .setThumbnail(
              "https://cdn.discordapp.com/attachments/721588221716201572/728490280633892894/clan_opfi_blur.png"
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#1",
              "Be nice again be Double nice"
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#2",
              "Please read each channel topic and use each channel appropiately."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#3",
              "No excessive cussing please."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#4",
              " No Homophobic Slurs, Inappropiate topics, Discrimination, Racist Slurs of any kind."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#5",
              "Do not ask for ranks please,if u want get some high roles and rank please check <#729939475324731413> channel;u will get the details!"
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#6",
              "No excessive spamming please (You only gain xp once per minute so its no use and beware of bots too lol) and there is <#680244415259738352> channel for emote spam. You will be punished accordingly if seen by mods."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#7",
              "Do not bring drama or start arguments in this chat, keep it in dms if need be."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#8",
              " Do not tag <@&700767688158609478>   if you were banned or punished. Make an appeal."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#9",
              " Do not tag  <@&677432747958075392> all the time  + unless you have their permission and if someone asks you not to tag them please respect their wishes, do not be a smart-ass. (You can tag )."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#10",
              "Do not abuse any bugs or your perms, if you find a bug please report it in [<#685156265801941060>]( https://discord.gg/G35CMMj)."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#11",
              "Do not send inappropiate, phising, or malicious links or images or you will be punished accordingly."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#12",
              "In voice chats, please do not scream or be an overall nusiance, if you are listening to music (must be appropiate), do so in the music chat."
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#13",
              "No political, hitler, etc. talk please, positive vibes only. :sunglasses:"
            )
            .addField(
              "<a:1_emoji_89:695280101830557815>|#14",
              "Have fun!!! (And invite your friends!. [Server link](https://discord.gg/G35CMMj))"
            )
            .setFooter("Rules by" + message.author.username)
            .setTimestamp();
          message.channel.send({ embed: rule2embed });
          message.delete();
        }
      }
    }
  }

  //ADMIN commands----- HEAD PILLARS COMMANDS
  //#1 PURGE
  if (message.content.toLowerCase().startsWith(prefix + "purge")) {
    if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) {
      message.reply(
        "ahh crap  I don't have the permission **Manage_Messages**."
      );
      return;
    } else {
        if (message.member.hasPermission('MANAGE_SERVER')) {
        var amount = args[0]
        if (isNaN(amount)) {
        message.reply('Please provide a number between 1 and 100.')
        return;
      };
      if  (amount > 100) {
        return message.reply ('Number less than 100 or = 100')
      }
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
        }

        if (!amount) {
          message.reply("Please provide an amount.");
        } else {
          message.channel.bulkDelete(amount);
          var PurgeEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(bot.user.tag, bot.user.avatarURL)
            .addField("Action", "Nuke")
            .addField("Nuked Amount", amount)
            .addField("Nuked By", message.author)
            .addField("Nuked Channel", message.channel.name);
          if (!message.guild.channels.cache.get("728635890561187881")) {
            message.channel.send(
              "**I couldn't find my `logs` channel,so umm make one.**"
            );
            return;
          } else {
            message.guild.channels.cache
              .get("728635890561187881")
              .send({ embed: PurgeEmbed });
            return;
          }
        }
      }  {
        message.channel.send("nope  don't have the perms to do that");
        message.guild.owner.send(
          `${message.author} tried to use \`nuke command\``
        );
      }
    }
  }
};

  //#2 crules
  if (message.content.toLowerCase().startsWith(prefix + "crules"))
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("umm its a server management command!")
        .then((m) => m.delete({ timeout: 3000 }));
    } else {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (message.mentions.members.size < 1) {
          var crulesembed = new Discord.MessageEmbed()
            .setAuthor(bot.user.username, message.author.displayAvatarURL())
            .setTitle("Please abide by these")
            .setDescription(
              "Be like a FAMILY, despite being different lets try to be one, cause Dragy never wants fights in family"
            )
            .addField("#1", "Stop doing the shit u are doing right now.")
            .addField("#2", "keep the chat clean and friendly")
            .addField("#3", "No offending or offenciveness towards anyone")
            .addField(
              "#4",
              "Got a problem! Report to <#686431099781644308> with `--report@user` and put the details needed! mods will get you"
            )
            .setFooter("Chat rules by" + message.author.username)
            .setTimestamp();
          message.channel.send({ embed: crulesembed });
          message.delete();
        }
      }
    }

  //#3 ----SAY COMMAND
  //embed Command\\
  if (message.content.toLowerCase().startsWith(prefix + "embed"))
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      return;
    } else {
      if (message.member.hasPermission("MANAGE_GUILD")) {
        if (message.mentions.members.size < 1) {
          if (args[0]) {
            var SayEmbed = new Discord.MessageEmbed()
              .setColor("#00c5fc")
              .setThumbnail(message.author.avatarURL)
              .setDescription(args.join(" "));
            message.channel.send({ embed: SayEmbed });
            message.delete();
          }
        }
      }
    }

//#2 crules
 if (message.content.toLowerCase().startsWith(prefix +'crules'))
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("umm its a server management command!")
    .then (m => m.delete({timeout :3000}))
} else {
  if (message.member.hasPermission('MANAGE_MESSAGES')) {
  if (message.mentions.members.size < 1) {
    var user = message.mentions.members.first();
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
    message.channel.send({embed:crulesembed})
   
    message.delete();
     }
  }
   };
 
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
      return;
    } else {
      if (message.member.hasPermission("ADMINISTRATOR")) {
        if (message.mentions.members.size < 1) {
          var sayMessage = args.join(" ");
          message.delete();
          message.channel.send(sayMessage);
        }
      }
    }
  }

  //M roles ------------------------------------\\
  if (
    message.content.toLowerCase().startsWith(prefix + "mroles") &&
    message.member.hasPermission("MANAGE_SERVER")
  ) {
    var mrolesembed = new Discord.MessageEmbed()
      .setColor("#87fd05")
      .setAuthor("command by" + message.author.username)
      .setTitle("Server dedicated roles")
      .addField(
        "mroles",
        "`addmod/unmod`| `ytadd`| `yt+add`| `gfxadd`| `clanadd`"
      )
      .setFooter(
        "beep boop,beep boop",
        "https://cdn.discordapp.com/attachments/726134541638697042/726134624849362944/4639_veryleaksgif.gif"
      );
    message.channel.send({ embed: mrolesembed });
    message.delete();
  }

//#c YT-ADD ----
if (message.content.toLowerCase().startsWith(prefix + "apply")) {
if (message.channel.id !== "729940234107879464") 
  return message.reply('pls use <#729940234107879464> channel! command usage not allowed here')  
    .then (m => m.delete({timeout :3000}));
   
   
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
if (message.content.toLowerCase().startsWith(prefix + "yt+apply")){
if (message.channel.id !== "729940234107879464") 
  return message.reply('pls use <#729940234107879464> channel! command usage not allowed here')  
    .then (m => m.delete({timeout :3000}));
    var applyembed = new Discord.MessageEmbed()
      .setColor("#3760fc")
      .setDescription(
        `${message.author} You applied for the <@&677432747555291148> role(**PLEASE PUT UR CHANNEL LINK TOO IF U HAVEN'T ENTERED WITH COMMAND and hope u read the requirements**) We will get back to you soon!Good Day`
      );
    message.channel.send({ embed: applyembed });
    var receiveembed = new Discord.MessageEmbed()
      .setColor("#3760fc")
      .setDescription(
        `**${message.author}** just applied for the <@&677432747555291148> rank!Don't keep him waiting and make sure he gave his channel link`
      );
    message.guild.channels.cache
      .get("729940533551824956")
      .send({ embed: receiveembed });
  }

//e)GFXADD\\
if (message.content.toLowerCase().startsWith(prefix + "gfxapply")){
if (message.channel.id !== "729940234107879464") 
  return message.reply('pls use <#729940234107879464> channel! command usage not allowed here')  
    .then (m => m.delete({timeout :3000}));
    var applyembed = new Discord.MessageEmbed()
    .setColor('#f16798')
    .setDescription(`${message.author} You applied for the <@&730312225692319794> special role (please give the best u made with **Dragneel** details in it below) Management will get back to you soon!Good Day`)
    message.channel.send({embed:applyembed});
    var receiveembed = new Discord.MessageEmbed()
      .setColor("#ff255e")
      .setDescription(
        `**${message.author}** just applied for the <@&712709020653322261> **Special rank**!Don't keep him waiting and make sure to check the channel link`
      );
    message.guild.channels.cache
      .get("729940533551824956")
      .send({ embed: receiveembed });
  }

  if (message.content.toLowerCase().startsWith(prefix + "yt+add")) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message
        .reply("Sorry, you don't have permissions to do this!")
        .then((m) => m.delete({ timeout: 1500 }));
    } else {
      if (message.member.hasPermission("MANAGE_ROLES")) {
        if (message.mentions.members.size < 1) {
          message.reply("Mention our OP wizard,for this trusted role.");
        } else {
          let role = message.guild.roles.cache.get("712709020653322261");
          let user = message.mentions.members.first();
          user.roles.add(role).catch(console.error);
          var ytembed = new Discord.MessageEmbed()
            .setColor("#3760fc")
            .setDescription(
              `**${user.user.username}** <@&712709020653322261>  Special role has been given,**WE are happy to have such a big YOUTUBER among us**! Thank u for joining in  `
            );
          message.guild.channels.cache
            .get("729943660124176494")
            .send(`${user.toString()}`)
            .then((sent) => {
              sent.edit({ embed: ytembed });
            });
        }
      }
    }
  }

  //e)GFXADD\\
  if (
    message.content.toLowerCase().startsWith(prefix + "gfxapply") &&
    message.guild.channels.cache.get("729940234107879464")
  ) {
    message.delete({ timeout: 1000 });
    var applyembed = new Discord.MessageEmbed()
      .setColor("#f16798")
      .setDescription(
        `${message.author} You applied for the <@&730312225692319794> special role (please give the best u made with **Dragneel** details in it) Management will get back to you soon!Good Day`
      );
    message.channel.send({ embed: applyembed });
    var receiveembed = new Discord.MessageEmbed()
      .setColor("#ff255e")
      .setDescription(
        `**${message.author}** just applied for the <@&730312225692319794> **Special rank**!Well i will check it out Personally but do tag me if someone applied`
      );
    message.guild.channels.cache
      .get("729940533551824956")
      .send({ embed: receiveembed });
  }

  if (message.content.toLowerCase().startsWith(prefix + "gfxadd")) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message
        .reply("Sorry, you don't have permissions to do this!")
        .then((m) => m.delete({ timeout: 1500 }));
    } else {
      if (message.member.hasPermission("MANAGE_ROLES")) {
        if (message.mentions.members.size < 1) {
          message.reply("Mention our OP wizard,for this trusted role.");
        } else {
          let role = message.guild.roles.cache.get("730312225692319794");
          let user = message.mentions.members.first();
          user.roles.add(role).catch(console.error);
          var gfxembed = new Discord.MessageEmbed()
            .setColor("#f16798")
            .setDescription(
              `**${user.user.username}** <@&730312225692319794>  Special role has been given,**Indeed Dragy liked ur art**! You are now our op artist! Keep creating  `
            );
          message.guild.channels.cache
            .get("729943660124176494")
            .send(`${user.toString()}`)
            .then((sent) => {
              sent.edit({ embed: gfxembed });
            });
        }
      }
    }
  }

  //e) CLAN APPLY\\
  if (
    message.content.toLowerCase().startsWith(prefix + "clanapply") &&
    message.guild.channels.cache.get("677816256488931328")
  ) {
    message.delete({ timeout: 1000 });
    var applyembed = new Discord.MessageEmbed().setColor("#02e29f")
      .setDescription(`${message.author} You applied for the <@&677465656966381588> 
    **Hope u read  everything in<#677560689732223027>**
     __**Some extra Questions,answer them in the same format below**__
  
 > \`Previous clan\` -- **\`Clan Name\`**
 > \`Esports experience\` > **\`No |Fair enough| GooD| Regulars\`**
 > \`Joining for\`-- **\`Esports | Casual Rank Playing| Time pass\`**
  __**Now after that please include Your GAME STATS PIC RIGHT BELOW**__`);
    message.channel.send({ embed: applyembed });
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
message.delete()
   if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!")
    .then (m => m.delete({timeout :1500}));
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Mention our  wizard first.')
  } else {
     var sayMessage = args.join(" ")
   let role = message.guild.roles.cache.get("677465656966381588");
    let user = message.mentions.members.first()
    user.roles.remove(role).catch(console.error);
  var gfxembed = new Discord.MessageEmbed()
    .setColor('#f16798')
    .setDescription(sayMessage +` <@&677465656966381588> requirements were not met as per requirements mentioned in <#677560689732223027>! **please make to read it properly and then apply again** `)
    message.guild.channels.cache.get("729943660124176494").send(`${user.toString()}`).then(sent =>{
    sent.edit({embed:gfxembed})
   })
}
}
}
};



//HOW TO --------------------------------------\\
if (message.content.toLowerCase().startsWith(prefix +'howto')) {
   message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER'))
var hwotoembed = new Discord.MessageEmbed()
.setAuthor('howto by' + message.author.username)
.setColor('#aef105')
.setTitle('kind of info how to get these ')
.addField(prefix + 'howto[text]',' **[text]**--`head`|`mod`|`gfx`|`clan`|`vip/royal`|`12/7support`|`partner`|`yt`|`abroaders`')
.setFooter("aren't these special","https://cdn.discordapp.com/attachments/726134541638697042/729228707423584256/694931842486239243.gif")
message.channel.send({embed:hwotoembed})
 .then (m => m.delete({timeout :9000}));


};

// HOW TO -TEXT-------------------------------------\\

//HEAD
if (message.content.toLowerCase().startsWith(prefix +'howhead')) {
  message.delete()
  var headembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢│ HEAD ᴘɪʟʟᴀʀ'ꜱ〢`are taken")
  .setColor('#aef105')
  .addField("**HEADS**--are SERVER MANAGERS", "|How enrolled > well depends on server needs + starts when **DRAGNEEL** thinks needed| so stay tuned! keep checking announcements for staying updated")
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/729221373695754240/tenor.gif')
  message.channel.send({embed:headembed})
 .then (m => m.delete({timeout :9000}));
};
  
// MOD
if (message.content.toLowerCase().startsWith(prefix +'howmod')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_GUILD')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢│ Aꜱᴛʀᴀʟ ᴍᴏᴅS 〢`are taken")
  .setColor('#aef105')
  .addField("** Aꜱᴛʀᴀʟ ᴍᴏᴅS **--are Server Moderators", "|How enrolled > Well giving someone MOD means trusting one like a family| `TOP chat rank holders are kept on evaluation` by **Management** so keep loving our family and u might just get that REP u want [:negative_squared_cross_mark: **Never ask for MOD randomly**- u will be given strike for free|:woozy_face: ]")
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/733207306019536977/tenor.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :15000}));
};

//GFX--//
if (message.content.toLowerCase().startsWith(prefix +'howgfx')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢ ⥑ Dragy's Artist ⥏`s selected")
  .setColor('#aef105')
  .addField("**Dragy's Artist **--are gfx DESIGNERS", "|How enrolled > Head over to <#729940234107879464> and just do `+gfxapply` make sure to do what's written there")
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/729228621297745990/tenor_5.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :15000}));
};

//CLAN-----\\
//--//
if (message.content.toLowerCase().startsWith(prefix +'howclan')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢│ Cʟᴀɴ ᴡɪᴢᴀʀᴅꜱ〢`s selected")
  .setColor('#aef105')
  .addField("**Clan Wizards **--are Clan MemberS", "|How enrolled > Head over to <#677816256488931328> and just do `+clanapply` make sure to do what's written there | **or just watch what others did**")
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/729228621297745990/tenor_5.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :15000}));
};


//HOW--VIP/RPYAL//--
if (message.content.toLowerCase().startsWith(prefix +'howvip')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢│ Tʜᴇ ʀᴏʏᴀʟS 〢`s are given respect")
  .setColor('#aef105')
  .addField("**Royals **--are like super OP people worthy of being honoured", "|How given > Well Royals are people quite close to Dragneel | are recognised everywhere | are just vibed people")
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/733687829242314853/mavy_charmed.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :15000}));
};

//HOW 12/7 SUPPORT////--
if (message.content.toLowerCase().startsWith(prefix +'howsupport')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢│ 12/7-SupporT 〢`s are enrolled")
  .setColor('#aef105')
  .setDescription(` __**12/7-Support-are our  Server Support Team**__ 
 > \`They can be  tagged  for all of ur queries about server\` -- **\`to a limit though\`**
 > \`To Enroll Active people in almost all channels are required\`--**\`cause u have to know inside-out of server\`**
 \`so hope u got what it takes\`--**\`if u wanna apply\`**
 `)
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/733687835416330271/mavuu_more_happy.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :10000}));
};

//HOW-PARTNER
if (message.content.toLowerCase().startsWith(prefix +'howpartner')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("For now Dragneel doesnt want partnership")
  .setColor('#aef105')
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/733688140090441748/wat_the_hell.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :3000}));
};

//HOWYT---
if (message.content.toLowerCase().startsWith(prefix +'howyt')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_GUILD')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle(" How `☢│ Yᴏᴜᴛᴜʙᴇʀꜱ 〢`|`☢│ Fᴀᴍᴇᴅ ʏᴏᴜᴛᴜʙᴇʀS 〢`Get their REP in our home")
  .setColor('#aef105')
  .setDescription(`
 __**Famed-Youtubers**__ 
 > \`Having Fame of 100k+ YT Subs\` > **\`Please have your channel link- head to <channel-below> and just type in +yt+apply and do put ur CHANNEL LINK TOO| u will be getting a ping when u are given our special love- i mean rank\`**
  __**Youtubers**__
  > \`Having YT Subs- 10K+\` > **\`Aye sir Growing ones are more op-> have ur channel link -> head to <channel-below> type in +apply and put ur link|Have a cheerful day \`**
 `)
 .addField('channel','<#729940234107879464>')
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/734226748849520690/ram_ram.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :20000}));
};

//HOW-ABRoAD//--
if (message.content.toLowerCase().startsWith(prefix +'howabroad')) {
  message.delete()
 if  (message.member.hasPermission('MANAGE_SERVER')) 
  var modembed =new Discord.MessageEmbed()
  .setAuthor(bot.user.username)
  .setTitle("How `☢│ AʙʀᴏᴀᴅᴇʀS 〢` role is given ")
  .setColor('#aef105')
  .setDescription(`__**Abroaders- Other servers MODS/ADMINS**__
  > \`Server \` > **\`Must be a Server of 10K+ MEMBERS \`**
  > \`Ξ| well i dont mind if i don't even get the least amount of respect u can give  \`- **\`But my MODS and ADMINS are very precious to me \`**
  > \`Ξ| so if u wish to get the special role here , my family should get the same respect in your HOME SERVER \``)
  .setFooter(message.author.username,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/attachments/726134541638697042/733688140090441748/wat_the_hell.gif')
  message.channel.send({embed:modembed})
 .then (m => m.delete({timeout :20000}));
};

  //HOW TO --------------------------------------\\
  if (
    message.content.startsWith(prefix + "howto") &&
    message.member.hasPermission("MANAGE_SERVER")
  ) {
    var hwotoembed = new Discord.MessageEmbed()
      .setAuthor("howto for" + message.author.username)
      .setColor("#aef105")
      .setTitle("kind of info how to get these ")
      .addField(
        prefix + "howto[text]",
        " **[text]**--`head`|`mod`|`gfx`|`clan`|`vip/royal`|`12/7support`|`partner`|`yt`|`abroaders`"
      )
      .setFooter(
        "aren't these special",
        "https://cdn.discordapp.com/attachments/726134541638697042/729228707423584256/694931842486239243.gif"
      );
    message.channel.send({ embed: hwotoembed });
    message.delete();
  }

//MODERATION COMMANDS\\-------

const modlog = message.guild.channels.cache.get('728635890561187881');
const cmdlog = message.guild.channels.cache.get('735390300230516807');




//1)+WARN-----
var reason = args.slice(1).join(' ');
var msguser = message.mentions.members.first();
if(message.content.startsWith(prefix + `warn`)) {
if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`Don't be dumb please leave warn and all to mods!`);
  if (!reason) {
  return message.channel.send(`Please Provide a reason in order to warn.e.g - \`${config.prefix}warn <user> <reason>\``)
}
if (!msguser) {
  return message.reply("Please @mention a valid wizard of this Guild");
}
var guild = message.guild;
var warnEmbed = new Discord.MessageEmbed()
.setColor('#c7c5c5')
.setDescription(`<a:emoji_96:725928974877720677> **Wizard \`${msguser.user.username}\`   has been warned for**-- **\`${ reason}\`**!. `)
message.channel.send(warnEmbed)
message.delete()
{
var dmwarnembed = new Discord.MessageEmbed()
.setDescription(`**You have been warned in** \`${message.guild.name}\` for \`${reason}\`! `)
msguser.send({embed:dmwarnembed}) }
 {
  var reasonembed = new Discord.MessageEmbed()
      .addField('Action', 'Warn',true)
      .addField('Moderator', message.author.tag,true)
      .addField('Reason', "`" + reason + "`",true)
      .addField('whom',msguser.user.tag,true)
      .setFooter('User warned ' + new Date())
      .setColor('#c7c5c5');
      modlog.send({embed:reasonembed})
  } {
     var cmduseembed = new Discord.MessageEmbed()
     .addField('Action','warn',true)
     .addField('Moderator',message.author.tag,true)
     .setColor('#c7c5c5')
     .setFooter('used at')
     .setTimestamp()
     cmdlog.send({embed:cmduseembed})
  } 
}

//unwarn\\
var unreason = args.slice(1).join(' ');

var msguser = message.mentions.members.first();
if(message.content.startsWith(prefix + `unwarn`)) {
if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`You do not have the permissions!`);
  if (!unreason) {
  return message.channel.send(`Please Provide a reason in order to unwarn.e.g - \`${config.prefix}unwarn <user> <reason>\``)
}
var guild = message.guild;
var unwarnEmbed = new Discord.MessageEmbed()
.setColor(`BLUE`)
.setDescription(`<a:emoji_96:725928974877720677> **Wizard    has been UNwarned for**-- **\`${ reason}\`**!. ` )
message.channel.send(unwarnEmbed)
message.delete()

var dmembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**You have been unwarned from **\`${message.author.tag}\` in \`${message.guild.name}\` for \`${unreason}\`!`)
msguser.send({embed:dmembed})  
{
     var cmduseembed = new Discord.MessageEmbed()
     .addField('Action','UNwarn',true)
     .addField('Moderator',message.author.tag,true)
     .setColor('GREEN')
     .setFooter('used at')
     .setTimestamp()
     cmdlog.send({embed:cmduseembed})
  }

};
 
 //KICK----
if (message.content.toLowerCase().startsWith(prefix + 'kick')) {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply("Not having perms, still trying to kick someone | **;(**");
}

var member = message.mentions.members.first();
if (!modlog) {
   return message.reply ("well my logging channel maybe i lost my way")
}
  if (!member) {
  return message.reply("umm @mention should be of a valid wizard of our guild");
}
  if (!member.kickable) {
  return message.reply("deng this role might be higher,do i have kick perm? |can't kick the user")
  .then (m => m.delete({timeout :6000}));
}

var reason = args.slice(1).join(' ');

  if (!reason) {
  member.kick(`No Reason - by ${message.author}`)
  .catch(error => message.reply(`Sorry ${message.author} couldn't  be kicked cause : ${error}`));
  message.channel.send ({
    embed: {
      color: "#c7c5c5",
      description: `**${member} was Kicked| 🦶 | no reason given**`,
    }
  })
   message.delete()
  } else {
  member.send ({
    embed:{
      color: "BLACK",
      description: 'You have been kicked for ' + "`" + reason + "`" + ` from ${message.guild.name}  if you think you where kicked by mistake please contact **Support Team**.`,
    }
    }).catch(error => message.channel.send(`⚠ Unable to alert ${member} of reason \`${error}\`.`)).then (message => {
      member.kick(`${reason} - On command of ${message.author}`)
  .catch(error => message.reply(`sollie ${message.author} couldn't kick maybe cause ${error}`));
 member.send ({
      embed: {
        color: "#c7c5c5",
        description:"You have been kicked for " + "`" + reason + "`" + " from `Dragneel's Server`. if you think you were kicked by mistake please contact **Support Team**.",    
      }
      }).catch(error => console.log(error))
    message.delete({timeout:5000})
  })
  message.delete()
  } 

  message.channel.send ({
      embed: {
        color: "#c7c5c5",
        description:`matanee ${member} | 🍳  kicked cause => \`${reason}\`!`,    
      }

  }).catch(error => message.channel.send(error))
 {
        var reasonembed = new Discord.MessageEmbed()
            .addField('Action', 'KICK', true)
            .addField('Moderator', message.author.tag, true)
            .addField('Reason', "`" + reason + "`", true)
            .addField('whom',member.user.tag,true)
            .setFooter('User kicked ' + new Date())
            .setColor('#c7c5c5');
        modlog.send({
            embed: reasonembed
        })
    } {
        var cmdembed = new Discord.MessageEmbed()
            .addField('Action', 'KICK', true)
            .addField('Moderator', message.author.tag, true)
            .setColor('#c7c5c5')
            .setFooter('used at')
            .setTimestamp()
        cmdlog.send({
            embed: cmdembed
        })
    }
};    
  
 //BAN
 
 if (message.content.toLowerCase().startsWith(prefix + 'ban')) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
    return message.reply("Not having perms, still trying to kick someone | **;(**");
}

var member = message.mentions.members.first();
if (!modlog) {
   return message.reply ("well my logging channel maybe i lost my way")
}
  if (!member) {
  return message.reply("umm @mention should be of a valid wizard of our guild");
}
  if (!member.kickable) {
  return message.reply("deng this role might be higher,do i have kick perm? |can't kick the user")
  .then (m => m.delete({timeout :6000}));
}

var reason = args.slice(1).join(' ');

  if (!reason) {
  member.kick(`No Reason - by ${message.author}`)
  .catch(error => message.reply(`Sorry ${message.author} couldn't  be banned cause : ${error}`));
  message.channel.send ({
    embed: {
      color: "#c7c5c5",
      description: `**${member} was|🍳|  Banned| no reason given**`,
    }
  })
   message.delete()
  } else {
  member.send ({
    embed:{
      color: "BLACK",
      description: 'You have been banned for ' + "`" + reason + "`" + ` from ${message.guild.name}  if you think you where banned by mistake please contact **Support Team**.`,
    }
    }).catch(error => message.channel.send(`⚠ Unable to alert ${member} of reason \`${error}\`.`)).then (message => {
      member.kick(`${reason} - On command of ${message.author}`)
  .catch(error => message.reply(`sollie ${message.author} couldn't kick maybe cause ${error}`));
 member.send ({
      embed: {
        color: "#c7c5c5",
        description:"You have been banned for " + "`" + reason + "`" + " from `Dragneel's Server`. if you think you were banned by mistake please contact **Support Team**.",    
      }
      }).catch(error => console.log(error))
    message.delete({timeout:5000})
  })
  message.delete()
  } 

  message.channel.send ({
      embed: {
        color: "#c7c5c5",
        description:`matanee ${member} | 🍳  Banned cause => \`${reason}\`!`,    
      }

  }).catch(error => message.channel.send(error))
 {
        var reasonembed = new Discord.MessageEmbed()
            .addField('Action', 'BAN', true)
            .addField('Moderator', message.author.tag, true)
            .addField('Reason', "`" + reason + "`", true)
            .addField('whom',member.user.tag,true)
            .setFooter('User kicked ' + new Date())
            .setColor('#c7c5c5');
        modlog.send({
            embed: reasonembed
        })
    } {
        var cmdembed = new Discord.MessageEmbed()
            .addField('Action', 'BAN', true)
            .addField('Moderator', message.author.tag, true)
            .setColor('#c7c5c5')
            .setFooter('used at')
            .setTimestamp()
        cmdlog.send({
            embed: cmdembed
        })
    }
};    

  //Eval command\\
  if (message.content.toLowerCase().startsWith(prefix + "eval")) {
    if (message.author.id === config.owner) {
      const clean = (text) => {
        if (typeof text === "string")
          return text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
        else return text;
      };

      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), { code: "xl" });
      } catch (err) {
        var errEmbed = new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(bot.user.username, bot.user.avatarURL)
          .setTitle('Error!')
          .setDescription(`\`\`\`xl\n${clean(err)}\n\`\`\``)
        message.channel.send({embed: errEmbed});
    };
};
};
  
  if (message.content === 'prefix ' || message.content === 'vermi prefix') {
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

  if (message.content === "prefix " || message.content === "kawai prefix") {
    message.channel.send("My prefix is **" + prefix + "**.");
  }

  if (message.content == "prefix" || message.content === "morning") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Aye aye!, morning ");
    } else {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (message.mentions.members.size < 1) {
          message.channel.send("**very gd morning,new day ,new goals,get OP**");
        }
      }
    }
  }

  if (message.content == "prefix" || message.content === "Morning") {
    return message.reply("Aye aye!, morning ");
  }

  bot.muteUser = function (user, channel, callback) {
    var object = { readMessages: true, sendMessages: false };
    self.bot.overwritePermissions(channel, user, object, callback);
  };

  bot.unmuteUser = function (user, channel, callback) {
    var object = { readMessages: true, sendMessages: true };
    self.bot.overwritePermissions(channel, user, object, callback);
  };

  //Join Command\\
if (message.content.toLowerCase().startsWith(prefix + 'agree')) {
  let memberRole = message.guild.roles.cache.find(r => r.name === "Verified wizard");
message.member.roles.add(memberRole).catch(console.error);
message.delete()
};
  
 //VPING//
 if (message.content.toLowerCase().startsWith(prefix+'vping')) {
   message.delete()
 if (!message.member.hasPermission("MANAGE_MANAGES")){
    return;
  } else {
    if  (message.member.hasPermission('MANAGE_MESSAGES')){
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

  //Avatar Command\\
if (message.content.toLowerCase().startsWith(prefix + 'avatar')) {
    var avatarEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(bot.user.username)
    .setDescription('Here is ' + message.author.tag + ' avatar.')
    .setImage(message.author.displayAvatarURL);
message.channel.send({embed: avatarEmbed});
};
 
  
  
                                      

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
    message.channel.send(`**Mavis vermilion** was last awakened **${(bot.uptime / 60000).toFixed(0)} minutes** ago!`)
   };

 
  
  
  
  
 
  


  //VVPing Command\\
  if (message.content.toLowerCase().startsWith(prefix + "vping")) {
    if (!message.member.hasPermission("MANAGE SERVER")) {
      return;
    } else {
      if (message.member.hasPermission("MANAGE SERVER")) {
        if (message.mentions.members.size < 1)
          var pingEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("!PONG")
            .addField(
              "📶|Latency",
              `${new Date() - new Date(message.createdTimestamp)}ms`,
              true
            )
            .addField("💖|Mah Heart", `${Math.floor(bot.ws.ping)}ms`, true)
            .setFooter(
              "Ping for" + bot.user.username,
              bot.user.displayAvatarURL()
            )
            .setTimestamp();

        message.channel
          .send(pingEmbed)
          .then((m) => m.delete({ timeout: 3000 }));
      }
    }
  }

  //ping
  if (message.content.toLowerCase().startsWith(prefix + "ping")) {
    if (message.channel.id !== "684657636150345769") return null;
    {
      var pingEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("!PONG")
        .addField(
          "📶|Latency",
          `${new Date() - new Date(message.createdTimestamp)}ms`,
          true
        )
        .addField("💖|Mah Heart", `${Math.floor(bot.ws.ping)}ms`, true)
        .setFooter("Ping for" + bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

      message.channel.send(pingEmbed).then((m) => m.delete({ timeout: 4000 }));
    }
  }
  //uptime
  if (message.content.toLowerCase().startsWith(prefix + "uptime")) {
    message.channel.send(
      `**kawai chan** was last restarted **${(bot.uptime / 60000).toFixed(
        0
      )} minutes** ago!`
    );
  }
  });

bot.login(token);
