<template>
    <div>
        这是中央事件传参的brother1
        <a @click="handleclick" href="javascript:void(0);">点击向外发出一个消息</a>
    </div>
</template>
<script>
import Bus from '../../bus'
export default {
    name: 'Brother1',
    data() {
        return {}
    },
    methods: {
        handleclick() {
            console.log(Bus)
            Bus.$emit('globalevent', 'brother1说：欢迎来到我的世界')
        }
    }
}
</script>
