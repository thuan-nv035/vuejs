<template>
  <div id = "app">
      <div>{{message || toUpperCase}}</div>
      <div>{{money }}</div>
      <div>{{nameOfUser}}</div>
      <div>{{user.name}}</div>
      <button @click="increaseNumber()">IncreaseNumber</button>
      <button @click="decreaseNumber()">DecreaseNumber</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      money: 10000,
      message: "hello vietnam",
      numberCounter: 10,
      user: {
        name: "nguyen van thuan",
        age: 28
      }
    }
  },
  computed: {
    nameOfUser() {
      const {name} = this.user
      return name
    }
  },
  watch: {
    numberCounter(newValue, oldValue) {
      console.log("old value:" + oldValue)
      console.log("new value:" + newValue)
    }
  },
  methods: {
    increaseNumber() {
      this.numberCounter++
      return this.numberCounter
    },
    decreaseNumber() {
      this.numberCounter--
      return this.numberCounter
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
