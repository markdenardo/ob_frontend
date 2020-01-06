let obCard = document.getElementById('obcard')
let obNote = document.getElementById('obnote')
let obPost = document.getElementById('obpost')
//css tags for
let h1 = document.createElement('h1')
let h2 = document.createElement('h2')
let h3 = document.createElement('h3')

let h1Card = document.createElement('h1')
let h2Note = document.createElement('h2')
let h3Post = document.createElement('h3')

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

  fetch('http://localhost:3000/cards')
  .then(response => response.json())
  // .then(cardArr => console.log(cardArr))
  .then(card => {
    //get random card
    var cardArray = card.data.map(a => a.attributes)
    var randomCard = cardArray[getRandomInt(cardArray.length)]
    h1Card.innerHTML = `${randomCard.strategy}`
    h2Note.innerHTML = `${randomCard.card.data.attributes.notes[0].comment}`
    h3Post.innerHTML = `${randomCard.card.data.attributes.posts[0].url}`
    obCard.append(h1Card, h2Note, h3Post)
    //end get random card

  })

  fetch('http://localhost:3000/cards/1')
  .then(response => response.json())
  // .then(cardObj => console.log(cardObj))
  .then(card =>{
    // debugger
    // var cardArray = card.data.map(a => a.attributes)

    h1.id = `${card.data.id}`
    h1.innerHTML = `${card.data.attributes.strategy}`
    h2.innerHTML += `${card.data.attributes.notes[0].comment}<br>${card.data.attributes.notes[1].comment}`
    h3.innerHTML = `${card.data.attributes.posts[0].url}<br>${card.data.attributes.posts[1].url}`
    obCard.append(h1, h2, h3)


  })
