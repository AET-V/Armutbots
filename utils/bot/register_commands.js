import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import { EmbedBuilder } from "discord.js"

export default async guild => {

    const { client } = guild
    const rest = new REST({ version: "9" }).setToken(process.env.token)
    const body = client.commands.map(command => command.slash_data)

    try {

        await rest.put(
            Routes.applicationGuildCommands(client.user.id, guild.id),
            { body: body }
        )

    } catch (e) {
        if (e.code == 50001) {
            const embed = new EmbedBuilder()
                .setDescription("Komutları yüklemek için gereken iznim yok! **(applications.commands)** Lütfen botu [bu linkten](https://discord.com/api/oauth2/authorize?client_id=1125785864350486601&permissions=8&scope=bot%20applications.commands) tekrar ekleyin.")
                .setColor("RED")

            const owner = await guild.fetchOwner()
            owner.send({ embeds: [embed] }).catch(() => { })
        }

    }

}


