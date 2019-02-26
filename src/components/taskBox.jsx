import React from 'react';
import Task from './common/task';

const TaskBox = ({ tasks }) => {
    return ( 
        <React.Fragment>
            {tasks.map( task => 
                <Task key={task._id} taskContent={task.content}/>
                )}
        </React.Fragment>
     );
}
 
export default TaskBox;