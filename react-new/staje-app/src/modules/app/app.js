import React, {Component} from 'react';
import CardList from '../card-list/card-list';
//import styled from 'styled-components';

export default  class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Pit Stenkoff',
                text: ' liked ❤️ your project “Japonia. Koichi Sato Persona”', 
                buttons: false,
                num: '0', 
                link: false,
                id: 'twetew'},

                {name: 'Woject Alf',
                text: ' sent an invitation 📩 to co-author the project “Japonia. Koichi Sato Persona”', 
                num: '1', 
                buttons: true,
                link: false,
                id: 'dvsdvvg'},

                {name: 'Nursultan Targynov',
                text: ' accepted 🤙 the invitation to be co-authors Japonia. Koichi Sato Persona project', 
                num:'2', 
                buttons: false,
                link: false,
                id: 'fer'},

                {name: 'Nursultan Targynov',
                text: ' rejected 👎 the invitation to co-authors Japonia. Koichi Sato Persona project', 
                num:'2', 
                buttons: false,
                link: false,
                id: 'dv'},

                {name: 'Members of the jury',
                text: ' accepted ✨ the project Japonia. Koichi Sato Persona into the contest Tokyo is the capital of Japan. What happens next? ', 
                num: false,
                buttons: false,
                link: true,
                id: 'fgdfg'}
            ]
        }
    }
    render(){
        const{data} = this.state
        return (
            <>
                <CardList posts={data}/> 
            </>
        )
    }
   
}
