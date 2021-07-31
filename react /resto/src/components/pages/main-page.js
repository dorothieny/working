import React, {Component} from 'react';
import MenuList from '../menu-list';
import {withRouter} from 'react-router-dom';
class MainPage extends Component{

    render(){
        return (
            <MenuList
            onSelected={(itemId)=> {
                this.props.history.push(`/main/${itemId}`);
             }}/>
        )
    }
}

export default withRouter(MainPage);
