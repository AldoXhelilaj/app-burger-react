import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
import Modal from '../../UI/Modal/Modal';

const controls =[
        {label:'Salad',type:'Salad'},
        {label:'Meat',type:'Meat'},
        {label:'Bacon',type:'Bacon'},
        {label:'Cheese',type:'Cheese'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
     <p>Current Price:{props.price}</p>
        {controls.map(ctrl=>(
                <BuildControl key={ctrl.label} label={ctrl.label} 
                   added={()=>{props.ingredientAdd(ctrl.type)}}
                   remove={()=>{props.ingredientRemove(ctrl.type)}}
                   disabled={props.disabled[ctrl.type]}
                   type={ctrl.type}
                   />

        ))}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.toggle}>Order</button>
    </div>
);


export default buildControls;