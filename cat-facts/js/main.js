//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFact)
document.querySelector('button').addEventListener('click', getImage)


function getFact(){
  const factUrl = 'https://catfact.ninja/fact'
  fetch(factUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.facts').innerHTML = data.fact
      })
  
}

function getImage(){
  const imgUrl= 'https://cataas.com/api/cats';
  fetch(imgUrl)
      .then(res=> res.json())
      .then(data=> {
        
        let index = Math.floor(Math.random() * data.length)
        document.querySelector('.randomImg').src = `https://cataas.com/cat/${data[index]._id}`
      })
}

