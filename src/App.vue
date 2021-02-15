<template>
  <router-view />
</template>

<script>
import store from './store';
export default {
  name: 'App',
  components: {
  },
  mounted(){
    if(localStorage.getItem('TaskList') != null){
      let TaskList = JSON.parse(localStorage.getItem('TaskList'));
      store.commit('initTaskList', TaskList);
    }
  }
}
</script>

<style>

</style>