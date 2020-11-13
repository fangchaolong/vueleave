<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'App',
  watch: {
    '$route': function (to, from) {
      this.currentRouter = to.path
    }
  },
  beforeMount () {
    this.currentRouter = this.$route.path
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
