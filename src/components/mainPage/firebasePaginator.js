import React from 'react';
import firebase from '../../base.js';
 
class FirebasePaginator extends React.Component {
    constructor() {
        super();
        this.state = {
          currentItem: '',
          username: '',
          items: []
        }
    }
    
    
    render() {
        return (
            <section className='display-item'>
                <div className="wrapper">
                    <ul>
                    {this.state.items.map((item) => {
                        return (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>brought by: {item.user}</p>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </section>
        )
    }
}
export default FirebasePaginator;