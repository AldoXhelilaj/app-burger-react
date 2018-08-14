import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
const INGREDIENT_PRICES ={

    Cheese:0.4,
    Salad:0.5,
    Meat:1.3,
    Bacon:0.7


}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Cheese: 1,
            Salad: 1,
            Meat: 1,
            Bacon: 1
        },
        totalPrice:4,
        purchasable:true,
        purchasing:false,
        loading:false

    }
    // updatePurchaceState(ingredients){
      
    //     const sum= Object.keys(ingredients).map(ingkey=>{
    //         return ingredients[ingkey];
    //     }).reduce((sum,el)=>{
    //         return sum + el;
    //     },0);

    //     this.setState({purchasable:sum >0});

    // }

    //state should be updaet in a imutable way
    // addIngredientsHandler= (type) =>{
    //     const oldCount= this.state.ingredients[type];
    //     const updatedCount= oldCount + 1;
    //     const updatedIngredient= {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredient[type]= updatedCount;
    //     const priceAdd= INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice= oldPrice + priceAdd;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
    // }
    
    addIngredientHandler = (type) => {


        this.setState((prevState, props) => {
            const updatedIngredients = {...prevState.ingredients}
            updatedIngredients[type] += 1
            return (
                {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
                    purchasable:true
                }
            )
        });
      
    }
    removeIngredientsHandler= (type)=>{
        this.setState((prevState, props) => {
            const updatedIngredients = {...prevState.ingredients}
            updatedIngredients[type] -= 1
           let purchaseValue=Object.values(updatedIngredients).some(val=>val>0);
           console.log(purchaseValue)
           
            return (
                {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
                    purchasable:purchaseValue
                }
            )
           
        });
        


    }
    purchhaceHandler=(props)=>{
        this.setState({
            purchasing:true
        })
    }
    purchhaceHandlerClose= (props)=>{
        this.setState({
            purchasing:false
        })
       

    }
    purchaseHandlerContinue= (props) =>{
        //we sent this data to the server
        this.setState({loading:true})
        const order= {

            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'aldo xhelilaj',
                address: {
                    street:'Selman riza',
                    zip:'1000',
                    country:'Albania'
                },
                email:"aldoxhelili69@hotmail.com"
            },
            deliveryMethod:'express'
        }
            axios.post('/orders.json',order).then(response=>{
                this.setState({loading:false,
                purchasing:false})
                console.log(response);
            }).catch(error=>{
                this.setState({loading:false,
                purchasing:false})
            })
    }
    render() {
        const disabledInfo= {

            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
           
           disabledInfo[key]= disabledInfo[key] <=0 //we convert the types into bolean
        
            
        }
       let orderSummary=<OrderSummary ingredients={this.state.ingredients}
                            purchaseCancel={this.purchhaceHandlerClose}
                             purchaseContinue={this.purchaseHandlerContinue}
                            price={this.state.totalPrice.toFixed(2)}/>;
            if(this.state.loading){
                orderSummary=<Spinner/>

            }
        return (
            <Aux>
                {/* {this.state.purchasing && */}
                <Modal toggle={this.state.purchasing} modalClose={this.purchhaceHandlerClose}>
                    {orderSummary}
                    
                </Modal>}
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdd={this.addIngredientHandler}
                ingredientRemove={this.removeIngredientsHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice.toFixed(2)}
                toggle={this.purchhaceHandler}
               />
            </Aux>

        );

    }
}

export default BurgerBuilder;