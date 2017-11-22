export const UsersActionsEnum = {
    FETCH_USER_ACTION: 'FETCH_USER',
    FETCH_USER_FULFILLED_ACTION: 'FETCH_USER_FULFILLED'
};

export function fetchUserAction(login){
    return {
        type : UsersActionsEnum.FETCH_USER_ACTION,
        payload : login
    }
}

export function fetchUserFulfilledAction(user){
    return {
        type : UsersActionsEnum.FETCH_USER_FULFILLED_ACTION,
        payload : user
    }
}