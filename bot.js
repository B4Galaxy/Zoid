const Discord = require("discord.js");


const TOKEN =  "NDAwMzYwNDg0Njk3NTM4NTcw.DTbiMA.NvnJbeDxQ8HXmQaMidq2nwaXEW8"
const PREFIX = "-"

var bot = new Discord.Client();

bot.on("ready", function() {
  bot.user.setGame(`-help | v2 | ${bot.guilds.size} servers! WOW`,'https://twitch.tv/123silly');
    console.log(`Started bot as: ${bot.user.tag}!`);
});

bot.on("guildMemberAdd", function(member) {
member.guild.channels.find("name","join-leave").sendMessage(member.toString() + " welcome to the server! Make sure to read rules so you dont get punished! Good Luck Have Fun!");
console.log(`[SPY] A member joined a server!`)
member.addRole(member.guild.roles.find("name", "Member"));
});

var MemeL = [
'https://www.youtube.com/watch?v=lXMskKTw3Bc',
'https://imgur.com/gallery/EQ7aabW',
'https://www.youtube.com/watch?v=fd2AjG9RaKs',
'https://www.youtube.com/watch?v=P1-uCWIjZWM',
'https://www.youtube.com/watch?v=AuRXVMSG3po',
'https://www.youtube.com/watch?v=5dbG4wqN0rQ',
'https://www.youtube.com/watch?v=ZYlj5Fpk2t8',
'https://www.youtube.com/watch?v=8GE_qFURqq0',
'https://www.youtube.com/watch?v=QBPVPbLjCHw',
'https://www.youtube.com/watch?v=9S-3Uk5-Zsg',
'https://youtu.be/2A9oCUc-COY?t=7s',
'https://www.youtube.com/watch?v=UcRtFYAz2Yo',
'http://youareanidior.org',
'http://omfgdogs.com',
'I am an alien. https://www.youtube.com/watch?v=AW9NgidiUsY (whats wrong with him?)'
];

var Cats = [
'http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16122946-500-313.jpg',
'https://i.ytimg.com/vi/cbP2N1BQdYc/maxresdefault.jpg',
'https://i.ytimg.com/vi/abVsdp3i34k/maxresdefault.jpg',
'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
'https://i.pinimg.com/736x/b1/88/31/b18831f96720e907c4769168687d7fd1--cat-lovers-adorable-animals.jpg',
'https://i.pinimg.com/736x/46/ea/93/46ea9346ef8df3bf00a97f5a91747f33--kitty-cats-cute-adorable-cats.jpg',
'http://s4.thingpic.com/images/xj/8f2gBmoEaViv3wTTYDDrbR3A.jpeg',
'https://i.ytimg.com/vi/9JNkS3QGT6U/maxresdefault.jpg',
'http://a.fod4.com/images/user_photos/1343865/335cd5249b648648fb0b086282cbaf32_original.jpg',
'https://i.pinimg.com/736x/58/c9/ea/58c9eadb259b3caf945540d0fa6b123d--tabby-cats-kitty-cats.jpg',
'https://i.pinimg.com/originals/a3/9b/d9/a39bd9b96eaa4bd6a7ca902bf9ef1475.jpg',
'https://i.pinimg.com/736x/65/a8/13/65a813e23a297305035a11c7d92ccbc4--cute-black-cats-black-kittens.jpg',
];

