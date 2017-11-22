import React from 'react';
import User from './user-component';

/**
 * @return {null}
 */
export default function UsersList(props) {
    if (props.users.length === 0) return null;
    return (
        <div>
            {
                props.users.map(user => <User {...user} key={user.id}/>)
            }
        </div>
    );
}