import Ingredient from "./Ingredient"

const IngredientList = (props) => {

	{console.log(props.ingredients)}
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => 
				<>
				<Ingredient
					key={idx}
					isList={true}
					ingredient={ingredient}
					addToBurger={props.addToBurger}
					removeFromBurger={props.removeFromBurger}
				/>
				</>
			)}
		</ul>
	)
}

export default IngredientList