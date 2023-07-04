//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFact)


function getFact(){
  const factUrl = 'https://catfact.ninja/fact'
  const imgUrl= 'https://cataas.com/api/cats';
  fetch(factUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.facts').innerHTML = data.fact
      })
  fetch(imgUrl)
      .then(res=> res.json())
      .then(data=> {
        document.querySelector('.randomImg').src = `https://cataas.com/cat/${data._id}`
      })
}


