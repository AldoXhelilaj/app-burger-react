import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    componentWillUpdate(){
        console.log(
            ["Order Summery will update"]
        )

    }
    render() {
        const ingredientsSummary = Object
            .keys(this.props.ingredients)
            .map(ingKey => {
                return (
                    <li key={ingKey}>
                        <span>{ingKey}:{this.props.ingredients[ingKey]}</span>
                    </li>
                )
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>a delicious burger with the folling ingredients</p>
                <ul>
                    {ingredientsSummary}

                </ul>
                <p>
                    <strong>Total price:{this.props.price}</strong>
                </p>
                <p>Continue with checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>

            </Aux>

        )
    }

}

export default OrderSummary;