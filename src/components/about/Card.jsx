import './about.css'
export const Card = ({recipe}) =>{
    return (
        <div className="card">
        <div className='card-text'>
        <h1>{recipe.name}</h1>
        <h2>Ingredients:</h2>
        <h2>{recipe.ingredients}</h2>
        <h3>Recipe Instructions: </h3>
        <h3>{recipe.instructions}</h3>
        <h4>{recipe.cuisine}</h4>
        </div>
        </div>
    )
}