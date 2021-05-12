<template>
  <div id="task-list">
    <template v-if="tasks.length > 0">      
      <task v-for="task in tasks" :key="task.name" :task="task"/>
    </template>
    <template v-else>
      <p class="no-task">Very nice! You are free!</p>
      <p>Add new tasks to start to work!</p>
    </template>
  </div>
</template>

<script>

import Task from "@/components/Task.vue";
import eventbus from "@/eventbus"

export default {
  components: {
    Task,
  },
  computed: {
    tasks: function () {
      return eventbus.tasks
    }
  }
}
</script>

<style scoped>

#task-list {
  display: flex;
  justify-content: center;  
  flex-wrap: wrap;

  margin-top: 2rem;
}
p {
  width: 100%;

  text-align: center;
  color: white;  
}

.no-task {
  font-size: 2rem;
}

</style>