<template>
  <div id="app">
    <task-progress :completed="completedTasks"/>
    <task-input />
    <task-list :tasks="tasks"/>
  </div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue";
import TaskInput from "@/components/TaskInput.vue";
import TaskList from "@/components/TaskList";

import eventbus from "@/eventbus.js"

export default {
  name: "App",
  components: {
    TaskProgress,
    TaskInput,
    TaskList,
  },
  data() {
    return {
      tasks: []      
    }
  },
  computed: {
    completedTasks: function() {
      var total = 0
      var complete = 0

      this.tasks.forEach(task => {
        total++
        if(!task.open)
          complete++
      })

      if(total == 0)
        return 100

      return Number(((complete / total) * 100).toFixed(1))
    }
  },
  methods: {
    saveLocal() {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    }   
  },
  created() {
    eventbus.onTaskAdded(task => {

      if(task.text == "")
        return

      this.tasks.push(task)
    })
    eventbus.onTaskClicked(task => {
      const idx = this.tasks.indexOf(task)
      this.tasks[idx].open = !this.tasks[idx].open
      this.saveLocal()
    })
    eventbus.onTaskDeleted(task => {      
      const idx = this.tasks.indexOf(task)
      this.tasks.splice(idx, 1)
      this.saveLocal()
    })
  },
  mounted() {
    if(localStorage.getItem('tasks')){
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch (e) {
        localStorage.removeItem('tasks')
      }
    }
  },
  watch: {
    tasks() {
      this.saveLocal()
    }  
  }
}
</script>

<style>
:root {
  --bgblue: #544a7d;
  --bgblue-lgt1: #544a7daa;
  --bgyellow: #ffd452;
  --open-task-bg-1: rgb(186, 39, 39);
  --open-task-bg-2: rgb(90, 16, 16);
  --closed-task-bg-1: rgb(26, 151, 74);
  --closed-task-bg-2: rgb(14, 58, 34);
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Baloo Tamma 2", cursive;
}

.font-aid {
  padding-top: 0.2rem;
}

body {
  display: flex;
  justify-content: center;
  height: 100vh;
  background: var(--bgblue); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    var(--bgyellow),
    var(--bgblue)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    var(--bgyellow),
    var(--bgblue)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 80%;
}
</style>
