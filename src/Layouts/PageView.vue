<template>
  <div class="pageview">
    <Header/>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <div class="page-footer">
      自定义的脚
    </div>
  </div>
</template>
<script>
import { Header } from '@/components'
export default {
  name: 'PageView',
  components: { Header },
  methods: {
  }
}
</script>
<style lang="less" scope>
.pageview{
    display: flex;
    flex-direction: column;
    flex: auto;
    box-orient: vertical;
    box-direction: normal;
    flex-direction: column;
    min-height: 0;
    background: #f0f2f5;
    min-height: 100vh;
    .page-header{
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;
        color: rgba(0,0,0,.65);
        font-size: 14px;
    }
    .page-content{
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
        min-height: 0;
    }
    .page-footer{
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;
        color: rgba(0,0,0,.65);
        font-size: 14px;
    }
}
</style>
