import React from 'react';
import './PriceDisplay.css';

const PriceDisplay = ({ ingredients }) => {
    const ingredientPrices = {
        salad: 1.5,
        cheese: 2,
        meat: 3,
        bacon: 1.5,
    };

    const calculateTotalPrice = () => {
        const total = Object.keys(ingredients).reduce((sum, ingredient) => {
            return sum + ingredients[ingredient] * ingredientPrices[ingredient];
        }, 0);
        return total.toFixed(2);
    };

    return (
        <div>
            <h2>Total Price: ${calculateTotalPrice()}</h2>
        </div>
    );
};

export default PriceDisplay;
