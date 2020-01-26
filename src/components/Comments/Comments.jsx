import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Comments extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        // console.log('next clicked');
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.feels
        })
        this.props.history.push('/reviewFeedback');
    }

    handleChange = (event) => {
        console.log(this.state) // consoles every letter/number typed into input
        this.setState({
           feels: event.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <input
                    type="text"
                    placeholder="Tell me something"
                    onChange={(event) => this.handleChange(event)}
                />

                <button onClick={this.handleNext}>NEXT</button>

            </>
        );
    }
}



export default connect()(Comments);