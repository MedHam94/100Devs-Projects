//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink (){
    let drink = document.querySelector('input').value.split(' ')
    let newArr= []
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink[0]}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks);
            newArr = data.drinks.filter(drk => drk.strDrink === drink.join(' '))
            console.log(newArr);
            if(drink.length <= 1 ){
                let drinkIndex = Math.floor(Math.random() * (data.drinks.length));
                document.querySelector('h2').innerHTML = data.drinks[drinkIndex].strDrink;
                document.querySelector('img').src = data.drinks[drinkIndex].strDrinkThumb
                document.querySelector('h3').innerHTML = data.drinks[drinkIndex].strInstructions
            }else{
                document.querySelector('h2').innerHTML = newArr[0].strDrink;
                document.querySelector('img').src = newArr[0].strDrinkThumb
                document.querySelector('h3').innerHTML = newArr[0].strInstructions
            }
            
            
        })
}

