let getAllCards = () =>{

    fetch('http://localhost:3000/cards')
    .then(response => response.json())
    .then(cardsArr => console.log(cardsArr))

}
