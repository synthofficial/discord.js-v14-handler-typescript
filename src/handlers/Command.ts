import { Client, Routes, SlashCommandBuilder } from 'discord.js';
import { REST } from "@discordjs/rest";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "../types.js";
import { color } from "../functions.js";

module.exports = async (client: Client) => {
    const slashCommands : SlashCommandBuilder[] =[];

    let slashCommandsDir = join(__dirname, "../SlashCommands");

    readdirSync(slashCommandsDir).forEach(async dir => {
        const files = readdirSync(`${slashCommandsDir}/${dir}`).filter(file => file.endsWith('.js'));
        files.forEach(async file => {
            const commandModule = require(`${slashCommandsDir}/${dir}/${file}`);
            const command: SlashCommand = commandModule.default;
            slashCommands.push(command.cmd);


            client.slashCommands.set(command.cmd.name, command);
        });
    })



    const rest = new REST({ version: "9"}).setToken(process.env.TOKEN);

    try {
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: slashCommands.map(command => command.toJSON()) }
        )
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, "1184229997335031818"),
            { body: slashCommands.map(command => command.toJSON()) }
        )


        console.log(color("info", `🔥 Successfully loaded ${color("variable", client.slashCommands.size)} slash command(s)`))
    } catch (e) {
        console.error(e);
    }

};