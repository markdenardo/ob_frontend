
const obCard = document.getElementById('obcard')
const obNote = document.getElementById('obnote')
const obPost = document.getElementById('obpost')
const obCanvas = document.getElementById('canvas')
const randomCard = document.getElementById('randomcard')

//css tags for

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

obCanvas.addEventListener("click", (e) => {
    if(e.target.id === "randomcard"){
      getRandomCard();
    }
})

let getRandomCard =(()=>{
  fetch('http://localhost:3000/cards')
  .then(response => response.json())
  .then(card => {

      //get random card
    var cardArray = card.data.map(a => a.attributes)
    var randomCard = cardArray[getRandomInt(cardArray.length)]
    //assign css tags
    obCard.innerHTML = `${randomCard.strategy}`
    obNote.innerHTML = `${randomCard.notes[0].comment}`
    obPost.innerHTML = `${randomCard.posts[0].url}`

  })

})



getRandomCard();
