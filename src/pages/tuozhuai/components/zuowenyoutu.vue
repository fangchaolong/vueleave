<template>
    <div class="zwyt">
        <div class="top">
            <span>左文右图</span>
            <span style="color:red;" @click="handledel">删除</span>
            <span>换一换</span>
        </div>
        <div class="bottom">
            <div class="left">
                <img :src="a6" alt="">
            </div>
            <div class="right">
                <p class="name">书籍名称</p>
                <p class="desc">这是小说的简介这是小说的简介这是小说的简介这是小说的简介</p>
                <p class="auther">作者、简介、状态</p>
            </div>
        </div>
    </div>
</template>
<script>
import a6 from '@/assets/6.jpg'
export default {
    name: 'zuowenyoutu',
    data() {
        return {
            a6
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
.zwyt{
    width: 100%;
    padding: 10px 10px;
}
.top{
    display: flex;
    justify-content: space-between;
}
.bottom{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
}
.left{
    width: 36%;
    height: 100%;
}
.left img{
    width: 100%;
    height: 100%;
}
.right{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: space-around;
    height: 100%;
    margin: 4%;
}
.right p{
    margin: 0px;
}
.auther{
    font-size: 12px;
}
.desc{
    font-size: 14px;
}
</style>
