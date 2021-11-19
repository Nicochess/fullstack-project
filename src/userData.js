import filterData from "./filterData.js"

const userData = (user) => {
    const client = user

    const weekday = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
    const weekend = ["sábado", "domingo"]

    let userData = {"plan": user.plan,
                    "weekend" : 0,
                    "weekday" : 0}

    client.days.forEach((element) => {
        weekday.indexOf(element) != -1 ? userData.weekday += 1 : 0
        weekend.indexOf(element) != -1 ? userData.weekend += 1 : 0
    })

    filterData(userData)
}

export default userData