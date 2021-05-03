<template>
  <div id="task-input">
    <input type="input" placeholder="New task?" v-model="taskText" ref="taskInputText">
    <button @click="addTask" >+</button>
  </div>
</template>

<script>
import eventbus from '@/eventbus'

export default {
  name: 'TaskInput',
  data() {
    return {
      taskText: ''
    }
  },
  methods: {
    addTask() {
      eventbus.taskAdded({
        open: true,
        text: this.taskText        
      })
      this.taskText = ''
      this.$refs.taskInputText.focus()
    }
  }
}
</script>

<style scoped>

  #task-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  input {
    width: 400px;
    height: 2rem;;

    background: rgba(255,255,255,.2);
    color: white;

    border: 1px solid white;
    border-radius: 8px 0px 0px 8px;
    outline: none;

    line-height: 2rem;
    font-size: 1.1rem;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
  }

  input::placeholder {
    color: var(--bgblue);
    opacity: 0.5;
    font-weight: 600;
  }

  /* input:focus::placeholder {
    color: transparent;
  } */

  button {
    height: 2rem;
    width:  2rem;
    
    border: 1px solid white;
    border-left: none;
    border-radius: 0px 8px 8px 0px;

    background-color: var(--bgblue);
    color: white;

    text-align: center;
    font-weight: 600;
    line-height: 2rem;    
    font-size: 1rem;
    padding-top: 0.1rem;
  }

  button:hover {
    background-color: var(--bgblue-lgt1);
  }

  button:active {
    background-color: var(--bgblue);
  }



</style>