var roasts = [
  ', you look like you are from hell not heaven.',
  ', i think your parents think your life is a joke, arent they?',
  ', Hey, did you heard that your life is a joke?',
  ', are you bad at discord or something?',
  ', You know you are only the member of the bot and you cant use all commands in it.',
  ', Are you too lazy to find secret commands or what?',
  ', Are you too lazy to use other commands than this one?',
  ', Are you going to the hospital tomorrow or something?',
  ', When you die are you going to hell or heaven?',
  ', Did you ever thinked about killing yourself?',
  ', Did you know staying outside 24/7 heals you? Try it.',
  ', I know good place for you. Its called **Middle Of The Ocean**.',
];

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "chelp":
            message.delete("chelp")
            console.log(`Help message has been sent to <@${message.author.id}> !`)
            message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm!`)
            var embedt = new Discord.RichEmbed()
            .setTitle("Music Commands")
            .setDescription(':robot: Here are music commands you can use: :robot:')
            .setThumbnail ('https://ak4.picdn.net/shutterstock/videos/10035044/thumb/1.jpg')
            .addField(`-play [URL/TITLE/PLAYLIST]`, `Plays good quality music :wink:`)
            .addField(`-stop`, `Stops playing music and clears queue.`)
            .addField(`-volume [0 - 150]`, `Sets volume of music.`)
            .addField(`-skipto [number of song in queue]`, `Skips the queue to song what you wrote.`)
            .addField(`-pause`, `Pauses current song.`)
            .addField(`-forceskip`, `Force skips the song`)
            .addField(`-remove [ALL/Position]`, `Removes the song or other.`)
            .addField(`-nowplaying`, `You can now see whats playing.`)
            .addField(`-queue`, `Queue of the songs in your server.`)
            .addField(`-shuffle`, `Shuffles songs you have added.`)
            .setFooter("")
            .setColor(0x1ab517)
            message.author.sendEmbed(embedt)
           var embedth = new Discord.RichEmbed()
           .setTitle("Fun Commands")
           .setDescription(":smiley: Some Fun Commands :smiley:")
           .addField(`-dankmemes`, `Dank memes generator...`)
           .addField(`-kill [mention]`, `Kills a user you mentioned.`)
           .addField(`-afk`, `Makes you afk so no one disturbs you!`)
           .addField(`-unafk`, `Makes You No Longer afk.`)
           .addField(`-cutecat`, `Sends a cute cat.`)
           .addField(`-hello`, `Says hello to LightBlue / Responses: -good -bad -sad`)
           .addField(`-userinfo`, `Tells some information about you.`)
           .addField(`-pm [text]`, `PMs you the text you wrote | **FEATURE GLITCHED OUT!!**`)
           .addField(`-ping`, `Says Pong!`)
           .addField(`-8ball [Question]`, `You ask a question and LightBlue randomly answers!`)
           .setFooter("")
           .setColor(0xf44141)
           message.author.sendEmbed(embedth)
           var embedf = new Discord.RichEmbed()
           .setTitle(`Moderation Commands`)
           .setDescription(`:hammer: Kicks, Bans etc. :hammer:`)
           .addField(`-kick [mention]`, `Kicks a member. | **REASONS OF KICKS NOT ADDED**`)
           .addField(`-ban [mention]`, `Bans a member. | **REASONS OF BANS NOT ADDED**`)
           .addField(`-joinhelp`, `Instructions how to set up autorole and join messages!`)
           .setFooter("")
           .setColor(0x29a7d8)
           message.author.sendEmbed(embedf)
           var embedfiv = new Discord.RichEmbed()
           .setTitle(`Pranks!`)
           .setDescription(`:rofl: With these commands you can prank your friends! :rofl:`)
           .addField(`-grass`,`Plays Spongebob mario remix in the voice chat you are!`)
           .addField(`-chilledwindows`, `Plays a windows error sounds music!`)
           .addField(`-airhorn`, `Plays little eisteins airhorn remix!`)
           .addField(`-brainpower`, `Plays whole song of Brain Power!`)
           .addField(`-fakeping`, `Sends a discord notification`)
           .addField(`-win`, `Plays a winner epic song!`)
           .setFooter("Made by Riskii | Zoid")
           .setColor(0xad0505)
          message.author.sendEmbed(embedfiv)
           var embedfi = new Discord.RichEmbed()
           .setTitle(`Secret Commands`)
           .setDescription(`:cloud_lightning: **SECRET COMMANDS**\nThere are some secret commands you need to guess! Good Luck! :cloud_lightning:`)
           .setFooter("")
           .setColor(0x42008e)
           message.author.sendEmbed(embedfi)
           message.author.sendMessage(`You can invite me here: https://discordapp.com/oauth2/authorize?client_id=389489277358047265&scope=bot&permissions=2146958591&response_type=code`);
           message.author.sendMessage(`I Am Partnered And Friends With Other Coders They Are @Telk (Account Disabled Currently) @123silly (Creater Of LightBlue)`);
           break;
           case "servers":
           message.delete("servers");
          message.channel.sendMessage(bot.guilds.map(g=>g.name).join(", "));
           break;
