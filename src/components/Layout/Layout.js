import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import App from '../../App';
import classes from "./Layout.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSidedraw: false
    }

    sideDrawerCloseshandle = (props) => {
        this.setState({showSidedraw: false})
    }
    toggleSideDraw = (props) => {
       // this.setState({showSidedraw: !this.state.showSidedraw})
        this.setState((prevState) => {
            return{
                showSidedraw:!this.state.showSidedraw
            }
        })
    }

    render() {

        return (

            <Aux>
                <Toolbar click={this.toggleSideDraw}/>

                
                <SideDrawer
                    closed={this.sideDrawerCloseshandle}
                    open={this.state.showSidedraw}/>
                <main className={classes.Content}>

                    {this.props.children}
                </main>
            </Aux>

        )
    }

}

export default Layout