import React from 'react';

const Task = ({ taskContent }) => {
    return ( 
        <input placeholder={taskContent} className="app__taskBox_task"></input>
     );
}
 
export default Task;