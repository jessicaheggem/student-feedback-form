import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';



class Feeling extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        console.log('next clicked');
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.props.feels
        })
        this.props.history.push('/understanding');
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
                <h1>How are you feeling today?</h1>
                <input
                    type="number"
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