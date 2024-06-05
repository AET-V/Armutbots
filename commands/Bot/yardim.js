import { EmbedBuilder } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders"

export const data = {
    name: "yardım-et",
    description: "Yardıma ihtiyacın var gibi gözüküyor.",

    execute(interaction) {

    }
}

export const slash_data = new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)
    .addStringOption(option =>
        option.setName("komut_adı")
            .setDescription("Bilgi almak istediğin komutu gir!")
            .setAutocomplete(true)
    )

