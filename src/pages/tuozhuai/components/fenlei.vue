<template>
    <div class="fenleibox">
        <div class="top">
            <span>{{fenlei.title}}</span>
            <span style="color:red;" @click="handledel">删除</span>
            <span>更多</span>
        </div>
        <div class="bottom" >
            <span v-for="(item, index) in fenlei.list" :key="index">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Feilei',
    props: {
        fenlei: {
            type: Object,
            default: () => ({})
        }
    },
    watch: {
        fenlei: {
            handler: function(newvalue, oldvalue) {
                this.fenlei = newvalue
            },
            deep: true
        }
    },
    methods: {
        handledel() {
            this.$emit('del')
        }
    }
}
</script>
<style scoped>
.fenleibox{
    width: 100%;
    padding: 10px 10px;
}
.top{
    display: flex;
    justify-content: space-between;
}
.bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
.bottom span{
    background: #ccc;
    display: block;
    height: 32px;
    line-height: 32px;
    padding: 0px 10px;
    margin-right: 12px;
    margin-top: 10px;
    border-radius: 16px;
    font-size: 14px;
}
</style>
