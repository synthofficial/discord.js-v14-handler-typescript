import { SlashCommandBuilder, CommandInteraction, Collection, PermissionResolvable, Message, AutocompleteInteraction, ChatInputCommandInteraction, TextBasedChannel, VoiceChannel, Guild, GuildChannel, GuildEditOptions, Client, ModalSubmitInteraction, ModalSubmitInteractionCollectorOptions, AwaitModalSubmitOptions } from "discord.js"
import mongoose from "mongoose"

export interface Button{
    name: string,
    execute: (interaction : ButtonInteraction) => void
}

export interface SelectMenu{
    name: string,
    execute: (interaction : StringSelectMenuInteraction) => void
}

export interface Modal{
    name: string,
    execute: (interaction : ModalSubmitInteraction) => void
}

export interface SlashCommand{
    cmd: SlashCommandBuilder,
    execute: (interaction : ChatInputCommandInteraction) => void, 
    autocomplete?: (interaction : AutocompleteInteraction) => void,
    modal?: (interaction : ModalSubmitInteraction<CacheType>) => void,
    category: string
}

export interface IGuild extends mongoose.Document{
    guildID: string,
    guildName: string,
}

export type GuildOption = keyof GuildEditOptions
export interface Event{
    name: string,
    once?: boolean | false,
    execute: (...args?) => void
}

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            TOKEN: string,
            CLIENT_ID: string,
            GUILD_ID: string,
            MONGO_URL: string,
            MONGO_DB_NAME: string,
        }
    }
}

declare module "discord.js"{
    export interface Client{
        slashCommands: Collection<string, SlashCommand>
        events: Collection<string, Event>
        buttons: Collection<string, Button>
        selectMenus: Collection<string, SelectMenu>
        modals: Collection<string, Modal>
    }
}