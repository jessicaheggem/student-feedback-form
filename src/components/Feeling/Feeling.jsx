import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';

class Feeling extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        // console.log('next clicked');
        let input = this.state.feels;
        if (input === "") {
            alert('Must enter feeling rating between 1-5');
        } else {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state.feels
            })
            this.props.history.push('/understanding');
        }

    }

    handleChange = (event) => {
        // console.log(this.state) // consoles every number typed into input
        this.setState({
            feels: event.target.value
        })
    }

    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <input
                    type="number"
                    placeholder="Rate 1-5"
                    value={this.state.feels}
                    onChange={(event) => this.handleChange(event)} />
                <button onClick={this.handleNext} >NEXT</button>
            </>
        );
    }
}

const putReduxStateOnProps = (store) => {
    return {
        store
    }
}

export default connect(putReduxStateOnProps)(Feeling);