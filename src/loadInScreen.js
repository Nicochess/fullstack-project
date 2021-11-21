const loadInScreen = (data) => {
    const modal = document.querySelector(".hotel-results")
    modal.innerHTML = ''

    const plan = data.userPlan == 'regular' ? data.plan.regular : data.plan.premium

    const flagName = (data) => {
        if (data.userPlan == 'premium'){
            return `<div class="flag premium">Fidelidade</div>`
        } else {
            return `<div class="flag regular">Regular</div>`
        }
    }

    const card = document.createElement('article')
    card.classList.add('card-hotel')
    card.innerHTML = `
    ${flagName(data)}
    <div class="card-image"></div>
    <div class="card-content">
      <h3 class="card-title">${data.name}</h3>
      <div class="rating-container">
        <img src="./images/rating.png" alt="Fallback image" class="rating">
      </div>
      <table class="plan-table">
        <thead>
          <th>Dia</th>
          <th>Preço</th>
        </thead>
        <tbody>
        <tr>
          <td>Seg à Sex</td>
          <td class="table-price">R$ ${plan.weekday},00</td>
        </tr>
        <tr>
          <td>Sáb, Dom e Feriado</td>
          <td class="table-price">R$ ${plan.weekend},00</td>
        </tr>
        <tbody>
      </table>
      <div class="card-total">
        <p class="total">Total:</p><span class="price">R$ ${data.total}</span>
      </div>
    </div>
    `

    modal.appendChild(card)

    modal.style.display="flex"
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

    const rating = document.querySelector('.rating-container')
    rating.style.width = `${data.rating * 16}px`
}

export default loadInScreen