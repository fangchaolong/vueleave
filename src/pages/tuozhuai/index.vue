<template>
    <div>
        这是拖拽组件的生成方式
        <div>
            
            <draggable
                class="dragArea"
                tag="ul"
                :list="tasks"
                :sort="false"
                :group="{ name: falgs, pull: 'clone' }"
                chosenClass="sortable_chosen_active"
                @change="handlechange"
            >
                <li class="item" v-for="(el, index) in tasks" :key="index">
                    <img :src="el.src" alt="">
                </li>
            </draggable>

            <draggable
                class="dragArea2"
                tag="ul"
                :list="tasks2"
                :group="'right1'"
                @start="start22"
                @end="end22"
                @add="add22"
                @change="handlechange2"
                @choose="handlechoose2"
            >
                <div style="width:100%;text-align:center;box-sizing: border-box;" :class="newIndex==index && 'sortable_chosen_active'" v-for="(el, index) in tasks2" :key="index" @click="handleclick22(index)">
                    <fenlei
                        v-if="el.id === 5"
                        :fenlei="fenleidata"
                        @del="handledel(index)"
                    />
                    <zuowenyoutu
                        v-else-if="el.id === 3"
                        @del="handledel(index)"
                    />
                    <div v-else>没有匹配到</div>
                </div>
            </draggable>

            <div class="setbox">
                <p>设置</p>
                <div v-if="tasks2.length>0">
                    <input v-model="setdata.title" placeholder="请输入标题"/>
                    <setfenlei v-if="tasks2[newIndex] && tasks2[newIndex].id === 5" v-model="setdata.data" :data="setdata.data" />
                    <div v-else>111</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import a1 from '@/assets/1.jpg'
import a2 from '@/assets/2.jpg'
import a3 from '@/assets/3.jpg'
import a4 from '@/assets/4.jpg'
import a5 from '@/assets/5.jpg'
import fenlei from './components/fenlei'
import setfenlei from './components/setfenlei'
import zuowenyoutu from './components/zuowenyoutu'
export default {
    name: 'Tuozhuai',
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    src: a1
                },
                {
                    id: 2,
                    src: a2
                },
                {
                    id: 3,
                    src: a3
                },
                {
                    id: 4,
                    src: a4
                },
                {
                    id: 5,
                    src: a5,
                }
            ],
            tasks2: [],
            falgs: 'right1',
            newIndex: 0,
            oldIndex: 0,
            fenleidata: {
                title: '分类标题',
                list: [
                    '分类1',
                    '分类2',
                    '分类3',
                    '分类4',
                    '分类5',
                    '分类6',
                    '分类7',
                    '分类8',
                ]
            },
            setdata: {
                title: '',
                data: []
            }
        }
    },
    components: {
        draggable,
        fenlei,
        setfenlei,
        zuowenyoutu
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                sort: true,
                group: "description",
                ghostClass: "ghost"
            };
        },
    },
    watch: {
        newIndex: {
            handler: function(newvalue, oldvalue) {
                this.newIndex = newvalue
                if (this.tasks2[newvalue] && this.tasks2[newvalue].id === 5) {
                    this.setdata = this.fenleidata
                } else {
                    this.setdata = {
                        title: '',
                        data: []
                    }
                }
            }
        }
    },
    methods: {
        handlechange(evt) {
            console.log(evt, 1111)
            return false
        },
        start22 (event) {
            this.falgs = '222222'
            console.log('ccc')
        },
        end22 (ev) {
            console.log(ev, 'end22')
            this.falgs = 'right1'
            this.newIndex = ev.newIndex
        },
        add22 (ev) {
            this.newIndex = ev.newIndex
        },
        handlechange2 (ev) {
            console.log(ev)
        },
        // 选中
        handlechoose2 (ev) {
            this.newIndex = ev.newIndex
        },
        // 点击
        handleclick22 (index) {
            console.log(index, 'click')
            this.newIndex = index
        },
        // 点击删除
        handledel (index) {
            console.log('del')
            this.tasks2.splice(index, 1)
        }
    },
}
</script>
<style scoped>
    ul{
        font-style: none;
        list-style: none;
    }
    .dragArea{
        border: 2px solid #ccc;
        width: 300px;
        height: 400px;
        border-radius: 10px;
        text-align: center;
        float: left;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .item{
        width: 45%;
        height: 100px;
        margin: 10px 2.5%;
    }
    .item img {
        width: 100%;
        height: 100%;
    }
    .sortable_chosen_active{
        border: 1px dashed blue;
        box-sizing: border-box;
    }
    .dragArea2{
        border: 2px solid #ccc;
        width: 306px;
        height: 600px;
        overflow-y: auto;
        border-radius: 10px;
        text-align: center;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .setbox{
        float: left;
        width: 300px;
    }
     /* 定义滚动条样式 */
    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color:red;
    }
    
    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    background-color: rgba(255, 254, 254, 0.5);
    }
    
    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 0px rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.5);
    }
</style>
