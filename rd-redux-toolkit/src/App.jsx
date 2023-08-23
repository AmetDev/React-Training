import RecipeItem from "./recipe-item/RecipeItem"

function App() {
	return (
		<>
			<div>
				<div>
					<RecipeItem recipe={{ name: 'лазанья', id: 1 }} />
					<RecipeItem recipe={{ name: 'каша', id: 2 }} />
					<RecipeItem recipe={{ name: 'паста', id: 3 }} />
				</div>
			</div>
		</>
	)
}

export default App
