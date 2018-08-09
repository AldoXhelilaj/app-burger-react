import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => (
    <Aux>
        <Backdrop toggle={props.toggle} clicked={props.modalClose}/>
        <div
            className={classes.Modal}
            style={{
                
            transform: props.toggle
                ? 'translateY(0)'
                : 'translateY(-200vh)',
            opacity: props.toggle
                ? '1'
                : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;