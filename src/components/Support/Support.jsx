import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App/App.css'

// import axios from 'axios';


class Support extends Component {

    state = {
        feels: ''
    }

    handleNext = () => {
        // console.log('next clicked');
        let input = this.state.feels;
        if (input === "") {
            alert('Must enter support rating between 1-5');
        } else {
            this.props.dispatch({
                type: 'ADD_SUPPORT',
                payload: this.state.feels
            })
            this.props.history.push('/comments');
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
                <h1>How well are you being supported?</h1>
                <input
                    className="rating"
                    type="number"
                    placeholder="Rate 1-5"
                    onChange={(event) => this.handleChange(event)}
                />
                <br />
                <button onClick={this.handleNext} className="button"><span>NEXT</span></button>

            </>
        );
    }
}



export default connect()(Support);