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
   
  
bot.user.setActivity(`+help| Fun in FwZ.`, {
  type: "STREAMING",
  url:"https://www.twitch.tv/."}); 
});

 

 console.log("konichiwaa!");

bot.on("error", error => {
    console.log(error);
});




//Message Event\\
bot.on('message', message => {

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (message.author.bot) return;
if (message.channel.type === 'dm') return;

    if (message.content.toLowerCase().startsWith(prefix + 'test')) {
                    message.channel.send(
                        `Please insure that <@${bot.user.id}> has Administrator permissions on this server.`
                    );
                }
              
    if (message.content.startsWith(prefix + "invite")) {
                    const inviteembed = new Discord.MessageEmbed()
                        .setColor('#52fc03')
                        .setAuthor(bot.user.username, bot.user.displayAvatarURL())
                        .setTitle("Dragy's invite letter!")
                        .setURL('https://discord.gg/G35CMMj')
                        .setFooter('Dragy nub dev', 'https://cdn.discordapp.com/attachments/720837151926911026/721533324136284172/circle_best_logo.png');
                    message.channel.send(inviteembed);
                }
  
  //Help Command\\
if (message.content.toLowerCase().startsWith(prefix + 'help')) {
  var HelpEmbed = new Discord.MessageEmbed()
  .setColor('#64ff00')
  .setTitle('📬 Help Sent!')
  message.channel.send({embed:HelpEmbed});
  var Help2Embed = new Discord.MessageEmbed()
  .setAuthor('Help Page For ' + bot.user.username)
  .setColor('#64ff00')
  .setTitle('Reply with these cmd in server to get the inside commands')
  .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725312794643267584/helpimage.png')
  .addField(prefix + '**server**', '--Gets u our Server commands.``+server`and other `server cmd` can be used in <#684657636150345769> channel only')
  .addField(prefix + "**Heads**", "-- `☢│ Hᴇᴀᴅ ᴘɪʟʟᴀʀ'ꜱ〢` commands in server.")
  .addField(prefix + '**Mod**', '--Gives `Moderators`commands of server')
  .addField(prefix + '**Fun**', '--All Fun commands Dragy gave me.')
  .addField(prefix + '**Bot**', '--Sends Miss Vermi info commands.')
  .addField(prefix + '**General**', '--Gives general commands of everyones use.')
  .addField(prefix + 'Dragneel', "--Get Dragneel's **Youtube** and other **Social** platforms links")
  .setFooter(bot.user.username, bot.user.avatarURL());
  message.author.send({embed: Help2Embed});
};
//commands profile
 
  
  
  //server
  if (message.content.toLowerCase().startsWith(prefix + 'server')) {
   if (message.channel.id !== "684657636150345769") return null ;{
    var  serverembed = new Discord.MessageEmbed()
    .setColor('#f10505')
    .setTitle('🏡|Server commands!')
    message.channel.send({embed :serverembed});
    var server2embed = new Discord.MessageEmbed()
    .setAuthor ('Server cmd for'  +  bot.user.username)
    .setColor('#45e424')
    .setTitle('Use the commands below to get SERVER INFO')
    .setThumbnail('https://cdn.discordapp.com/attachments/721588221716201572/725314755677388851/damn_opfi_clan_logo_2.png')
    .addField(prefix + '**guildinfo**', '--Gets our guild idea.')
    .addField(prefix + '**agree**', 'Server Unlocking command._Works: only in `WELCOME` channel_')
    .addField(prefix + '**invite**',"--Gets u our **FAMILY'S**  invite Link")
    .addField(prefix + '**rules**,','--Get `RULES` of our Guild')
    .setFooter(message.author.username,message.author.displayAvatarURL(),'Dragy NUB dev');
      message.channel.send({embed: server2embed});
    
  }
  };
  
  //ADMINS
  if (message.content.toLowerCase().startsWith (prefix + 'heads')) {
    if (!message.member.hasPermission("MANAGE SERVER")) {
    return message.reply("Sorry, but it is restricted to <@&700767688158609478> use!");
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    var adminembed = new Discord.MessageEmbed()
    .setColor('#c00f35')
    .setAuthor("Pillar cmd's!")
    message.channel.send ({embed: adminembed});
    var admin2embed = new Discord.MessageEmbed()
    .setAuthor(" cmd's for `☢│ Hᴇᴀᴅ ᴘɪʟʟᴀʀ'ꜱ〢`")
    .setColor('#c00f35')
    .setTitle("Below cmd's are for Server Managers only")
    message.channel.send ({embed :admin2embed})
    
    
  }
  }
  }}
  
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
  
  if (message.content === 'prefix ' || message.content === 'vermi prefix') {
  message.channel.send('My prefix is **' + prefix + '**.')
};
  
  if (message.content =='prefix'|| message.content === 'morning') {
    message.channel.send ('**very gd morning,new day ,new goals,get OP**')
  }

  bot.muteUser = function (user, channel, callback) {
    var object = {"readMessages": false, "sendMessages": false};
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
  
  //Trust Command\\
if (message.content.toLowerCase().startsWith(prefix + 'trust')) {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!");
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Please provide a member to trust.')
  } else {
    var msg = message.mentions.members.first();
    const trustRole = message.guild.roles.cache.get('677432747958075392')
    msg.roles.add(trustRole).catch(console.error);
    var trustEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setColor('#ff4040')
    .setDescription(':white_check_mark: ' + msg.user.tag + ' is now trusted!,New mod OP!')
    message.channel.send({embed: trustEmbed})
   };
  };
 };
};
  
  //Untrust Command\\
if (message.content.toLowerCase().startsWith(prefix + 'untrust')) {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Sorry, you don't have permissions to do this!");
} else {
  if (message.member.hasPermission('MANAGE_ROLES')) {
  if (message.mentions.members.size < 1) {
    message.reply('Please provide a member to untrust.')
  } else {
    var msg = message.mentions.members.first();
    const trustRole = message.guild.roles.cache.get('677432747958075392')
    msg.roles.remove(trustRole);
    var untrustEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setColor('BLUE')
    .setDescription(':x: ' + msg.user.tag + ' is now untrusted!,nope u should get it back soon')
    message.channel.send({embed: untrustEmbed})
   };
  };
 };
}; 
  
  //Ping Command\\
if (message.content.toLowerCase().startsWith(prefix + 'ping')) {
  if (!message.member.hasPermission("MANAGE SERVER")){
    return;
  } else {
    if  (message.member.hasPermission('MANAGE SERVER')){
      if (message.mentions.members.size < 1)
  message.channel.send('Pinging...').then(sent =>{
    sent.edit(`**Pong! My Latency ${new Date() - new Date(message.createdTimestamp)}ms :earth_americas:**`)
});
   var pingEmbed = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setAuthor(`${bot.user.username}`)
   .setDescription(':heart: Heart Beat: ' + Math.floor(bot.ws.ping) + 'ms.');
   message.channel.send(pingEmbed)
   return;
  message.delete()
   };
 };
};  


  
  
  
  
  
  
  
  
                
                
});
  
                bot.login(token)