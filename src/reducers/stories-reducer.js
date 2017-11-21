import {StoriesActionsEnum} from '../actions/stories-actions';

const stories = [
    {
        id: 1,
        title: 'story1'
    },
    {
        id: 2,
        title: 'story2'
    }
];

const initialState = {
    items: []
};

// le reducer prend un state, et une action. Il fait le routage des actions
export function storiesReducer(state = initialState, action) {
    switch (action.type) {
        case StoriesActionsEnum.LOAD_DATA :
            return {items: stories};
        case StoriesActionsEnum.CLEAR_DATA :
            return {items: []};
        default :
            return state;
    }
}

export default storiesReducer;
