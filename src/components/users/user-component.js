import React from 'react';
import {fetchUserAction} from "../../actions/users-actions";
import {connect} from "react-redux";

function User(props){
    return (
        <div>
            <span>{props.name}</span>
            <button type="button" onClick={() => props.loadUser(props.name)}>Load User</button>
            <hr/>
        </div>
    )
}

function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        loadUser : (login) => dispatch(fetchUserAction(login))
    }
}

export default connect(mapState, mapDispatch)(User);