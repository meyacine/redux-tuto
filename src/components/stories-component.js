import React from 'react';
import {connect} from 'react-redux';
import StoryList from "./story-list-component";
import {cancel, loadData} from "../actions/stories-actions";

// mes props sont issues du connect qui pioche dans le state
export function Stories(props) {
    return (
        <div>
            <button type="button" onClick={props.loadData}>LOAD DATA</button>
            <button type="button" onClick={props.cancel}>CLEAR DATA</button>
            <StoryList {...props}/>
        </div>
    )
}

// Le state est issue du reducer
function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        loadData: () => dispatch(loadData()),
        cancel: () => dispatch(cancel())
    }
}

// Je connecte mon Stories component à mapState
export default connect(mapState, mapDispatch)(Stories);