import { Client, Routes, SlashCommandBuilder } from 'discord.js';
import { REST } from "@discordjs/rest";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "../types.js";
import { color } from "../functions.js";

let index = 0;

module.exports = async (client: Client) => {
    let interactionsDir = join(__dirname, "../Interactions");

    readdirSync(interactionsDir).forEach(async dir => {
        const files = readdirSync(`${interactionsDir}/${dir}`).filter(file => file.endsWith('.js'));
        files.forEach(async file => {
            const module = require(`${interactionsDir}/${dir}/${file}`).default;

            if(module.name == undefined) return console.log(color("error", `❌ ${file} does not have a name.`))

            switch(dir.toLowerCase()){
                case "buttons":
                    client.buttons.set(module.name, module);
                    
                case "selectmenus" || "select menus":
                    client.selectMenus.set(module.name, module);

                case "modals":
                    client.modals.set(module.name, module);
            }
            index++;
        });
    });

    console.log(color("info", `🎊 Successfully loaded ${color("variable", index)} interactions!`))

};