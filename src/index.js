const renderRecipe = recipe => {

    //img render
    const img = document.querySelector("#recipe-img")
    img.src = recipe.image_url
    img.alt = recipe.name
    //title render
    const title = document.querySelector("#recipe-title")
    title.textContent = recipe.name
    //author render
    const author = document.querySelector("#recipe-info h3")
    author.textContent = recipe.author
    //description render
    const description = document.querySelector("#recipe-info p")
    description.textContent = recipe.description

    const ingredientList = document.querySelector("#ingredient-list")
    ingredientList.innerHTML = ""

    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li")
        li.textContent = ingredient.measurement + " " + ingredient.name
        ingredientList.append(li)
    })
}

const getRecipe = () => {
    fetch("http://localhost:3000/api/v1/recipes/11")
        .then(r => r.json())
        .then(renderRecipe)
}

getRecipe()