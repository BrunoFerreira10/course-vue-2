<template>
  <div class="task" :class="task.open ? 'open-task' : 'closed-task'" @click="toogleStatus()">
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
    toogleStatus() {
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

    width: 14rem;
    min-height: 6rem;
    padding: 10px;
    margin: 10px;
    border-radius: 1rem;

    color: #fff;    

    overflow: unset;
    cursor: pointer;
  }

  .open-task {
    border-left: 1rem solid var(--open-task-bg-2);

    background-color: var(--open-task-bg-1);
  }

  .closed-task {
    border-left: 1rem solid var(--closed-task-bg-2);

    background-color: var(--closed-task-bg-1);
  }

  .open-task > button {
    background-color: var(--open-task-bg-2);    
  }

  .closed-task >  button {
    background-color: var(--closed-task-bg-2);    
  }

  p {
    font-size: 1rem;
    line-height: 1.2rem;    
    text-align: center;
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
        
    color: #fff;    
    font-size: 0.5rem;    
    font-weight: 600;

    cursor: pointer;
    user-select: none;
  }

  button::selection {
    background-color: transparent;
  }

</style>