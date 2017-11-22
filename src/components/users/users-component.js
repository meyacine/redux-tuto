import React from 'react';
import {connect} from 'react-redux';
import UsersList from './user-list-component';

export function Users(props) {
    return (
        <div>
            <UsersList {...props}/>
        </div>
    )
}

function mapState(state) {
    return state;
}

export default connect(mapState)(Users);