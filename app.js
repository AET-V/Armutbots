import { Client, Status, ActivityType, Collection, } from "discord.js";
import { readdirSync } from "fs"
import 'dotenv/config'

const client = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"],

})


// 10 Saniyede değişen durum 
const liste = ["Armudistan'ın yıkılmış kalıntılarını", "Gözbebeğimiz Kemik Kadroyu", "Seni"]
setInterval(() => client.user.setPresence({ activities: [{ name: liste[Math.floor(Math.random() * liste.length)], type: ActivityType.Watching }], status: "dnd" }), 10 * 1000);



//Assignments
client.commands = new Collection();
client.embed = await import("./utils/bot/embed.js").then(m => m.default)



//Event Loader
readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default)
    event(client)
})

//Command Loader
readdirSync("./commands").forEach(category => {

    readdirSync(`./commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`).then(c => c)
        client.commands.set(command.data.name, command)
    })
})


client.login(process.env.token)
