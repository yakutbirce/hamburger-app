import React from 'react';
import './BurgerBuilder.css'

const BurgerBuilder = ({ ingredients, setIngredients }) => {
    const addIngredient = (type) => {
        setIngredients({ ...ingredients, [type]: ingredients[type] + 1 });
    };

    const removeIngredient = (type) => {
        if (ingredients[type] > 0) {
            setIngredients({ ...ingredients, [type]: ingredients[type] - 1 });
        }
    };

    const ingredientImages = {
        salad: "🥗",
        cheese: "🧀",
        meat: "🍔",
        bacon: "🥓",
    };

    return (
        <div>
            {Object.keys(ingredients).map((type) => (
                <div key={type}>
                    <button onClick={() => addIngredient(type)}>
                        {ingredientImages[type]} Add {type}
                    </button>
                    <button onClick={() => removeIngredient(type)}>
                        Remove {type}
                    </button>
                    {ingredients[type] > 0 && (
                        <div>{ingredientImages[type]}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BurgerBuilder;
