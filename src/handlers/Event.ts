import { Client, Routes, SlashCommandBuilder } from 'discord.js';
import { REST } from "@discordjs/rest";
import { readdirSync } from "fs";
import { join } from "path";
import { Event } from "../types.js";
import { color } from "../functions.js";

module.exports = async (client: Client) => {
    let eventsDir = join(__dirname, "../Events");

    readdirSync(eventsDir).forEach(async dir => {
        const files = readdirSync(`${eventsDir}/${dir}`).filter(file => file.endsWith('.js'));
        files.forEach(async file => {
            const event = require(`${eventsDir}/${dir}/${file}`).default
            event.once ? client.once(event.name, (...args) => event.execute(...args)) : client.on(event.name, (...args) => event.execute(...args));
            console.log(color("info", `🎊 Successfully loaded event ${color("variable", event.name)}!`))
        });
    })
};