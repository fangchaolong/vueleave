<template>
    <div>
        <p>brother3:这是provide和inject父子组件之间传参</p>
        {{message}}
    </div>
</template>
<script>
export default {
    inject: ['for'],
    name: 'Brother3',
    data() {
        return {
            message: this.for
        }
    },
    mounted() {
        
    }
}
</script>
