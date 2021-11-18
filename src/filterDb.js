import getForm from "./getForm.js";
import getDb from "./getDb.js";

const filterDb = (user) => {
    const client = user

    const data = getDb().then(element => {
        
    })

    console.log(data)

    const weekday = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
    const weekend = ["sábado", "domingo"]

    let total = {"weekend" : 0,
                "weekday" : 0}

    client.days.forEach((element) => {
        weekday.indexOf(element) != -1 ? total.weekday += 1 : 0
        weekend.indexOf(element) != -1 ? total.weekend += 1 : 0
    })

    return total
}

export default filterDb