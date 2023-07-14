//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getImage)

function getImage(){
    let date =document.querySelector('#date').value
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=soX06rfFQiEONiVKZnInJA2ZvdMY0NOQQlk7jL9o`

    console.log(date);

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('p').innerHTML = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}