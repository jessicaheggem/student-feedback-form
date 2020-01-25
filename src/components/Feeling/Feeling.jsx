import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Feeling extends Component {
    render() {
        return (
            <h1>How are you feeling today?</h1>
           
        );
    }
}



export default connect()(Feeling);