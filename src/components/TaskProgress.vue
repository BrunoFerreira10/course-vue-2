<template>
  <div id="task-progress">
    <h1>Tasks</h1>
    <div class="progress-border">
      <div class="progress" :style="{ width: completed + '%' }"></div>
      <span class="font-aid">{{ completed + "%" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskProgress",
  props: {
    completed: Number,
  },
};
</script>

<style scoped>
#task-progress {
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
}

.progress-border {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  height: 2rem;
  width: 100%;

  border: 1px solid #fff;
  border-radius: 1rem;
  overflow: hidden;
}

.progress {
  grid-area: 1 / 1 / 2 / 2;

  background-color: #508150;
}

h1 {
  color: #fff;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: 10px;
}

span {
  grid-area: 1 / 1 / 2 / 2;

  margin: auto;

  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
}
</style>