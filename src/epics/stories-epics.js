import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {StoriesActionsEnum} from "../actions/stories-actions";


function loadStoriesEpic(action$) {
    return action$
        .ofType(StoriesActionsEnum.LOAD_DATA)
        .do(action => console.log(action))
        .ignoreElements();
}

export const rootEpic = combineEpics(loadStoriesEpic);