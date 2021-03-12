import React from 'react';
import ToDoInput from './input_bar/ToDoInput';
import ToDoSubmitButton from './submit_button/ToDoSubmitButton';

class BodyHeader extends React.Component {
    state = { term: '' };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
    }
    handleChange = (e) => {
        this.setState({ term: e.target.value })
        //console.log(this.state)
    }
    render() {
        //console.log(this.state)
        return (
            <div style={{
                display: 'flex', alignItems: 'center'
            }}>
                <div style={{
                    display: 'inline-block'
                }}>
                    <ToDoInput handleChange={this.handleChange} value={this.state.term} />
                </div>
                <div style={{
                    display: 'inline-block'
                }}>
                    <ToDoSubmitButton handleSubmit={this.handleSubmit} />
                </div>


            </div>
        );
    }
}

export default BodyHeader;