import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import './menu-list.scss';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart, changePrice} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class MenuList extends Component {
    
    componentDidMount(){
        this.props.menuRequested();
        const{RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(() => this.props.menuError());
    }
    render() {
        const{menuItems, loading, error, addedToCart, changePrice} = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <Error/>
        }
        const items = menuItems.map(menuItem => {
            return(
                <MenuListItem key={menuItem.id} 
                menuItem={menuItem}
                onSelected={this.props.onSelected}
                onAddToCart = {() => {
                    addedToCart(menuItem.id);
                    changePrice()}}
                />
            )
        });

        return (
            <View items={items}/>
        )
    }
};

const View = ({items})=>{
    return(
        <ul className="menu__list">
        {items}
         </ul>
    )
}
const mapStateToProps =(state)=>{
    return{
    menuItems: state.menu,
    loading: state.loading
    }
}

const mapDispatchToProps = {
   menuLoaded,
   menuRequested,
   menuError,
   addedToCart,
   changePrice
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList));