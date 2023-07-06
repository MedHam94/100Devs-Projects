//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', set)



// Target an HTML element to display the current date and time
const dateDisplay = document.querySelector(".todayDate");




function set(){
  document.querySelector('ul').innerHTML = ''
  const country = document.querySelector('input').value
  console.log(country)
  const countriesUrl = `https://holidayapi.com/v1/countries?pretty&key=75f7a248-693f-4dd5-9715-e08874c08fb1`
    // Function to get the current date and time
  function getCurrentDateAndTime(c) {
    const dateTime = new Date();
    return dateTime.toLocaleString(c);
  }
  // get the country code 
  fetch(countriesUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.countries)
        for(let i=0; i<data.countries.length; i++){
          if(data.countries[i].name === country){
            console.log(data.countries[i].name);

            // Set the innerHTML of the element to the current date and time returned by the function
            dateDisplay.innerHTML = getCurrentDateAndTime(data.countries[i].code);
            // get only public holiday
            fetch(`https://holidayapi.com/v1/holidays?pretty&key=75f7a248-693f-4dd5-9715-e08874c08fb1&country=${data.countries[i].code}&year=2022`)
                .then(res => res.json())
                .then(data => {
                  console.log(data.holidays);
                  data.holidays.forEach(obj => {
                    if(obj.public === true){
                      // create an li
                      const li = document.createElement('li')
                      // add text to li
                      li.textContent = obj.name
                      // append the li to ul
                      document.querySelector('.holidays').appendChild(li)
                    }
                    
                  })
                })
          }
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

