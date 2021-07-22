import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';
import GotService from '../../services/gotScript';
class ItemList extends Component {

    renderItems(arr){
        return arr.map((item) => {
            
            const label = this.props.renderProp(item);
            const{id} = item;
            return (
                <li 
                key = {id}
                className="list-group-item"
                onClick={()=>this.props.onCharSelected(id)}>
                    {label}
                </li>
            )
        })
    }
    render() {
      
        const{data}= this.props;
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View, getData)=>{
    return class extends Component{//пропсы на высшем уровне соханяются 

        state = {
            data: null
        }
    
    
        componentDidMount(){
            
            getData()
            .then(data => {
                this.setState({
                    data
                })
            })
        }
    

        render(){
            const {data} = this.state;
        
            if(!data){
                return (
                <div className="holderSpinner">
                    <Spinner/>
                </div>
               )
            }

            return(
                <View {...this.props} data={data}/>
            )
        }
    }
}
const{getAllCharacters} = new GotService();
const {getAllBooks} = new GotService();
const {getAllHouses} = new GotService();

const Characters = withData(ItemList, getAllCharacters);
const Books = withData(ItemList, getAllBooks);
const Houses = withData(ItemList, getAllHouses);

export {Characters};
export {Books};
export {Houses};
