const insertTotal = (total, obj) => {
    if (total.plan == 'regular'){
        return obj.plan.regular.weekend * total.weekend + obj.plan.regular.weekday * total.weekday
    } else if (total.plan == 'premium'){
       return obj.plan.premium.weekend * total.weekend + obj.plan.premium.weekday * total.weekday
    }
}

import loadInScreen from "./loadInScreen.js"

const filterData = async (total) => {
    const res = await fetch(`https://hotel-api-server.herokuapp.com/hotels`)
    const data = await res.json()

    const dataToSort = data.map(obj => ({
        ...obj,
        "userPlan": total.plan,
        "total": insertTotal(total, obj)
    }))

    const dataSorted = dataToSort.sort(function(a, b) {
        return a["total"] - b["total"] || b["rating"] - a["rating"]
    })
    
    loadInScreen(dataSorted[0])
}

export default filterData