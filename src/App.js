import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/mainPage/MainPage';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import Footer from './components/common/Footer';
import './index.css';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={List} exact/>
                    <Route path="/currency/:id" component={Detail} exact/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;