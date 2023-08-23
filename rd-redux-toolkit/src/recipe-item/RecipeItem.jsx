import React from 'react'

const RecipeItem = ({ recipe }) => {
  return (
    <div className="">

      <div>{recipe.name}</div>
      <button>add favorites</button>
    </div >
  )
}

export default RecipeItem
