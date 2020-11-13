<template>
  <div>
    个人中心
    <p>这是属性abc: {{abc}}</p><span @click="clickabc('abc')">abc</span>
    <p>这是obj对象的属性title: {{obj.title}}</p>
    <p>功能点：动态改变对象的属性会不会造成视图层的更新</p>
    <span @click="clicktitle('bbbb')">bbbb</span>
    <span @click="clicktitle('cccc')">cccc</span>
    <p>数组的变化arr:</p>
    <p v-for="(item, index) in arr" :key="index">{{item.name}}</p>
    <span @click="clickadd()">往数组里添加一组</span>
    <span @click="clickdel()">移除数组的最后一组</span>

    <p>父子孙组件的传参的方式 $attrs和$listeners</p>
    <child :message="message" :messagec="messagec" @getCData="getCData" @getchildrendata="getchildrendata"/>
    
    <p>中央事件总线，兄弟组件或者无关联组件的通信</p>
    <brother1/>
    <brother2/>
    <p>provide和inject父传给子或者孙组件之间传参</p>
    <brother3/>
    <p>v-model传参：父组件通过v-model传递值给子组件时，会自动传递一个value的prop属性，在子组件中通过this.$emit(‘input’,val)自动修改v-model绑定的值</p>
    <p>来自子组件的信息：{{message}}</p>
    <brother4 v-model="message"/>
  </div>
</template>
<script>
import Vue from 'vue'
import child from './child'
import brother1 from './brother1'
import brother2 from './brother2'
import brother3 from './brother3'
import brother4 from './brother4'
export default {
  provide() {
    return {
      for: this.for
    }
  },
  name: 'my',
  components: {
    child,
    brother1,
    brother2,
    brother3,
    brother4
  },
  data () {
    return {
      obj: {
        title: 'aaaa'
      },
      abc: '这是我的',
      arr: [],
      message: '这是来自my的信息',
      messagec: '这是传递给孙组件的消息',
      for: '父组件说：这是定义好的provide'
    }
  },
  methods: {
    // 这是来自孙组件的信息
    getCData (value) {
      console.log('这是来自孙组件的消息：'+ value)
    },
    // 这是来自子组件的信息
    getchildrendata (value) {
      console.log('这是来自子组件的信息：'+ value)
    },
    clicktitle (value) {
      Vue.set(this.obj, 'title', value)
      // this.obj.title = value
    },
    clickabc (value) {
      this.abc = value
    },
    clickadd () {
      // this.arr.push({
      //   name: this.arr.length
      // })
      // var brr = JSON.parse(JSON.stringify(this.arr))
      // brr.push({
      //   name: brr.length
      // })
      // this.arr = brr
      // this.arr[this.arr.length] = {name: this.arr.length}
      Vue.set(this.arr, this.arr.length, {name: this.arr.length})
    },
    clickdel () {
      this.arr.splice(this.arr.length - 1, 1)
    }
  }
}
</script>
