import React,{Component} from 'react';
import axios from 'axios';

import Modal from '../components/UI/Modal/Modal';
import Aux from '../hoc/Aux';
///high order component to handle error that uses axios
const widthErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state= {
            error:null
        }
        componentWillMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req
            })
            axios.interceptors.response.use(res=>res,error=>{
                console.log(error)
                this.setState({error:error})
            })
        }
        errorConfirmedHandler = () =>{
            this.setState({error:null})

        }

        render() {

            return (
                <Aux>
                    <Modal toggle={this.state.error}
                    modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }

    }

};

export default widthErrorHandler;