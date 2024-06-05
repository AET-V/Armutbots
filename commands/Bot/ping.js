import { EmbedBuilder } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders"

export const data = {
    name: "ping",
    description: "Discord mu yavaşmış yoksa benmi yavaşım görelim!",

    execute(interaction) {
        const { ws } = interaction.client
        const discord_ping = ws.ping
        const bot_ping = Math.abs(Date.now() - interaction.createdTimestamp)

        const response = new EmbedBuilder()
            .setColor("Green")
            .addFields(
                { name: "Discord Gecikmesi", value: `${discord_ping}ms! (Bu ne hız :skull:)`, inline: true },
                { name: "Benim Gecikmem", value: `${bot_ping}ms! (Bu ne hız :sunglasses:)`, inline: true },
            )
        interaction.reply({ embeds: [response] })
    }
}

export const slash_data = new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)

