import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class ReviewFeedback extends Component {
    
    handleNext = () => {
        console.log('next clicked');
        this.props.dispatch({
            type: 'ADD_REVIEW_FEEDBACK',
            payload: this.props.feels
        })
        // this.props.history.push('/reviewFeedback'); 
        //could add Thank you page after submitting form
    }

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                <p>Feelings: </p>
                <p>Understanding: </p>
                <p>Support: </p>
                <p>Comments: </p>
                <button onClick={this.handleNext}>SUBMIT</button>
            </>
        );
    }
}



export default connect()(ReviewFeedback);