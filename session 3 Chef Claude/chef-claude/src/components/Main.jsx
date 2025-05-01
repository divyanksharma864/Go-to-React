export default function Main(){

    const ingredients = ['Chicken', 'Oregano', 'Tomatoes']

    const ingredientListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
    }

    return (
        <main>
            <form onsubmit={handleSubmit} className="add-ingredient-form">
                <input
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button>
                    Add Ingredient
                </button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}