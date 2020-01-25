import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Understanding extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        console.log('next clicked');
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.props.feels
        })
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        console.log(this.state)
        this.setState({
           feels: event.target.value
        })
    }

    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <input
                    type="number"
                    onChange={(event) => this.handleChange('feels', event)}
                />

                <button onClick={this.handleNext}>NEXT</button>
            </>
        );
    }
}



export default connect()(Understanding);