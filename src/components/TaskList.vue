<template>
  <div v-if="taskList.length !=0 ? true : false">
    <Task  v-for="task of taskList" :key="task.id" :task="task"/>
  </div>
  <div v-else>Задач нет</div>
  <button @click="addNewItem">Добавить</button>
</template>

<script>
import router from '../router';
import store from '../store'
import Task from './Task';

export default {
  name: 'Task List',
  components: {
    Task
  },
  data(){
    return{
      taskList: store.getters.getTask
    }
  },
  mounted(){

  },
  methods:{
    addNewItem(){
      let task = {
        id: '',
        name: '',
        des: '',
        status: '',
        time: ''
      }
      router.push({name:'newTask', task:{task}});
    },
  }
}
</script>


<style scoped>

</style>
