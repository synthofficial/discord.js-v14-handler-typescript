import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder, Interaction, Client, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from "discord.js"
import { SlashCommand } from "../../types.js";
import { embed } from "../../functions.js";

const cmd : SlashCommand = {
    cmd: new SlashCommandBuilder()
    .setName("test")
    .setDescription("A test command")
    ,
    execute: async interaction => { 
        //This is a test modal, same way goes for buttons/select menus
        const modal = new ModalBuilder()
        .setCustomId("modal")
        .setTitle("Test modal")

        const testInput = new TextInputBuilder()
        .setCustomId("test")
        .setLabel("This is a test, put whatever")
        .setStyle(TextInputStyle.Short);

        const actionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(testInput)

        modal.addComponents(actionRow);

        await interaction.showModal(modal);

    },
    category: 'Misc'
}

export default cmd