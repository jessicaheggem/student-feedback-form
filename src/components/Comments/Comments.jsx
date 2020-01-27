import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App/App.css'

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
        // console.log(this.state) // consoles every letter/number typed into input
        this.setState({
           feels: event.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <textarea
                type="text"
                placeholder="Tell me something"
                onChange={(event) => this.handleChange(event)}
                >
                </textarea>
                <br />
                <br />
                <button onClick={this.handleNext} className="button"><span>NEXT</span></button>

            </>
        );
    }
}



export default connect()(Comments);