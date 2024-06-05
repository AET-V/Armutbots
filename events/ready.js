import check from "../utils/bot/check.js"

export default client => {

    client.once("ready", () => {
        console.log("Armud Bot Başlatılıyor..")

        check(client)
    })

}