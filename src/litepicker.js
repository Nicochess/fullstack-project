const isMobile = window.innerWidth < 800 ? 1 : 2

new Litepicker({
    element: document.getElementById('date-start'),
    elementEnd: document.getElementById('date-end'),
    singleMode: false,
    allowRepick: true,
    numberOfColumns: isMobile,
    numberOfMonths: isMobile,
    lang: "pt-BR"
  })