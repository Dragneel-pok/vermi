
const Discord = require("discord.js");
require("./server.js");
const PREFIX = "+";


var bot = new Discord.Client();
const Admin = process.env.adminrole
const TOKEN =process.env.BOT_TOKEN


bot.on("ready", () => {
    console.log("konichiwaa!");
   var word = ["with Dragneel", "Feary Wizards"];
  let i = 0;
  bot.user.setActivity(word[0]);
  i++;
  setInterval(() => {
    if (i >= word.length + 1) {
      i = 0;
    }
    if (word[i] === "Feary Wizards") {
      let action = { type: 'WATCHING' };
      bot.user.setActivity(word[i], (action));
    } else if (word[i] === "with Dragneel") {
      let action = { type: 'PLAYING' };
      bot.user.setActivity(word[i], (action));
    } else {
      // something else
    }
    i++;
  }, 1000 * 15); // 30 = 30s || 1000* 1 = 1s
});
   


bot.on("error", error => {
    console.log(error);
});

bot.on("message", function (message) {
    if (!message.guild) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();


                let serverid = 672697536917536778;

                let adminrole = Admin;
                let suggestdelay = 12000;
                let loopdelay = 259200000; //threedays: 259200000 (IN MS)
                let timeinhours = (loopdelay / 3600000).toFixed(2);
                              

                if (message.content.startsWith(PREFIX + 'test')) {
                    message.channel.send(
                        `Please insure that <@${bot.user.id}> has Administrator permissions on this server.`
                    );
                }
                
                
              
  
                if (command === "ping") {
                  const embed = new Discord.MessageEmbed()
                 .setThumbnail(bot.user.displayAvatarURL())
                  .setAuthor("NuuB")
                  .setColor("RED")
                  .setDescription(":ping_pong: **!Pong**")
                  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
                  .setTimestamp()
                    message.channel.send(embed);
                } else if (message.content.startsWith(`${PREFIX}beep`)) {
                    message.channel.send("**!Boop.**");
                }

                if (message.content.startsWith(PREFIX + "invite")) {
                    const inviteembed = new Discord.MessageEmbed()
                        .setColor('#52fc03')
                        .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
                        .setTitle("Dragy's invite letter,Sir!")
                        .setURL('https://discord.gg/G35CMMj')
                        .setFooter('Dragy nub dev', 'https://cdn.discordapp.com/attachments/720837151926911026/721533324136284172/circle_best_logo.png');
                    message.channel.send(inviteembed);
                }
                let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };  
                if (command === "server") {
                  const serverembed = new Discord.MessageEmbed()
                  .setcolor('#00c5fc')
                  .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
                  .setTitle('**Made with LOVE**')
                  .addField("Name", message.guild.name, true)
                  .addField("ID", message.guild.id, true)
                  .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
                  .addField("Region", region`${message.guild.region}`, true)
                  .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
                  .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`, true) 
                  .setThumbnail(message.guild.iconURL)
                  message.channel.send(serverembed);
                  }
                
});
  
                bot.login(TOKEN)