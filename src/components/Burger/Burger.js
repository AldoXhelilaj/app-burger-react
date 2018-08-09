import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./Burgeringridients/Burgeringridients";


//we recieve ingredients as props from BurgerBulder.js
//we need to convert an object into an array of the values of the ingredients
//.map executes a funct for each el of an array
const burger= (props)=>{
    let transformedIngredients=[];
    Object.keys(props.ingredients).forEach((data)=>{
        console.log(data)
        for (let i = 0; i < props.ingredients[data]; i++) {

            transformedIngredients.push(<BurgerIngredient key={data + i} type={data}/>)
            
        }
    }

    )


    // let transformedIngredients= Object.keys(props.ingredients)

    // // .map(ingKey =>{
    // //     return [...Array(props.ingredients[ingKey])]
       
    // //     .map((_,i)=>{
    // //         console.log ([...Array(props.ingredients[ingKey])])
    // //           return  <BurgerIngredient key={ingKey + i} type = {ingKey}/>
    // //      })// an array with 2 elements
    // // }).reduce((arr,el)=>{
    // //     return arr.concat(el);
    // //  },[]);
    console.log(transformedIngredients)
    if(!transformedIngredients.length){
        transformedIngredients=<p>Add some ingredients</p>
    }
    return(

        <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom'/></div>
       
    );
    
}

export default burger;