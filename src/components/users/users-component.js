import React from 'react';
import {connect} from 'react-redux';
import UsersList from './user-list-component';
import User from './user-component';

export function Users(props) {
    return (
        <div>
            <UsersList {...props}/>
            {props.loading && <p>Please wait</p>}
            {props.current && <User {...props.current} />}
        </div>
    )
}

function mapState(state) {
    return state;
}

export default connect(mapState)(Users);