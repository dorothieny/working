import React, {Component} from 'react';
import MenuList from '../menu-list';
import {withRouter} from 'react-router-dom';
class MainPage extends Component{

    render(){
        return (
            <MenuList
            onSelected={(itemId)=> {
                console.log(itemId);
                
                this.props.history.push(`/main/${itemId}`);
                console.log(this.props.history)
             }}/>
        )
    }
}

export default withRouter(MainPage);
