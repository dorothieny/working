import React from 'react';
import styled from 'styled-components';
import CardItem from '../card-item/card-item';

const All = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const StyledCardList = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    max-width: 440px;
    background-color: #1C1C1B;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    overflow: hidden;
    button{
        background-color: #1C1C1B;
        border: none;
        padding: 10px 16px;
        color: #8E9193;
        cursor: pointer;
        font-size: 15px;
        line-height: 20px;
    }

`
const Svg = styled.div`
width: 23px;
position: relative;
top: 3px;

`
const CardList = ({posts})=>{
    const elements = posts.map((item)=>{
        return (
            <div key={item.id}>
                <CardItem 
                text={item.text} 
                num={item.num}
                buttons={item.buttons}
                name={item.name}
                link={item.link}/>
            </div>
        )
    })
    return (
        <All>
        <Svg>
        <svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.675903 8H0.781043C1.23519 8 1.67581 7.84544 2.03043 7.56174L10.2332 0.999513C10.9637 0.415163 12.0016 0.415162 12.732 0.999512L20.9348 7.56174C21.2894 7.84544 21.73 8 22.1842 8H22.6759H0.675903Z" fill="#1C1C1B" fillOpacity="0.95"/>
        </svg>
        </Svg>
        <StyledCardList>
            {elements}
            <button>View All</button>
        </StyledCardList>
        </All>
    )
}
export default CardList;