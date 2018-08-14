import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
class modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
     return nextProps.toggle !== this.props.toggle
      || nextProps.children !== this.props.children//update only if props.toggle changes , this prevents OrderSummary to rerender
    
    }
    componentWillUpdate(){
        console.log('component will update- Modal');
    }
    render() {

        return (
            <Aux>
                <Backdrop toggle={this.props.toggle} clicked={this.props.modalClose}/>
                <div
                    className={classes.Modal}
                    style={{
                    transform: this.props.toggle
                        ? 'translateY(0)'
                        : 'translateY(-200vh)',
                    opacity: this.props.toggle
                        ? '1'
                        : '0'
                }}>
                    {this.props.children}
                </div>
            </Aux>

        )
    }

}

export default modal;