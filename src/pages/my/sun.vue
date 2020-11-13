<template>
    <div>
        这是孙子的组件
        {{$attrs.messagec}}
        <a @click="handleclick" href="javascript:void(0);">向祖父组件发送消息</a>
    </div>
</template>
<script>
export default {
    name: 'Sun',
    data() {
        return {
        }
    },
    methods: {
        handleclick() {
            this.$emit('getCData', '孙组件说：大家都来听我的')
        }
    }
}
</script>