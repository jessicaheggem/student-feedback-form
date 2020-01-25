import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Support extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        console.log('next clicked');
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.props.feels
        })
        this.props.history.push('/comments');
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
                <h1>How well are you being supported?</h1>
                <input
                    type="number"
                    onChange={(event) => this.handleChange('feels', event)}
                />
                <button onClick={this.handleNext}>NEXT</button>

            </>
        );
    }
}



export default connect()(Support);