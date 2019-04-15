import React, {Component} from 'react';

class CardTextarea extends Component {
    render() {
        return(
            <fieldset>
                <textarea   
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChangeValue}
                    required>
                </textarea>
            </fieldset>
        )
    }
}

export default CardTextarea;