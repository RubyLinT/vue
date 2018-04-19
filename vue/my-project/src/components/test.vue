<template>
    <div>
      <for-V v-bind:for-data="item"></for-V>
        <!--<input v-model="he" id="input" v-on:focus="value">-->
        <el-button @click="show = !show">click me</el-button> 
        <div style="display:flex;margin-top:20px;height:100px;">
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition>
            <transition name="el-zoom-in-center">
                <div v-show="show" class="transition-box">.el-zoom-in-center</div>
            </transition>
            <transition name="el-zoom-in-top">
                <div v-show="show" class="transition-box">.el-zoom-in-top</div>
            </transition>
            <transition name="el-zoom-in-bottom">
                <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
            </transition>
        </div>  
        <div style="margin-top:20px;height:200px;">
            <el-collapse-transition>
                <div v-show="show">
                    <div class="transition-box">el-collapse-transition</div>
                    <div class="transition-box">el-collapse-transition</div>
                </div>
            </el-collapse-transition>
        </div>   
    </div>    
</template>
<script>
import forV from './forV.vue'
    export default {
        name:'test',
        data () {
            return {
                 he:'11111',
                 show:true,
                 item:[12,34,56]
            }           
        },
        methods: {
            value:function() {
                this.he = '2222';
                console.log(this.he)
            }
        },
        components:{
            forV
        }
    }
</script>
<style>
#input {
    height:32px;
    padding:0 10px;
    border-radius: 3px;
    outline: none;
}
.transition-box{
    margin-bottom:10px;
    width:200px;
    height:100px;
    border-radius:4px;
    background-color:#409eff;
    text-align:center;
    color:#fff;
    padding:40px 20px;
    box-sizing:border-box;
    margin-right:20px;
}
</style>