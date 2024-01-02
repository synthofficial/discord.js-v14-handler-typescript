import chalk from "chalk";
import { EmbedBuilder, Interaction, ColorResolvable } from "discord.js";
import { i18n } from "./util/i18n.js";

type colorTypes = "info" | "debug" | "error" | "variable" | "warn"

type embedColorTypes = "success" | "failed" | "info" | "warn"

const embedColors = {
    success: "#00ff00",
    failed: "#ff0000",
    info: "#ADD8E6",
    warn: "#FFA500"
}

const colors = {
    info: "#21587b",
    debug: "#dfb405",
    error: "#bd152f",
    variable: "#9bec1d",
    warn: "#ff9966"
}

export const color = (color: colorTypes, message: any) => {
    return chalk.hex(colors[color])(message);
}

export const checkConfig = () => {
    //Check if token was set.
    if(!process.env.TOKEN) return console.log(color("error", `[ERROR] Token was not found. Please set this in .env`))
    if(!process.env.CLIENT_ID) return console.log(color("error", `[ERROR] Client ID was not found. Please set this in .env`))
}

/**
 * 
 * @param title: The title of the embed
 * @param description : The description of the embed
 * @param color : The color of the embed (you can use a hex code, or values like "warn" or "info")
 */
export const embed = (title: string, description: string, color: embedColorTypes | string) => {
    const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(color as ColorResolvable)
    .setFooter({ text: i18n.__("embed.footer") })
    return embed;
}