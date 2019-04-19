import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import MainPage from './components/mainPage/MainPage';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import Footer from './components/common/Footer';
import './index.css';

class App extends React.Component {
    render(){
       
        return (
           
                <HashRouter basename='/'>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path='/' component={MainPage} exact/>
                            <Route path='/:id' component={Detail} exact/>
                            <Route component={NotFound}/>
                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
