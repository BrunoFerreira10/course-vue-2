<template>
  <div id="app">
    <task-progress :completed="completedTasks" />
    <task-input />
    <task-list />
  </div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue";
import TaskInput from "@/components/TaskInput.vue";
import TaskList from "@/components/TaskList";
import eventbus from "@/eventbus.js";

export default {
  name: "App",
  components: {
    TaskProgress,
    TaskInput,
    TaskList,
  },
  computed: {
    tasks: function () {
      return eventbus.tasks;
    },
    completedTasks: function () {
      var total = 0;
      var complete = 0;

      this.tasks.forEach((task) => {
        total++;
        if (!task.open) complete++;
      });

      if (total == 0) return 100;

      return Number(((complete / total) * 100).toFixed(1));
    },
  },
};
</script>

<style>
:root {
  --bgblue: #544a7d;
  --bgblue-lgt1: #544a7daa;
  --bgyellow: #ffd452;
  --open-task-bg-1: #ba2727;
  --open-task-bg-2: #5a1010;
  --closed-task-bg-1: #1a974a;
  --closed-task-bg-2: #0e3a22;
}

* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;

  font-family: "Baloo Tamma 2", cursive;
  /* font-family: 'Montserrat', sans-serif; */
}

.font-aid {
  padding-top: 0.1rem;
}

body {
  /* Display */
  display: flex;
  justify-content: center;

  /* Positioning */

  /* Box model */
  height: 100vh;

  /* Colors and Typography */
  background: var(--bgblue);
  background: -webkit-linear-gradient(to right, var(--bgyellow), var(--bgblue));
  background: linear-gradient(to right, var(--bgyellow), var(--bgblue));

  /* Others */
}

#app {
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  height: 100%;
  width: 80%;
  padding-top: 10%;
}
</style>