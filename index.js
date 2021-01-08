const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Nzk1ODg4MDU3OTExNjA3MzA2.X_P6gw.lsez1oSqhsCg09wsVmQ1YZ5_HX0';

const prefix = '-';

bot.on('ready', () =>{
    console.log("This bot is online!");
})



bot.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
})

bot.login(token);

