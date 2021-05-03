<template>
  <div id="task-progress">
    <h1>Tasks</h1>
    <div class="progress-border">
      
      <div class="progress" :style="{width: completed + '%'}">        
      </div>
      <span class="font-aid">{{ completed + '%' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskProgress",
  props: {
    completed: Number
  }
}
</script>

<style scoped>
  #task-progress{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .progress-border {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;    
    
    height: 2rem;
    width: 100%;

    border: 1px solid white;
    border-radius: 1rem;
    overflow: hidden;
  }

  .progress {
    grid-area: 1 / 1 / 2 / 2;        
    background-color: rgb(80, 129, 80);    
  }

  h1 {    
    color: white;    
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 10px;
  }
  span{
    grid-area: 1 / 1 / 2 / 2;
    font-size: 1rem;
    line-height: 1rem;
    color: white;    
    margin: auto;
  }

</style>