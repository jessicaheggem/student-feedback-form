import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Support extends Component {
    render() {
        return (
            <h1>How well are you being supported?</h1>
           
        );
    }
}



export default connect()(Support);