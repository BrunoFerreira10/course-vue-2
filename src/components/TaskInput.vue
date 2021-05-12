<template>
  <div id="task-input">
    <input
      class="font-aid"
      type="input"
      placeholder="New task?"
      v-model="taskText"
      ref="taskInputText"
      @keyup.enter="addTask"
    />
    <button class="font-aid" @click="addTask">+</button>
  </div>
</template>

<script>
import eventbus from "@/eventbus";

export default {
  name: "TaskInput",
  data() {
    return {
      taskText: "",
    };
  },
  methods: {
    addTask() {
      eventbus.taskAdded({
        open: true,
        text: this.taskText,
      });
      this.taskText = "";
      this.$refs.taskInputText.focus();
    },
  },
};
</script>

<style scoped>
#task-input {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
}

input {
  width: 100%;
  height: 2rem;  
  padding-left: 0.5rem;
  border: 1px solid white;
  border-radius: 8px 0px 0px 8px;

  color: white;
  background: rgba(255, 255, 255, 0.2);
  line-height: 2rem;
  font-size: 1.1rem;

  outline: none;
}

input::placeholder {
  color: var(--bgblue);
  opacity: 0.5;
  font-weight: 600;
}

button {
  height: 2rem;
  width: 2rem;
  border: 1px solid #fff;
  border-left: none;
  border-radius: 0px 8px 8px 0px;

  color: #fff;
  background-color: var(--bgblue);
  text-align: center;
  font-weight: 600;
  line-height: 2rem;
  font-size: 1rem;
}

button:hover {
  background-color: var(--bgblue-lgt1);
}

button:active {
  background-color: var(--bgblue);
}
</style>