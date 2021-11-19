const loadInScreen = (data) => {
    const loadIn = document.querySelector(".hotel-results")
    loadIn.innerHTML = ''

    const card = document.createElement('article')
    card.innerHTML = `
        <h3>${data[0].name}</h3>
        <p>${data[0].rating}</p>
        <p>${data[0].total}</p>
    `

    loadIn.appendChild(card)
}

export default loadInScreen