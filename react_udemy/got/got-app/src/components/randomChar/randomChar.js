import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotScript';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {

    GotService = new GotService();
    

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount(){
    this.updateCharacter();
    this.timerId = setInterval(this.updateCharacter, 3000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    onError =(err)=>{
        this.setState({
        error: true,
        loading: false,
    })
    }

    updateCharacter =() => {
        console.log('update');
        const id = Math.floor(Math.random()*140 +25);
        //const id = 1300000;
        this.GotService.getCharacter(id)
        .then(char => {
            this.setState({
                char, 
                loading: false})
        })
        .catch(this.onError);
    }
    
    render() {
        const {char, loading, error} = this.state;
        const content = !(loading || error) ? <View char={char}/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const loader = loading? <Spinner/> : null;
        return (
            <div className="random-block rounded">
                {errorMessage}
                {content}
                {loader}
            </div>
        );
    }
}

const View = ({char}) =>{
    let {name, gender, born, died, culture} = char;

    return( 
        <>
        <h4>Random Character {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}




