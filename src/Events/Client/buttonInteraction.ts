import { Interaction, EmbedBuilder, Client } from "discord.js";
import { Event } from "../../types.js";

/**
 * If you want to add another event, you can create a new file called whatever, example: autoComplete.ts
 * And set the name to interactionCreate so the event gets registed.
 */

const event : Event = {
    name: "interactionCreate",
    execute: async(interaction : Interaction) => {
        if(interaction.isButton()){
            let command = interaction.client.buttons.get(interaction.customId);
            if(!command) return;

            command.execute(interaction);

            //TODO: Cooldowns, permissions, modules (using MongoDB)
            //The above will be added at a later date :-)

        }
    }
}

export default event;