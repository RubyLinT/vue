<template>
    <div>
        <ul>
            <li v-for="(item,index) in items" v-on:click="incr" :key="index" >{{item}}</li>
        </ul>    
        <!-- <span v-once  @click="changeOnce">{{once}}</span>    
        <button type="button" @click="changeOnce">修改</button> -->
        <div id="demo">
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        name:'forV',
        data () {
            return {
                items:this.forData,
                once:'哈哈哈',
                show: true
            }
        },
        methods: {
            changeOnce:function() {
                console.log(this.once)
                this.once = '嘿嘿'
            },
            incr:function() {
                console.log(2222)
                this.$emit('inc',{msg:'1111',once:this.once})
            }
        },
        // props:['forData']
        props:{
            forData:Array,//验证数据类型
        }
    }
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>