function insertTotal (total, obj) {
    if (total.plan == 'regular'){
        return obj.plan.regular.weekend * total.weekend + obj.plan.regular.weekday * total.weekday
    } else if (total.plan == 'premium'){
       return obj.plan.premium.weekend * total.weekend + obj.plan.premium.weekday * total.weekday
    }
}

const filterData = async (total) => {
    const res = await fetch(`http://localhost:3000/hotels`)
    const data = await res.json()

    const dataToSort = data.map(obj => ({
        "id": obj.id,
        "name": obj.name,
        "rating": obj.rating,
        "total": insertTotal(total, obj)
    }))

    const dataSorted = dataToSort.sort(function(a, b) {
        return a["total"] - b["total"] || b["rating"] - a["rating"]
    })

    console.log(dataSorted[0])
}

export default filterData