import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {

    const ingredientsSummary = Object
        .keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span>{ingKey}:{props.ingredients[ingKey]}</span>
                </li>
            )
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>a delicious burger with the folling ingredients</p>
            <ul>
                {ingredientsSummary}

            </ul>
            <p><strong>Total price:{props.price}</strong></p>
            <p>Continue with checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
            
        </Aux>

    )

}

export default orderSummary;