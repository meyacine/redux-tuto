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
        case UsersActionsEnum.FETCH_USER_ACTION :
            return {
                ...state,
                current: null,
                loading: true
            }
        case UsersActionsEnum.FETCH_USER_FULFILLED_ACTION :
            return {
                ...state,
                current: action.payload,
                loading: false
            }
        default : return state;
    }
}

export default usersReducer;
