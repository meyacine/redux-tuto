export const StoriesActionsEnum = {
    LOAD_DATA: 'LOAD_DATA',
    CLEAR_DATA: 'CLEAR_DATA'
};

export function loadData(){
    return {
        type : StoriesActionsEnum.LOAD_DATA
    }
}

export function cancel(){
    return {
        type : StoriesActionsEnum.CLEAR_DATA
    }
}