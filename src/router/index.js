import {  createWebHistory, createRouter } from "vue-router";
import TaskList from "../components/TaskList";
import EditTask from "../components/EditTask";

const history = createWebHistory();

const routes = [
  {
    path: "/",
    name: "TaskList",
    component: TaskList,
  },
  {
    path: "/newTask",
    name: "newTask",
    component: EditTask,
    props: {
      task:{
        id: '',
        name: '',
        desc: '',
        status: 'Новая',
        time: '' 
      }
    }
  },
  {
    path: "/task/:id",
    name: "editTask",
    component: EditTask,
  },
];

const router = createRouter({
  routes,
  history
});

export default router;