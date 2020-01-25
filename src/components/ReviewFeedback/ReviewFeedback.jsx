import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class ReviewFeedback extends Component {
    render() {
        return (
            <h1>Review Your Feedback</h1>
            <p>Feelings: {}</p>
            <p>Understanding: {}</p>
            <p>Support: {}</p>
            <p>Comments: {}</p>
           
        );
    }
}



export default connect()(ReviewFeedback);