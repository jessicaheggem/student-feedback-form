import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Understanding extends Component {
    render() {
        return (
            <h1>How well are you understanding the content?</h1>
           
        );
    }
}



export default connect()(Understanding);