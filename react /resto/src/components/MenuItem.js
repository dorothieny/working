import React, {Component} from 'react';
import RestoService from '../services/resto-service';

export default class MenuItem extends Component{
    RestoService = new RestoService();
    state={
        id: ItemId,
        Arr: []
    };
    componentDidMount(){
    RestoService.getMenuItems()
    .then(res => this.setState({Arr:res}));
    }

  
    render(){
        const{Arr} = this.state.Arr;
        const carding = Arr.filter((item)=>{
            return item.id === this.state.id;
        });

        return(
            <li className="menu__item">
                <div className="menu__title">{carding.title}</div>
                <img className="menu__img" src={carding.url} alt="Food img"></img>
                <div className="menu__category">Category:
                </div>
                <div className="menu__price">Price: <span>{carding.price}</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        )
    }
}