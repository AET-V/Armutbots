
import cooldown_control from "../utils/cooldown_control.js"
import register_commands from "../utils/bot/register_commands.js"
import auto_complete from "../utils/event-utils/autocomplete.js"


export default client => {
    const { embed } = client

    client.on("interactionCreate", interaction => {
        if (interaction.isAutocomplete()) { auto_complete(interaction) }
        if (!interaction.isCommand()) return

        const command = client.commands.get(interaction.commandName)
        if (!command) return


        //Permission Control

        if (command.data.permission && !interaction.member.permission.has(command.data.permission)) return interaction.reply({
            embeds: [
                embed(`Bu komutu kullanmak için **${command.data.permission}** yetkisine ihtiyacın var ve bu yetki sende yok. Loser.`, "Red")
            ]
        })

        //Cooldown Control
        const cooldown = cooldown_control(command, interaction.member.id)
        if (cooldown) return interaction.reply({
            embeds:
                [embed(`Hop Kanka! Sakin ol. Bana dinlenmek için **${cooldown}** saniye ver.`, "Red")]
        })

        //Execute command

        try {
            command.data.execute(interaction)
        } catch (e) {

            interaction.reply({
                embeds:
                    [embed("Bana söylediğin şeyi yapmaya çalışırken bir sorunla karşılaştım sanırım.. :point_right::point_left: Rica etsem bu durumu Armud'a söylermisin?", "Red")]

            })
            console.log(e)
        }

    })

}
