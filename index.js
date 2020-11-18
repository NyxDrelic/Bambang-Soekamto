const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require("ytdl-core");

const { Player } = require("discord-player");
const player = new Player(bot);
bot.player = player;


const prefix = '/';
const queue = new Map();
bot.on("ready", function (){
  bot.user.setActivity("Botnya Barong");
  console.log(`${bot.user.tag} bot telah online`);
  
})

bot.on('message', async message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const serverQueue = queue.get(message.guild.id);

  //commands
  if(message.content.startsWith(`${prefix}ping`)) {
    const start = Date.now()
    message.channel.send(":ping_pong: Ping.. mencari ping..").then(message => {
      
    const end = Date.now()
    message.edit(`:ping_pong: Pong! kamu membutuhkan waktu **${(end - start)}**ms!`)
    })
      }
    });



bot.login('Nzc3NzMyMTE1MjIzMDE5NTgy.X7HteQ.clQpqc0awrtFST-7MrRcV7_j8CA');