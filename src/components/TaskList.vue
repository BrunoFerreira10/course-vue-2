<template>
  <div id="task-list">
    <task v-for="task, id in tasks" :key="id" :task="task"/>
  </div>
</template>

<script>

import Task from "@/components/Task.vue";

export default {
  props: {
    tasks: Array
  },
  components: {
    Task,
  },
};
</script>

<style scoped>

#task-list {
  display: flex;
  flex-wrap: wrap;

  margin-top: 2rem;

}

</style>