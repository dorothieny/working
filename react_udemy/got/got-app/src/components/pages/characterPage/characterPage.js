import React, {Component} from 'react';
import GotService from '../../../services/gotScript';
import {Characters} from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrorMessage from '../../errorMessage/errorMessage';
import RowBlock from '../../rowBlock/rowBlock.js';

export default class CharacterPage extends Component { 

    gotService = new GotService();

    state ={
        selectedChar: null,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }


    render(){
        const{selectedChar} = this.state;
        if(this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <Characters
                onCharSelected={this.onCharSelected}
                renderProp={item => item.name}/>
        )
        const charDetails = (
            <CharDetails 
                charId={selectedChar}
                getD={this.gotService.getCharacter} >
                    <Field field ='gender' label ='Gender'/>
                    <Field field ='born' label ='Born'/>
                    <Field field ='died' label ='Died'/>
                    <Field field ='culture' label ='Culture'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }    
}