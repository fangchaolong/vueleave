<template>
    <div>
        <p>brother4:v-model传参</p>
        接受来自父组件的消息：{{message}}
        <p><a @click="handleclick" href="javascript:void(0);">向父组件发送消息</a></p>
    </div>
</template>
<script>
export default {
    name: 'Brother4',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            message: this.value
        }
    },
    methods: {
        handleclick() {
            console.log('aaaa')
            this.$emit('input', '来自brother4组件的消息：这是使用v-model来进行通信')
        }
    }
}
</script>
