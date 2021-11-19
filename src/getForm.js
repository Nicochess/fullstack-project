import userData from "./userData.js"

const convertDate = (dateStr) => {
    let date = new Date(dateStr)
    let dateName = date.toLocaleDateString("pt-BR", {timeZone: 'UTC', weekday: 'long'})
    return dateName
}


const getDateArray = (startDate, endDate) => {
    let dates = []

    let dateStart = new Date(startDate)
    let dateEnd = new Date(endDate)

    while (dateStart <= dateEnd) {
        dates.push(convertDate(new Date(dateStart)))
        dateStart.setDate(dateStart.getDate() + 1)
    }
    return dates
}

const getForm = (event) => {
    event.preventDefault();
    
    const form = document.getElementById('consult-prices')

    const dateStart = form.dateStart.value
    const dateEnd = form.dateEnd.value
    
    const user = {
        "plan" : form.clientType.value,
        "days": getDateArray(dateStart, dateEnd)
    }
    
    userData(user)
}

export default getForm