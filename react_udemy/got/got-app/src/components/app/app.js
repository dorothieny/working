import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage/characterPage';
import BookPage from '../pages/bookPage/bookPage';
import HousePage from '../pages/housePage/housePage'
import ToggleBtn from '../buttons/toggleRandom';
import ErrorMessage from '../errorMessage/errorMessage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import BooksItem from '../pages/booksItem';

export default class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            toggled: true,
            error: false
        }
        this.onToggling = this.onToggling.bind(this);
    }

    componentDidCatch(){
        console.log('error')
        this.setState({error:true});
    }
    
    onToggling(){
        this.setState(({toggled})=>{
           
            return{
                toggled: !toggled
            }
        }) 
    }
   
    
    render(){

        const {toggled, error} = this.state;
        const element = toggled ? <RandomChar/> : null;

        if(error){
            return <ErrorMessage/>
        }
        return (
            <Router>
                <div className="GOTimage"></div>
                <div className="app"> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {element}
                            <ToggleBtn
                            onToggle={this.onToggling}                    
                            />
                        </Col>
                       
                    </Row>
                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/houses' component={HousePage}/>
                    <Route path='/books' exact component={BookPage}/>
                    <Route path='/books/:id' render={
                    ({match})=>{
                        const{id}=match.params;
                        return <BooksItem bookId={id}/>}
                    
                    }/>
                </Container>
            </div>
            </Router>
        );
    }
};
