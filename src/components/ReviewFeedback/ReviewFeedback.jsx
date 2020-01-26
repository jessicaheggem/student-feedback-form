import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class ReviewFeedback extends Component {

    handleNext = () => {
        console.log('next clicked');
        axios.post('/reviewFeedback', this.props.store.feedback)
        .then(() =>{
          
        })
        .catch ((error) => {
          alert(error)
        })
        this.props.history.push('/thankYou'); 
    }

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                <p>Feelings: {this.props.store.feedback.feeling}</p>
                <p>Understanding: {this.props.store.feedback.understanding}</p>
                <p>Support: {this.props.store.feedback.support}</p>
                <p>Comments: {this.props.store.feedback.comments}</p>
                <button onClick={this.handleNext}>SUBMIT</button>
            </>
        );
    }
}

const putReduxStateOnProps = (store) => {
    return {
        store
    }
}

export default connect(putReduxStateOnProps)(ReviewFeedback);