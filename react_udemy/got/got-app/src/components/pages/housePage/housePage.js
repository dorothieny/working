import React, {Component} from 'react';
import GotService from '../../../services/gotScript';
import {Houses} from '../../itemList';
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
            <Houses
                onCharSelected={this.onCharSelected}
                renderProp={item => item.name}/>
        )
        const charDetails = (
            <CharDetails 
                charId={selectedChar}
                getD={this.gotService.getHouse} >
                    <Field field ='region' label ='Region'/>
                    <Field field ='words' label ='Words'/>
                    <Field field ='titles' label ='Titles'/>
                    <Field field ='overlord' label ='Overlord'/>
                    <Field field ='ancestralWeapons' label ='Ancestral weapons'/>
            </CharDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }    
}