import Vue from 'vue'

export default new Vue({
  methods: {
    taskAdded(task) {
      this.$emit('taskAdded', task)
    },
    onTaskAdded(callback) {
      this.$on('taskAdded', callback)
    },
    taskDeleted(task) {
      this.$emit('taskDeleted', task)
    },
    onTaskDeleted(callback) {
      this.$on('taskDeleted', callback)
    },
    taskClicked(task) {
      this.$emit('taskClicked', task)
    },
    onTaskClicked(callback) {
      this.$on('taskClicked', callback)
    }
  }  
})