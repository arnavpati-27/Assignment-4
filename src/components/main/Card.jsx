import './MainSection.css'
export const Card = ({recipe}) =>{
    return (
        <div className="card">
        <div className="card-img">
            <img src={recipe.image} alt="" />
        </div>
        <div className='card-text'>
        <h2>{recipe.name}</h2>
        <h4>{recipe.cuisine}</h4>
        {/* conditional rendering */}
        {
            recipe.prepTimeMinutes + recipe.cookTimeMinutes < 45 ? <h3>Item takes less than 45 min to prepare!</h3>:<></>
        }
        </div>
        </div>
    )
}