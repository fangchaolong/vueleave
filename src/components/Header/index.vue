<template>
  <div class="header-box">
    <div class="header-menu" v-for="(item,index) in menu" :key="index" v-if="!item.hidden">
      <span @click="handlerouter(item.path)">
        {{item.meta.title}}
      </span>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'Header',
  data () {
    return {
      menu: []
    }
  },
  created () {
    if (store.getters.addRouters && store.getters.addRouters[0].path === '/') {
      console.log(store.getters.addRouters[0].children, '这是头部的组件')
      this.menu = store.getters.addRouters[0].children
    }
  },
  methods: {
    handlerouter (path) {
      this.$router.push({ path })
    }
  }
}
</script>
<style lang="less" scoped>
.header-box{
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: #222;
  align-items: center;
  color: #fff;
  .header-menu{
    display: block;
    width: 33.33%;
    text-align: center;
  }
}
</style>
