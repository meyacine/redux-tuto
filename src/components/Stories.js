import React from 'react';
import {connect} from 'react-redux';

// mes props sont issues du connect qui pioche dans le state
export function Stories(props){
    return <div>{JSON.stringify(props)}</div>
}

// Le state est issue du reducer
function mapState(state){
    return state;
}

// Je connecte mon Stories component à mapState
export default connect(mapState)(Stories);