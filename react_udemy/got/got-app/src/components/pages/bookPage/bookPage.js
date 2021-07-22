import React, {Component} from 'react';
import GotService from '../../../services/gotScript';
import {Books} from '../../itemList';
import ErrorMessage from '../../errorMessage/errorMessage';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component { 

    gotService = new GotService();

    state ={
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }


    render(){
        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
            <Books 
            onCharSelected={(itemId)=> {
               this.props.history.push(itemId)
            }}
            renderProp={item => item.name}/>
        )
    }    
}
export default withRouter(BooksPage);