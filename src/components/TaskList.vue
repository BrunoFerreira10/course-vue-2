<template>
  <div id="task-list">
    <task v-for="task, id in tasks" :key="id" :task="task"/>
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

</style>