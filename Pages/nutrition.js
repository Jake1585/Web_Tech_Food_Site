
// Code used/adapted from https://developer.edamam.com/edamam-docs-nutrition-api and https://www.youtube.com/watch?v=Udf88jeTRUY&ab_channel=EnvatoTuts%2B

(function nutrition () {

    const recipeIngredientsInput = document.getElementById('recipeIngredients');
    const recipeInformation = document.getElementById('recipeInformation');

    function getRecipe() {

        let ingr = recipeIngredientsInput.value.split('\n'); // ingr is the Array which contain the information about the items entered into the recipe field

        return fetch(`https://api.edamam.com/api/nutrition-details?app_id=88df4aaa&app_key=8bd712b29f5a15bb39bb4ca4f997f862`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ingr })
        }).then(response => response.json());
    }

    document.getElementById('recipe-ingredient-input').addEventListener('click', function (e) {
        e.preventDefault(); //This stops the page from refreashing when the button is clicked

        getRecipe().then(data => {
            let information = [];

            Object.keys(data.totalDaily).forEach(key => {
                let info = data.totalDaily[key]

                information.push(`<dt>${info.label}</dt><dd>${info.quantity}${info.unit}</dd>`);
            })

            let html = `<dl>
                <dt>Total Calories</dt>
                <dd>${data.calories}</dd>
                ${information.join('')}
                </dl>`;
                // <dl> tag is a descriptive list of all nutrients in the recipe
                // <dd> tag is the description value of the value
                // <dt> tag is descriptive term element.

            recipeInformation.innerHTML = html;

        });
    })
})();