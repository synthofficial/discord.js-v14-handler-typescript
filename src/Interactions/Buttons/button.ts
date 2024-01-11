import { ButtonBuilder, ButtonInteraction, Interaction, ActionRowBuilder, EmbedBuilder, MessageActionRowComponent } from "discord.js"
import { Button } from "../../types.js";

const button : Button = {
    name: "button",
    execute: async (interaction : ButtonInteraction) => { 
        //Your button code goes here
    },
}

export default button