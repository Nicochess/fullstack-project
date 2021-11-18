const getDb = async () => {
    const res = await fetch(`http://localhost:3000/hotels`)
    const data = await res.json()

    return data
}

export default getDb