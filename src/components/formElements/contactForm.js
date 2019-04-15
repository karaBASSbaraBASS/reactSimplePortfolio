import React, {Component} from 'react';
import CardBtn from './cardButton';
import CardTextarea from './cardText';
import CardInput from './cardInput';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            message: '',
            error: false
        }
    }
    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    };
    handleChangeValue = e => this.setState({fname: e.target.value});

    render() {
        return(
            <div className="card-side side-back">
                <div className="container-fluid">
                    <form formAction="#" className="card-form" method="POST">
                        
                        <div className="col-xs-6">
                            <CardInput 
                                name='firstName' 
                                id='firstName' 
                                type='text' 
                                placeholder={'Full name'} 
                                value={this.state.fname}
                                onChangeValue={e => this.setState({fname: e.target.value})}/>
                        </div>
                        <div className="col-xs-6">
                            <CardInput 
                                name='email' 
                                id='email' 
                                type='email' 
                                placeholder={'Your email'}
                                value={this.state.email}
                                onChangeValue={e => this.setState({email: e.target.value})}/>
                        </div>

                        <CardTextarea 
                            name='message' 
                            id='message' 
                            placeholder={'Your message'}
                            value={this.state.message}
                            onChangeValue={e => this.setState({message: e.target.value})}/>

                        <CardBtn onClick={(event) => this.handleFormSubmit(event)} className='btn primaryButton' type='button' value='send message'/>
                    </form>

                </div>
            </div>
        )
    }
}
export default ContactForm;