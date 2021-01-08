const Discord = require('discord.js');
const bot = new Discord.Client();

//Acceso y constantes 
const token = 'token de Discord Developer Portal';
const prefix = '!';
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){ //Analiza el comando a ejecutar
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

//Inicialización del bot - debbug
bot.on('ready', () =>{
    console.log("This bot is online!");
})

//Selector de commandos
bot.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        bot.commands.get('ping');
    } else if(command === 'stela'){
        bot.commands.get('stela').execute(message, args);
    }
})

bot.login(token);
