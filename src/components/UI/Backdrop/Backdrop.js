import React from 'react';
import classes from './Backdrop.css';


const backgdrop = (props) => (
    props.toggle ? <div className={classes.Backdrop}
     onClick={props.clicked}></div>: null


)
 
export default backgdrop;