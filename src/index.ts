import { Client, GatewayIntentBits, Collection, PermissionFlagsBits } from 'discord.js';
const { Guilds, MessageContent, GuildMessages, GuildMembers, GuildVoiceStates } = GatewayIntentBits
const client = new Client({ intents:[ Guilds, MessageContent, GuildMessages, GuildMembers, GuildVoiceStates ] })
import { SlashCommand } from "./types.js";
import { config } from 'dotenv';
import { readdirSync } from "fs";
import { join } from "path";
import { checkConfig } from './functions.js';

config() //Initialise dotenv.

client.slashCommands = new Collection<string, SlashCommand>();

checkConfig(); //We run check config to see if we are missing a token or client id.

const handlers = join(__dirname, "./handlers")
//Register handlers
readdirSync(handlers).forEach(handler => {
    if(!handler.endsWith(".js")) return;

    require(`${handlers}/${handler}`)(client);
})

client.login(process.env.TOKEN); //Login to bot.