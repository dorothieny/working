import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './Group.png';

const StyledDiv = styled.div`
    background-color: #2A3034;
    padding: 10px;
    border-radius: 5px;
   // height: 100px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const TextElement = styled.div`
    color: #FEFEFE;
    text-align: center;
    margin-left: 10px;
    display: inline-block;
`
// const ImgItem = styled.div`

// `
class CardItem extends Component {
    constructor(props){
        super(props);
        const{text, url} = this.props;
        this.text = text;
        this.url = url;
        this.state = {
            important: false,
            like: false,
            warning: false,
            error: false
        };
    }
    render(){
        return(
            <StyledDiv>
                <div>
                <img src={logo} alt="warning"/>
                <TextElement>
                    {this.text}
                </TextElement>
               </div>     
               <button>Okay</button>
            </StyledDiv>
        )
    }
}
export default CardItem;