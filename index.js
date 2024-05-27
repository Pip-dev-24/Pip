const DISCORD_TOKEN = process.env["DISCORD_TOKEN"];
const { Client, GatewayIntentBits } = require("discord.js");
const { CommandHandler } = require('djs-commander');
const path = require('path');
const pogger = require("pogger");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
  testServer: '1244324396907237406',
});

client.login(DISCORD_TOKEN).catch((error) => {
  pogger.error(`[CRASH]`, "Failed to login: " + error);
});