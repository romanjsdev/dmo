import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      TaskList: [],
    }
  },
  mutations:{
    addNewTask(state, task){
        state.TaskList.push(task);
        localStorage.clear();
        localStorage.setItem('TaskList', JSON.stringify(state.TaskList));
    },
    deleteTask(state, task){
        for(let taskItem of state.TaskList){
            if (taskItem.id == task.id){
                let indx = state.TaskList.findIndex((item)=> taskItem.id == item.id);
                state.TaskList.splice(indx, 1);
            }
        }
        localStorage.clear();
        localStorage.setItem('TaskList', JSON.stringify(state.TaskList));
      },
    initTaskList(state, taskList){
        state.TaskList = taskList;
    },
  },
  getters:{
      getTask(state){
          return state.TaskList;
      }
  }
})

export default store;