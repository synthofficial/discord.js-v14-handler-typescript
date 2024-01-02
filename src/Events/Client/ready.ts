import { ActivityType, Client } from 'discord.js';
import { Event } from "../../types.js";
import { color } from "../../functions.js";

const event : Event = {
    name: 'ready',
    once: true,
    execute : async(client : Client) => {
        console.log(color("info", `Logged in as ${color("variable", client.user?.tag)}`));

        const activities = [
            { name: `Discord.JS v14`, type: ActivityType.Competing },
            { name: `GitHub`, type: ActivityType.Watching },
            { name: `${client.guilds.cache.size}`, type: ActivityType.Listening }
        ]

        setInterval(function() {
            client.user?.setActivity(activities[Math.floor(Math.random() * (activities.length - 0 + 1) + 1)]) //Pick a random activity from the activities array every 5 seconds.
        }, 5000);
    }
}

export default event;