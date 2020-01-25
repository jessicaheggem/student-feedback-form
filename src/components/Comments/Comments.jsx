import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Comments extends Component {
    render() {
        return (
            <h1>Any comments you want to leave?</h1>
           
        );
    }
}



export default connect()(Comments);