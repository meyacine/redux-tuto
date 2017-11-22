import React from 'react';
import {connect} from 'react-redux';
import UsersList from './user-list-component';

export function Users(props) {
    return (
        <div>
            <UsersList {...props}/>
            {props.loading && <p>Please wait</p>}
            {props.current && <div>
                <p>{props.current.name}</p>
                <dt>Repositories</dt>
                <dd> {props.current.public_repos}</dd>
                <dt>Followers</dt>
                <dd> {props.current.followers}</dd>
                <img src={props.current.avatar_url}/>
            </div>}
        </div>
    )
}

function mapState(state) {
    return state;
}

export default connect(mapState)(Users);