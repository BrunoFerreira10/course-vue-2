import Vue from 'vue'

export default new Vue({
  data: {
    tasks: []
  },
  methods: {
    taskAdded(task) {

      if (task.text == "")
        return

      const sameName = t => t.text === task.text
      const validName = this.tasks.filter(sameName).length == 0

      if(validName)
        this.tasks.push(task)
      else
        alert("We already have a task with '" + task.text + "' text!")  

      this.$emit('taskAdded', task)
    },

    onTaskAdded(callback) {
      this.$on('taskAdded', callback)
    },

    taskDeleted(task) {
      const idx = this.tasks.indexOf(task)
      this.tasks.splice(idx, 1)
      this.$emit('taskDeleted', task)
    }, 

    onTaskDeleted(callback) {
      this.$on('taskDeleted', callback)
    },

    taskClicked(task) {
      const idx = this.tasks.indexOf(task)
      this.tasks[idx].open = !this.tasks[idx].open
      this.$emit('taskClicked', task)
    },

    onTaskClicked(callback) {
      this.$on('taskClicked', callback)
    },
    
    saveLocal() {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    }
  },
  watch: {
    tasks: {      
      deep: true,
      handler() {
        this.saveLocal()
      }
    }
  },
  created() {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch (e) {
        localStorage.removeItem('tasks')
      }
    }
  }
})