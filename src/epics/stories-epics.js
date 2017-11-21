import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {StoriesActionsEnum} from "../actions/stories-actions";


function loadStoriesEpic(action$) {
    return action$
        .filter(action => action.type===StoriesActionsEnum.LOAD_DATA)
        .do(action => console.log(action))
        .ignoreElements();
}

export const rootEpic = combineEpics(loadStoriesEpic);