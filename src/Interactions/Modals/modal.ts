import { AwaitModalSubmitOptions, ModalSubmitInteraction, StringSelectMenuInteraction } from "discord.js"
import { Modal } from "../../types.js";

const modal : Modal = {
    name: "modal",
    execute: async (interaction : ModalSubmitInteraction) => { 
        const { fields, message, user } = interaction;
        console.log(fields)
    },
}

export default modal