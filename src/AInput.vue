<template>
  <div id="app">
    <input type="text" placeholder="这是a模块的输入框哟！" />
  </div>
</template>

<script>

export default {
  name: 'AInput',
  components: {
  },
  created() {
    console.log(2323);
  }
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
