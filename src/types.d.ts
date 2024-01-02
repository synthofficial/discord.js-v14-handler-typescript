import { SlashCommandBuilder, CommandInteraction, Collection, PermissionResolvable, Message, AutocompleteInteraction, ChatInputCommandInteraction, TextBasedChannel, VoiceChannel, Guild, GuildChannel, GuildEditOptions, Client } from "discord.js"
import mongoose from "mongoose"

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
    }
}