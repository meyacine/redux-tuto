import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {cancel, StoriesActionsEnum} from "../actions/stories-actions";


function loadStoriesEpic(action$) {
    // Chaque fois que l'action est procéssée par redux store, on la reçoit.
    return action$
        .ofType(StoriesActionsEnum.LOAD_DATA)
        .switchMap(()=> {
            return Observable.of(cancel()).delay(500);
        });
}

export const rootEpic = combineEpics(loadStoriesEpic);