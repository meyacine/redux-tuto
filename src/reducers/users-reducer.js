import {UsersActionsEnum} from '../actions/users-actions';

const initialState = {
    users: [
        {
            id: 1,
            name: 'yacine'
        },
        {
            id: 2,
            name: 'meyacine'
        }
    ],
    current: null,
    loading: false
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        default : return state;
    }
}

export default usersReducer;
