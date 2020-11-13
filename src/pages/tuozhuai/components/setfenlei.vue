<template>
    <div class="setfenlei">
        <p>分类标题</p>
        <div v-for="(item, index) in data" :key="index">
            <input v-model="data[index]" />
        </div>
        <button @click="add" type="primary">添加</button>
    </div>
</template>
<script>
export default {
    name: 'setfeilei',
    props: {
        data: {
            type: Array,
            default: () => [
                ''
            ]
        }
    },
    data() {
        return {}
    },
    methods: {
        add() {
            this.data.push('')
        }
    }
}
</script>
<style>
    .setfenlei{
        text-align: left;
    }
</style>
