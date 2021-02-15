<template>
  <div class="task-wrapper" v-bind:style="{ backgroundColor: color }">
      <div>{{ task.id }}</div>
      <div>{{ task.name }}</div>
      <div>{{ task.desc }}</div>
      <div>{{ task.status }}</div>
      <div>{{ task.time }}</div>
      <div><button @click="editTask">Изменить</button><button @click="deleteTask">Удалить</button></div>
  </div>
</template>

<script>
import router from '../router';
import store from '../store';

export default {
  name: 'Task',
  props: ['task'],
  data(){
      return {
          color: this.getColor()
      }
  },
  methods:{
      editTask(){
          router.push({ name: 'editTask', params: { id: this.task.id}})
      },
      getColor(){
          switch(this.task.status){
              case 'В работе':
                  return 'yellow';
              case 'Выполнена':
                  return 'grey';
              default:
                  return 'green'  
          }
      },
      deleteTask(){
          store.commit('deleteTask', this.task);
          router.push('/');
      }
  }
}
</script>


<style scoped>
    .task-wrapper{
        display:flex;
        flex-direction: row;
        margin: 25px;
    }
    div{
        margin: 10px;
        width: 90%;
    }
</style>