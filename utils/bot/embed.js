import { EmbedBuilder } from "discord.js"

export default (description, color = "Green", author = "Armut Bot") => {

    const response = new EmbedBuilder()
        .setDescription(description)
        .setColor(color)
        .setAuthor({ name: author })//footerdada var

    return response
}