import { Collection } from "discord.js";
const cooldowns = new Collection()


export default (command, user_id) => {

    if (!cooldowns.has(command.data.name)) {
        cooldowns.set(command.data.name, new Collection())

    }

    const now = Date.now()
    const timestamps = cooldowns.get(command.data.name)
    const cooldowntime = (command.cooldown || 5) * 1000

    if (timestamps.has(user_id)) {
        const expiration = timestamps.get(user_id) + cooldowntime
        if (now < expiration) {
            const timeLeft = Math.round((expiration - now) / 1000)
            return timeLeft
        }

        return false
    }
    else {
        timestamps.set(user_id, now)
        setTimeout(() => timestamps.delete(user_id), cooldowntime);
        return false
    }
}