case "reloadthebot":
message.delete("reloadthebot")
console.log(`<@${message.author.id}> has reloaded LightBlue!`);
message.author.sendMessage("**Reload** -> To confirm please type -kill");
break;
         case "hello":
             message.delete("hello")
             message.channel.sendMessage("Hello! How are you?");
            break;
            case "good":
                message.delete("good")
                message.channel.sendMessage("I am good too :D");
               break;
               case "bad":
                   message.delete("bad")
                   message.channel.sendMessage("Why bad? ;n; ");
                  break;
                  case "sad":
                      message.delete("sad")
                      message.channel.sendMessage("Why sad? ;n;");
                     break;
               case "invite":
                   message.delete("invite")
                   console.log(`[SPY] Ohh yea! <@${message.author.id}> wants to invite me! :wink:`);
                   message.channel.sendMessage("You can invite me here: https://discordapp.com/api/oauth2/authorize?client_id=400360484697538570&permissions=8&scope=bot");
                  break;
                  case "kys":
                      message.delete("kys")
                      message.channel.sendMessage(":cry: why i need to kill myself?");
                     break;
                     case "magik":
                         message.delete("magik")
                         message.channel.sendMessage("M a g i k");
                        break;
                        case "zoid":
                            message.delete("zoid")
                            message.channel.sendMessage("**Zoid x Huncho**");
                            break;
                                  case "ping":
                                         message.delete("ping")
                                         message.channel.sendMessage("Your Ping Is 0ms");
                                        break;
                                        case "pm":
                                      message.delete("pm")
                                      message.author.sendMessage(args.join(" "));
                                      break;
                                        case "afk":
            message.delete("afk")
            console.log(`<@${message.author.id}> is now afk.`);
            message.channel.sendMessage(`**Notice:** <@${message.author.id}> **is afk! Dont disturb this user!**`)
            message.author.sendMessage().setAFK
            break;
            case "unafk":
message.delete("unafk")
console.log(`<@${message.author.id}> is no longer afk.`);
message.channel.sendMessage(`**Notice:** <@${message.author.id}> **is no longer afk!**`)
break;
case "support":
message.channel.sendMessage('Support Me At Paypal https://wwww.paypal.me/GDragon601')
break;
case "commands":
message.delete("commands")
message.channel.sendMessage("Sorry about that! The command is -chelp!")
break;
case "help":
message.delete("help")
console.log(`<@${message.author.id}> Wanted -help`);
message.channel.sendMessage("**Hi I'm Zoid #[Zoid x Huncho] Also Do -chelp :D!**");
break;
case "hcf":
message.channel.sendMessage("**Specially For @Plater#3777!**");
break;
case "userinfo":
message.delete("userinfo")
console.log(`<@${message.author.id}> is using userinfo!`);
var ui = new Discord.RichEmbed()
.setTitle(`--{ Zoid User Info }--`)
.setDescription(`<@${message.author.id}>'s Info:`)
.setThumbnail(message.author.avatarURL)
.addField("Account Created:", `${message.author.createdAt}`)
.addField(`Username:`, `${message.author.username}`)
.addField(`Status:`,`${message.author.presence.status}`)
.addField(`Avatar:`, `${message.author.avatarURL}`)
.addField(`Game:`, `${message.author.presence.game.name}`)
.addField("ID:", `${message.author.id}`)
.setFooter("")
.setColor(0xff0000)
message.channel.sendEmbed(ui)
break;
//--------------------
case "joinhelp":
message.delete("joinhelp")
console.log(`<@${message.author.id}> uses JoinHelp!`);
message.channel.sendMessage(`**How to use join?** First you need to create role called **Member** and create text channel named join-leave! `)
break;
//--------------------
case "kill":
message.delete("kill")
console.log(`<@${message.author.id}> killed someone...`);
let user = message.mentions.users.first();
var killembed = new Discord.RichEmbed()
.setTitle(`Aww! That hurts!`)
.setDescription(`${user.username} got killed by ${message.author.username}! I think that hurts!`)
.setThumbnail(`http://bestanimations.com/Military/Weapons/gun-animated-gif-7.gif`)
.setFooter(``)
.setColor(0xf4ad42)
message.channel.sendEmbed(killembed)
break;
//--------------------

