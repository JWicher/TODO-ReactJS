import React, { Component } from 'react';
import Header from './components/header';
import TaskBox from './components/taskBox';
import { getFakeTasks } from './services/fakeTaskService';

class App extends Component {
  state = {
    tasks: [],
    buttons: [
      {label: "Add", type: "primary",action: () => this.handleAddTask()},
      {label: "Remove", type: "danger", action: task => this.handleRemoveTask(task)},
      {label: "Clear", type: "secondary", action: () => this.handleClearTasksBox()}
    ]
  }

  componentDidMount(){
    const tasks = getFakeTasks();
    this.setState({ tasks })
  };

  handleAddTask = () => {
    let tasks = [ ...this.state.tasks ];
    let newTask_id = tasks.length > 0 ? tasks[tasks.length-1]._id + 1 : 1;
    const newTask = {_id: newTask_id , content: `Task number ${newTask_id}`};
    tasks.push(newTask);

    this.setState({ tasks })
  };

  handleRemoveTask = () => {
    let tasks = [ ...this.state.tasks ];
    tasks.pop();
    this.setState({ tasks });
  };

  handleClearTasksBox = () => {
    const tasks = [];
    this.setState({ tasks })
  };

  render() {
    const { tasks, buttons } = this.state;

    return (
      <div className="app">
          <Header buttons={buttons}/>
          <TaskBox tasks={tasks}/>
      </div>
    );
  }
}

export default App;
