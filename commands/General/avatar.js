import { EmbedBuilder } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders"

export const data = {
    name: "avatar",
    description: "Bana söylediğin kişinin resmini gösterebilirim (Bunun legal olduğundan emin değilim)",

    execute(interaction) {

        const target = interaction.options._hoistedOptions?.[0]?.member || interaction.member
        const avatar = target.displayAvatarURL({ dynamic: true, size: 1024 })

        const responseEmbed = new EmbedBuilder()
            .setTitle(`Başardım! ${target.displayName} adlı kullanıcın avatarını 4k HD bir şekilde buldum! (Umarım bu legaldir)`)
            .setDescription(`Avatarı  10K HD izlemek için [BANA BAS](${avatar})`)
            .setColor("Green")
            .setImage(avatar)

        interaction.reply({ embeds: [responseEmbed] })
    }
}

export const slash_data = new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)
    .addUserOption(option =>
        option.setName("kullanıcı")
            .setDescription("Kimin fotoğrafını illegal yollarla elde edeyim?")

    )
