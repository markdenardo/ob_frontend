
getObliqueArray()

function getObliqueArray() {

  return fetch("http://brianeno.needsyourhelp.org/all")
  .then(res => res.json())
  .then(cardArr => {
    console.log(cardArr);
})

}
