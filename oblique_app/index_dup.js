let obCard = document.getElementById('obcard')
let obNote = document.getElementById('obnote')
let obPost = document.getElementById('obpost')
let h1 = document.createElement('h1')
let h1Card = document.createElement('h1')
let h2Note = document.createElement('h2')
let h3Post = document.createElement('h3')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// let makeArr = (obj) => {
//    return obj.map(a => a.attributes)
// }

  fetch('http://localhost:3000/cards')
  .then(response => response.json())
  // .then(cardArr => console.log(cardArr))
  .then(cards => {
    // debugger
    //get random card
    // var cardArray = cards.data.map(a => a.attributes)
    var randomCard = cards.data[getRandomInt(length)]
    h1Card.innerHTML = `${randomCard.attributes.strategy}`
    obCard.append(h1Card)
    //end get random card

  })

  fetch('http://localhost:3000/cards/1')
  .then(response => response.json())
  // .then(cardObj => console.log(cardObj))
  .then(card => {
    // debugger
    h1.id =   `${card.data.id}`
    // h1.note = `${card.data.note}`
    // h1.noteLike = `${card.data.note.like}`
    // h1.post = `${card.}`
    // h1.id = `${a.data.id}`
    // h1.innerHTML = `${a.data.attributes.strategy}`
    obCard.append(h1)
  })
