import React, {Component} from 'react';
import styled from 'styled-components';
import img1 from './child.png';
import img2 from './man.png';
import img3 from './anime.png';

const StyledDiv = styled.div`
    background-color: #1C1C1B;
    border-bottom: .5px solid #353A3E;
    padding: 16px 16px 10px 16px;
    display: flex;
    flex-direction: column;
    cursor: default;
    

    div.container{
        display: flex;
        flex-direction: row;
        align-content: top;
    }
    div > p{
        color: #6C7073;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: 0.06em;
        margin: 0;

    }
`
const TextElement = styled.div`
    color: #FEFEFE;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 5px;
    display: block;
    span {
        color: #6C7073;
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }
`
const ImagComp = styled.div`
display: ${(props) => (props.num ? "block" : "none")};
margin-right: 10px;
img{
    height: 48px;
    width: 48px;
    }
`
const Btn = styled.div`
 display: ${(props) => (props.buttons ? "flex" : "none")};
 flex-direction: row;
 

 button.btn {
    width: 120px;
    border-radius: 24px;
    border: 1px solid #575B5E;
    margin: 16px 10px 6px 0px;
    z-index: 1;
 }

 button.active {
    border: none;
    background-color: #F1DB63;
    color: #1C1C1B;


 }
`
const Link = styled.span`
    display: ${(props) => (props.link ? "inline-block" : "none")};
    color: #6C7073;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`

class CardItem extends Component {
    constructor(props){
        super(props);
        const{name,text, num, buttons, link} = this.props;
        this.name = name; 
        this.text = text;
        this.num = num;
        this.buttons = buttons;
        this.link = link;
        this.state = {
            important: false,
            like: false,
            warning: false,
            error: false
        };
    }
    render(){
    const img =[
            img1,
            img2,
            img3
        ]
        return(
            
            <StyledDiv>
                <div className="container">
                <ImagComp num={this.num}>
                <img  src={img[this.num]} alt="warning"/>
                </ImagComp>
                
                <div className="text">
                <TextElement>
                    <span>{this.name}</span>
                    {this.text}
                    <Link link={this.link}> See here</Link>
                </TextElement>
                <p>
                5 days ago
                </p>
                <Btn buttons={this.buttons}>
                <button className="btn">
                    Reject
                </button>
                <button className="btn active">
                    Accept
                </button>
                </Btn> 
                </div>
                </div>
                  
            </StyledDiv>
            
        )
    }
}
export default CardItem;