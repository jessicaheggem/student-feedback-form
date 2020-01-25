import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class Feeling extends Component {
    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <button>NEXT</button>
            </>
        );
    }
}

const putReduxStateOnProps = (store) => {
    return {
        store
    }
}

export default connect(putReduxStateOnProps)(Feeling);