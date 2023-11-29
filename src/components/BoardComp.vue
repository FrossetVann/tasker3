<template>
  <h1>доска</h1>
  <div class="workspace">
    <ul class="column" v-for="(column, i) in columns" :key="i">
      <input
      v-if="column.showNameInput"
      v-model="column.name" class="column-name-input column-name" type="text"
      @keyup.enter="toggleNameInput(i)"
      >
      <h3
      v-else
      @click="toggleNameInput(i)"
      class="column-name">
      <p v-show="column.name === ''">{{ i }}</p>
       {{ column.name }}</h3>
      <button class="delete btn" @click="removeColumn(i)">удалить</button>
      <li
      v-for="(task, j) in column.tasks" :key="j">
        <input
        v-if="task.showNameInput"
        v-model="task.name" class="task-name-input" type="text"
        @keyup.enter="toggleTaskNameInput(i, j)"
        >
        <h4
        v-else
        @click="toggleTaskNameInput(i, j)"
        class="task-name">
        <p v-show="column.name === ''">{{ j }}</p>
        {{ task.name }}</h4>
        <button class="delete btn" @click="removeTask(i, j)">удалить</button>
      </li>
      <div class="form-control">
        <button @click="addItem(i)">создать таск</button>
      </div>
    </ul>
    <div class="form-control">
      <button @click="addColumn">создать колонку</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: []
    }
  },
  methods: {
    addColumn () {
      this.columns.push({
        name: '',
        tasks: [],
        showNameInput: false
      })
    },
    addItem (columnIndex) {
      this.columns[columnIndex].tasks.push({
        name: '',
        showNameInput: false
      })
    },
    removeTask (columnIndex, taskIndex) {
      this.columns[columnIndex].tasks.splice(taskIndex, 1)
    },
    removeColumn (columnIndex) {
      this.columns.splice(columnIndex, 1)
    },
    toggleNameInput (columnIndex) {
      this.columns[columnIndex].showNameInput = !this.columns[columnIndex].showNameInput
    },
    toggleTaskNameInput (columnIndex, taskIndex) {
      this.columns[columnIndex].tasks[taskIndex].showNameInput = !this.columns[columnIndex].tasks[taskIndex].showNameInput
    }
  }
}
</script>
