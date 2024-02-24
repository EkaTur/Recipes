function MyRecipesComponent({ label, image, calories, ingredients, dietLabels}) {

    return (
        <div>
            <div className="container">
                <h2 className="label">{label}</h2>
            </div>
            <div className="container">
                <img className="RecipePic" src={image} alt='food' />
            </div>
            <div className="container">
                <p className="CaloriesPar">{calories.toFixed()} calories</p>
            </div>
            <div className="container changeWidth">
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li className="ingredientsBox" key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="container">
                {dietLabels.map((dietLabel, index) => (
                    <p className="DietLabelsPar" key={index}>{dietLabel}</p>
                ))}
            </div>
            <hr className="style-five"></hr>
        </div>
    )
}

export default MyRecipesComponent;