case "slap":
message.delete("slap")
console.log(`<@${message.author.id}> slapped someone...`);
let usert = message.mentions.users.first();
var slapembed = new Discord.RichEmbed()
.setTitle(`Woah!! That was hard one!`)
.setDescription(`${usert.username} got slapped by ${message.author.username}! It might hurt...`)
.setThumbnail(`https://images-ext-2.discordapp.net/external/TP1AThYe88JEoR5DQJ-u__RgQYYc25_MVRMo6S8gK1M/https/cdn.weeb.sh/images/rJrnXJYPb.gif`)
.setFooter(``)
.setColor(0xf4ad42)
message.channel.sendEmbed(slapembed)
break;
//--------------------
case "roast":
message.delete("roast")
console.log(`<@${message.author.id}> roasted someone...`);
let rs = message.mentions.users.first();
message.channel.sendMessage(`${rs.username}` + roasts[Math.floor(Math.random() * roasts.length)])
break;
//--------------------



//--------------------
break;
case "serverinfo":
message.delete("serverinfo")
var sie = new Discord.RichEmbed()
.setTitle(`--{ Zoid Server Info }`)
.setDescription(`The information about this guild is here:`)
.addField(`Name:`, message.guild.name, true)
.addField(`ID:`, message.guild.id, true)
.addField(`Owner:`, message.guild.owner, true)
.addField(`Server Region:`, message.guild.region, true)
.addField(`Channels:`, message.guild.channels.size, true)
.addField(`Membercount:`, message.guild.memberCount, true)
.addField(`Server Created At:`, message.guild.createdAt, true)
.setColor(0xf4ad42)
message.channel.sendEmbed(sie)
break;
case "plater":
message.delete("plater")
message.channel.sendMessage("99% Same Skills As Riskii :D Wink Wink");
break;
case "cutecat":
message.delete("cutecat")
message.channel.sendMessage(Cats[Math.floor(Math.random() * Cats.length )]);
break;
case "kurltepes":
message.channel.sendMessage("Best Person <3 :heart: I love Kurl Tepes. But @Advison is trash tho");
break;
// --------------------------
case "dankmemes":
message.delete("dankmemes")
message.channel.sendMessage("Generated **DANK MEME**!")
message.channel.sendMessage(MemeL[Math.floor(Math.random() * MemeL.length )]);
break;
case "kick":
// Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send(":x: **No Permissions** :x:");
        });
break;
case "ban":
    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage("Member banned.");
    } else {
      return message.reply(":x: **No Permissions** :x:");
    }
break;

// --------------------------

bot.on("guildCreate", guild => { //when the bot is added to the guild
guild.defaultChannel.sendMessage(`Oh hai there!\nSomeone just dropped me here... I dont know who!\nOkay im going to say some things about myself.\nI am **LightBlue*! Coded in Discord.JS and Atom.io by B4Galaxy (best dev <3)!\nIf you want to start using me please start with -help so you can know commands and other awesome things about me!`);
      console.log(`I have been added to: ${guild.namme} (id: ${guild.id}) (members: ${guild.memberCount})`); //sends consxxole message

    }) //end

    bot.on("guildDelete", guild => { //when the bot is removed from a guild

      console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`); //sends console the message here

    }); //end

// --------------------------

case "prune":

if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("An error has occured while clearing whole channel... :cry:")})
        }

break;

// --------------------------
case "grass":
message.delete("grass");
// Only try to join the sender's voice channel if they are in one themselves
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.author.sendMessage(`Im playing **Grass.mp3** prank in the VoiceChat you are...`);
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playArbitraryInput('http://macius.bts.net.pl/Grass.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;
// --------------------------

case "chilledwindows":
message.delete("chilledwindows");
// Only try to join the sender's voice channel if they are in one themselves
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.author.sendMessage(`Im playing **chilledwindows.mp3** prank in the VoiceChat you are...`);
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./chill.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;

// --------------------------

case "win":
message.delete("win");
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./win.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;

// --------------------------

case "airhorn":
message.delete("airhorn");
message.author.sendMessage(`Im playing **airhorn.mp3** prank in the VoiceChat you are...`);
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./airhorn.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;

// -------------------------

case "brainpower":
message.delete("brainpower");
message.author.sendMessage(`Im playing **brainpower.mp3** prank in the VoiceChat you are...`);
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./brain.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;
// --------------------------

case "fakeping":
message.delete("fakeping");
message.author.sendMessage(`Im playing **fakeping.mp3** prank in the VoiceChat you are...`);
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./ping.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;
// --------------------------
            }
});

bot.login(process.env.BOT_TOKEN);
