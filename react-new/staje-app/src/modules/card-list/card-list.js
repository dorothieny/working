import React from 'react';
import styled from 'styled-components';
import CardItem from '../card-item/card-item';

const StyledCardList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const CardList = ({posts})=>{
    const elements = posts.map((item)=>{
        return (
            <div id={item.id}>
                <CardItem 
                text={item.text} 
                important={item.important}
                url= {item.url}/>
            </div>
        )
    })
    return (
        <StyledCardList>
            {elements}
        </StyledCardList>
    )
}
export default CardList;