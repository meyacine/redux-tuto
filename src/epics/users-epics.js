import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {fetchUserFulfilledAction, UsersActionsEnum} from "../actions/users-actions";


function loadUserEpic(action$) {
    return action$
        .ofType(UsersActionsEnum.FETCH_USER_ACTION)
        .switchMap(({payload}) => { // destructuration de l'action
            return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
                .map(user => {
                    return fetchUserFulfilledAction(user);
                })
        })
}

export const rootEpic = combineEpics(loadUserEpic);