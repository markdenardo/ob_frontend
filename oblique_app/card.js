class Card{
  constructor(cardJSON){
    this.id: cardJSON.id
    this.edition: cardJSON.edition
    this.cardnumber: cardJSON.cardnumber
    this.strategy: cardJSON.strategy
  }
renderCard(){
  
  .then(cardArr =>{
    cardArr.forEach(card =>{
      h1.id = `${card.id}`
      h1.innerHTML = `${card.strategy}`
      obCard.append(h1)
    })
}

}
