import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {StoriesActionsEnum} from "../actions/stories-actions";


function loadStoriesEpic(action$) {
    // Chaque fois que l'action est procéssée par redux store, on la reçoit.
    return action$
        .ofType(StoriesActionsEnum.LOAD_DATA)
        .do(action => console.log('epic ', action.type))
        .ignoreElements();
}

export const rootEpic = combineEpics(loadStoriesEpic);