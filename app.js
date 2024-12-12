const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const search = document.getElementById("searchButton");
const conteneur = document.querySelector(".results");

conteneur.classList.add("not-active")



search.addEventListener("click", () => {

    const inpSearch = document.querySelector("input").value;

    if(inpSearch === ""){
        alert('Veuillez entrer un plat !');
    }  else {

        try{
            fetch(url + inpSearch)
            .then((response) => response.json())
            .then((data) => {

                if(data.meals == null){
                    alert('Meal not found')
                } else {
                    conteneur.classList.remove("not-active")
                    conteneur.innerHTML = `
                <img src="${data.meals[0].strMealThumb}">
                <div class="titre">
                    <h3>${data.meals[0].strMeal}</h3>
                    <p>${data.meals[0].strArea}</p>
                </div>
                <div class="list">
                    <ul class="left">
                        <li>${data.meals[0].strIngredient1}</li>
                        <li>${data.meals[0].strIngredient2}</li>
                        <li>${data.meals[0].strIngredient3}</li>
                        <li>${data.meals[0].strIngredient4}</li>
                        <li>${data.meals[0].strIngredient5}</li>
                        <li>${data.meals[0].strIngredient6}</li>
                        <li>${data.meals[0].strIngredient7}</li>
                    </ul>
                    <ul class="right">
                        <li>${data.meals[0].strIngredient8}</li>
                        <li>${data.meals[0].strIngredient9}</li>
                        <li>${data.meals[0].strIngredient10}</li>
                        <li>${data.meals[0].strIngredient11}</li>
                        <li>${data.meals[0].strIngredient12}</li>
                        <li>${data.meals[0].strIngredient13}</li>
                        <li>${data.meals[0].strIngredient14}</li>
                    </ul>
                </div>`
                }
                
            })
    
        } catch(e){
            console.error(e);
        }

    }

})



