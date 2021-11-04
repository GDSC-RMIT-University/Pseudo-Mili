// Require the necessary discord.js classes
const {Client, Intents} = require('discord.js');
const cron = require('cron');
const {guildId, token} = require('./config.json');
const Discord = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, 'GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGES',
        'DIRECT_MESSAGES', Intents.FLAGS.GUILD_MESSAGES]
});

var role = ''

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Send an automated announcement on Tuesday at 11 AM
let tuesday = new cron.CronJob('0 11 * * 2', () => {
    var guild = client.guilds.cache.get(guildId);
    role = guild.roles.cache.find(r => r.name === "@everyone");

    const tuesdayEmbed = new Discord.MessageEmbed()
    .setTitle("Hallo, don't forget to **RSVP** to our *stupefying* event this Friday :dna:")
    .setDescription(`\nhttps://gdsc.community.dev/rmit-university-melbourne/`)
    .setColor("#01ACFF");

    client.channels.cache.get('861456294888472596').send({embeds: [tuesdayEmbed], content: role.name});
})

// Send an automated announcement on Thursday at 11 AM
let thursday = new cron.CronJob('0 11 * * 4', () => {
    var guild = client.guilds.cache.get(guildId);
    role = guild.roles.cache.find(r => r.name === "@everyone");

    const thursdayEmbed = new Discord.MessageEmbed()
    .setTitle("*Salve, fabulous people :rainbow: :rainbow: :rainbow:*")
    .setDescription(`\n Just popping here to remind all of you to make sure to **RSVP** to our event **TOMORROW** https://gdsc.community.dev/rmit-university-melbourne/`)
    .setColor("#01ACFF");

    client.channels.cache.get('861456294888472596').send({embeds: [thursdayEmbed], content: role.name});
})

// Send an automated announcement on Friday at 5:30 PM
let fridayEve = new cron.CronJob('30 17 * * 5', () => {
    var guild = client.guilds.cache.get(guildId);
    role = guild.roles.cache.find(r => r.name === "@everyone");

    const fridayEveEmbed = new Discord.MessageEmbed()
    .setTitle("**1 HOUR TO GO ** :bulb:")
    .setDescription(`\nGetcho butt over here: https://gdsc.community.dev/rmit-university-melbourne/`)
    .setColor("#01ACFF");

    client.channels.cache.get('861456294888472596').send({embeds: [fridayEveEmbed], content: role.name});
})

// Send an automated announcement on Friday at 6:30 PM
let fridayFinal = new cron.CronJob('30 18 * * 5', () => {
    var guild = client.guilds.cache.get(guildId);
    role = guild.roles.cache.find(r => r.name === "@everyone");

    const fridayFinalEmbed = new Discord.MessageEmbed()
    .setTitle("*PSSSTTTT!!!*  **THE TIME HAS COME** :dancer: :fire: ")
    .setDescription(`\nJoin through here: https://gdsc.community.dev/rmit-university-melbourne/`)
    .setColor("#01ACFF");

    client.channels.cache.get('861456294888472596').send({embeds: [fridayFinalEmbed], content: role.name});
})

// Monday meeting
let mondayMeeting = new cron.CronJob('30 11 * * 1', () => {
    var guild = client.guilds.cache.get(guildId);
    core = guild.roles.cache.find(r => r.name === "Core");

    client.channels.cache.get('861457216564363284').send(`${core}, meeting today at 3:30 PM!!!!! If can't make it, well, tell the real Mili!`);
})


// Friday meeting
let fridayMeeting = new cron.CronJob('00 11 * * 5', () => {
    var guild = client.guilds.cache.get(guildId);
    core = guild.roles.cache.find(r => r.name === "Core");

    client.channels.cache.get('861457216564363284').send(`${core}, meeting today at 3:00 PM!!!!! If can't make it, well, tell the real Mili!`);
})

// Entice people to join the hackathon
// Send an automated announcement on Thursday at 11:00 AM reminding people of HackVision
let hack = new cron.CronJob('00 11 * * 4', () => {
    var guild = client.guilds.cache.get(guildId);
    role = guild.roles.cache.find(r => r.name === "@everyone");

    const hackEmbed = new Discord.MessageEmbed()
    .setTitle("Join HackVision on the 20th Nov to make a change!")
    .setDescription(`\nHackVision 2021: https://gdsc.community.dev/e/mcpbrj/`)
    .setColor("#01ACFF");

    client.channels.cache.get('861456294888472596').send({embeds: [hackEmbed], content: role.name});
})

let hack2 = new cron.CronJob('00 11 * * 1', () => {
    var guild = client.guilds.cache.get(guildId);
    role = guild.roles.cache.find(r => r.name === "@everyone");

    const hack2Embed = new Discord.MessageEmbed()
    .setTitle("To Innovate, have fun and win prizes, join HackVision today :fire:")
    .setDescription(`\nJoin HackVision 2021: https://gdsc.community.dev/e/mcpbrj/\nP.S Beginners are highly encouraged to join :bulb:`)
    .setColor("#01ACFF");

    client.channels.cache.get('861456294888472596').send({embeds: [hack2Embed], content: role.name});
})

// tuesday.start()
// thursday.start()
// fridayEve.start()
// fridayFinal.start()
hack.start()
hack2.start()

mondayMeeting.start()
fridayMeeting.start()


// Login to Discord with your client's token
client.login(token);
