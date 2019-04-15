import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import MainPage from './components/mainPage/MainPage';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import Footer from './components/common/Footer';
import './index.css';

class App extends React.Component {
    render(){
       
        return (
           
                <BrowserRouter >
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/reactSimplePortfolio/" component={MainPage} exact/>
                            <Route path="/reactSimplePortfolio/:id" component={Detail} exact/>
                            <Route component={NotFound}/>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
