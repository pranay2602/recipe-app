const appId = "80411d51";
const appKey = "911dc663c595e5fe905f805c07d2428f";
const baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}';
const recipeContainer = document.querySelector("#recipe-container");

function loadRecipes(type = "paneer") {
    const url = baseUrl + '&q=${type}';
    fetch(url)
        .then(res => res.json())
        .then((data) => renderRecipes(data.hits)) 
        .catch((error) => console.log(error));
}

loadRecipes();

const renderRecipes = (recipeList = []) => {

    recipeList.forEach((recipeObj) => {
        const{
             label : recipeTitle,
             ingredientLines,
             image: recipeImage,
        } = recipeObj.recipe;
        

        const htmlStr = `<div class="recipe">
            <div class="recipe-title">${recipeTitle}</div>
            <div class="recipe-image">
                <img src="${recipeImage}" alt="${recipeTitle}" />
            </div>
            <div class="recipe-text">
                <ul>
                    ${stepsList}
                </ul>
            </div>
        </div>`;

     recipeContainer.insertAdjacentHTML("beforeend",htmlStr)
    });
}

loadRecipes();
