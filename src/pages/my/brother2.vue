<template>
    <div>
        这是中央事件传参的brother1
        {{message}}
    </div>
</template>
<script>
import Bus from '../../bus'
export default {
    name: 'Brother1',
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        Bus.$on('globalevent', (val) => {
            console.log('这是：'+val)
            this.message = val
        })
    }
}
</script>
