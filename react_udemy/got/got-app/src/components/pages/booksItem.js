import React, {Component} from 'react';
import GotService from '../../services/gotScript'
import CharDetails,{Field} from '../charDetails';

export default class BooksItem extends Component{ 
    gotService = new GotService();
    render(){
        return(
        <CharDetails 
            charId={this.props.bookId}
            getD={this.gotService.getBook} >
                <Field field ='numberOfPages' label ='Number of pages'/>
                <Field field ='publisher' label ='Publisher'/>
                <Field field ='released' label ='Released'/>
        </CharDetails>
        )
    }
}