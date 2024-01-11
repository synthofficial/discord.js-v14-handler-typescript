import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, EmbedBuilder, Interaction, StringSelectMenuInteraction } from "discord.js"
import { SelectMenu } from "../../types.js";

const select : SelectMenu = {
    name: "selectmenu",
    execute: async (interaction : StringSelectMenuInteraction) => { 
        //Your select menu code goes here
    },
}

export default select