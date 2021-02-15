<template>
    <div>
        <p>Id:<span>{{ task.id }}</span></p>
        <p>Название:<input v-model="task.name" :placeholder="task.name" type="text"></p>
        <p>Описание:</p><textarea v-model="task.desc" :placeholder="task.desc" ></textarea>
        <p>Статус:
            <select v-model="task.status" >
                <option>Новая</option>
                <option>В работе</option>
                <option>Выполнена</option>
            </select>
        </p>
        <p>{{task.time}}</p>
        <button @click="Save">Сохранить</button>
        <div v-if="route">
            <button @click="Delete">Удалить</button>
        </div>
    </div>
</template>

<script>
import store from '../store';
import router from '../router';

export default {
  name: 'EditTask',
  props: [],
  data(){
      return{
          task:{
            id: store.getters.getTask.length+1,
            name: '',
            desc: '',
            status: 'Новая',
            time: ''
          },
          route: ()=> this.$route.params.id != undefined
      }
  },
  mounted(){
      if(this.$route.params.id != undefined){
        for(let taskItem of store.getters.getTask){
            if (taskItem.id == this.$route.params.id){
                this.task = taskItem;
            }
        }
      }
  },
  methods:{
      Save(){
        if(this.$route.params.id){
            store.commit('deleteTask', this.task);
        }
        store.commit('addNewTask',{id:this.task.id, name:this.task.name, desc:this.task.desc, 
            status:this.task.status, time:Date.now()});
        router.push('/');
        console.log(this.task.id)
      },
      Delete(){
        store.commit('deleteTask', this.task);
        router.push('/');
    }
  }
}
</script>

<style scoped>
    button{
        margin: 10px;
    }
</style>