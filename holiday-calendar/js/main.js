//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', setCountry)

// Function to get the current date and time
function getCurrentDateAndTime() {
  const dateTime = new Date();
  return dateTime.toLocaleString();
}

// Target an HTML element to display the current date and time
const dateDisplay = document.querySelector(".todayDate");

// Set the innerHTML of the element to the current date and time returned by the function
dateDisplay.innerHTML = getCurrentDateAndTime();
function setCountry(){
  const country = document.querySelector('input').value
  console.log(country)
  const url = `https://holidayapi.com/v1/countries?pretty&key=75f7a248-693f-4dd5-9715-e08874c08fb1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.countries[136])
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

