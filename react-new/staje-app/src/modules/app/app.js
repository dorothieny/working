import React from 'react';
import CardList from '../card-list/card-list';
import styled from 'styled-components';

const AppBlock = styled.div `
    margin: 0 auto;
    max-width: 800px;
    background-color: #151514;
    padding: 40px;
    border-radius: 10px;
    box-sizing: content-box;
`

const App = ()=>{
    const data = [
        {text: 'I have to show them', url:"url(./Group.png)", id: 'twetew'},
        {text: 'Going to learn React', id: 'dvsdvvg'},
        {text: 'That is fine', id: 'fer'},
        {text: 'But I need a rest', id: 'dv'},
        {text: 'I have to show them. Going to learn React. That is fine. But I need a rest', id: 'fgdfg'}
        
    ];
    return (
        <AppBlock>
            <CardList posts={data}/> 
        </AppBlock>
    )
}
export default App;