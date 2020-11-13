<template>
    <div style="color:red;">
        这是子组件: {{messagec}} <a @click="handleclick" href="javascript:void(0);">向父组件发送消息</a>
        <sun v-bind="$attrs" v-on="$listeners"/>
    </div>
</template>
<script>
import sun from './sun'
export default {
    name: 'Child',
    props: {
        message: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            messagec: this.message
        }
    },
    methods: {
        handleclick() {
            this.$emit('getchildrendata', '子组件说：你好我的father')
        }
    },
    components: {
        sun
    }
}
</script>