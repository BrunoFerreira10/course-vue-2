<template>
  <div class="task" :class="task.open ? 'open-task' : 'closed-task'" @click="setStatus()">
    <div/>
    <p>{{ task.text }} </p>
    <button class="font-aid" @click.stop="deleteTask()" >X</button>
  </div>
</template>

<script>
import eventbus from '@/eventbus'

export default {
  props: {
    task: {      
      text: String,
      open: Boolean
    }
  },
  data() {
    return {      
    }
  },
  methods: {
    setStatus() {
      eventbus.taskClicked(this.task)

    },
    deleteTask() {
      eventbus.taskDeleted(this.task)
    }
  }
}
</script>

<style scoped>

  .task {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    min-height: 6rem;
    width: 14rem;
    padding: 10px;
    margin: 10px;

    color: white;    
    border-radius: 1rem;

    overflow: unset;
  }

  .open-task {
    background-color: var(--open-task-bg-1);
    border-left: 1rem solid var(--open-task-bg-2);
  }

  .closed-task {
    background-color: var(--closed-task-bg-1);
    border-left: 1rem solid var(--closed-task-bg-2);
  }

  .open-task > button {
    background-color: var(--open-task-bg-2);    
  }

  .closed-task >  button {
    background-color: var(--closed-task-bg-2);    
  }

  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.2rem;    
  }

  .closed-task > p {
    text-decoration-line: line-through;
  }

  p::selection {
    background-color: #ffffff33;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    height:1rem;
    width: 1rem;
    border: none;
    border-radius: 1rem;
        
    font-size: 0.5rem;    
    font-weight: 600;
    
    color: white;    
  }

  button::selection {
    background-color: transparent;
  }

</style>