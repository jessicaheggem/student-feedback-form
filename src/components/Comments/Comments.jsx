import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Comments extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        console.log('next clicked');
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.props.feels
        })
        this.props.history.push('/reviewFeedback');
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
                <h1>Any comments you want to leave?</h1>
                <input
                    type="number"
                    onChange={(event) => this.handleChange('feels', event)}
                />

                <button onClick={this.handleNext}>NEXT</button>

            </>
        );
    }
}



export default connect()(Comments);