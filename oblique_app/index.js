let obCard = document.getElementById('obcard')
let obNote = document.getElementById('obnote')
let obPost = document.getElementById('obpost')
let h1 = document.createElement('h1')
let h1Card = document.createElement('h1')
let h2Note = document.createElement('h2')
let h3Post = document.createElement('h3')

  fetch('http://localhost:3000/cards')
  .then(response => response.json())
  // .then(cardArr => console.log(cardArr))
  .then(card => {
    //get random card
    var cardArray = card.data.map(a => a.attributes)
    var randomCard = cardArray[getRandomInt(cardArray.length)]
    h1Card.innerHTML = `${randomCard.strategy}`
    obCard.append(h1Card)
    //end get random card



  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  fetch('http://localhost:3000/cards/1')
  .then(response => response.json())
  // .then(cardObj => console.log(cardObj))
  .then(card =>{


    h1.id = `${card.data.id}`
    h1.innerHTML = `${card.data.attributes.strategy}`
    obCard.append(h1)


  })
