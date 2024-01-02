import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder, Interaction, Client } from "discord.js"
import { SlashCommand } from "../../types.js";
import { embed } from "../../functions.js";

const cmd : SlashCommand = {
    cmd: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns the bot's ping to Discord's API server.")
    ,
    execute: async interaction => { 

        return interaction.reply({ embeds: [embed("Ping!", `Pong! ${interaction.client.ws.ping}ms`, "warn")]})

    },
    category: 'Misc'
}

export default cmd