<template>
  <div>
    这是版本迭代
    <p>功能点：自定义filter</p>
    <p>名字是fangchaolong的转化为aaaaa</p>
    <p>{{name | splicename}}</p>
    <Yuansu/>
    <Shudu/>
  </div>
</template>
<script>
import Yuansu from 'yszqb'
import Shudu from '@/components/shudu'
// import Yuansu from '@/components/Yuansu/Yuansu'
export default {
  name: 'version',
  components: {
    Yuansu,
    Shudu
  },
  data() {
    return {
      name: 'fangchaolong'
    }
  },
  filters: {
    splicename(value) {
      if (value === 'fangchaolong') {
        value = 'aaaaa'
      }
      return value
    }
  }
}
</script>
