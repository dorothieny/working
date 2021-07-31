import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {Switch,Route} from 'react-router-dom';
const App = () => {
    return (
       
        <Switch>
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route path='/main' exact component={MainPage}/>
            <Route path='/cart/' component={CartPage}/>
            <Route path='/main/:id' render={
                ({match})=>{
                    const{id}=match.params;
                    return <ItemPage itemId={id}/>}
            }/>
        </div>
        </Switch>
    )
}

export default App;