import React from 'react';
import Story from "./story-component";

export default function StoryList(props) {
    if (props.items.length === 0) return null;
    return (
        <div>
            {
                props.items.map(item => <Story {...item} key={item.id}/>)
            }
        </div>
    );
}