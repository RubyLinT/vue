<template>
    <div>
    <p>基础布局</p>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <p>分栏间隔</p>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <p>分栏偏移</p>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="1" :offset="6">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <p>对齐方式</p>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="end">
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <p>响应式布局</p>
        <el-row :gutter="10" tag="a">
            <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="1">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <p>hidden</p>
        <div class="hidden-xs-only">hidden-xs-only:当视口在 xs 尺寸时隐藏</div>
        <div class="hidden-sm-only">hidden-sm-only:当视口在 sm 尺寸时隐藏</div>
        <div class="hidden-sm-and-down">hidden-sm-and-down:当视口在 sm及以下 尺寸时隐藏</div>
        <div class="hidden-sm-and-up">hidden-sm-and-up:当视口在 sm及以上 尺寸时隐藏</div>
    </div>
</template>
<script>
    export default {
        name:'rowCol',
        data () {
            return {
               he:'111' 
            }
        }
    }
</script>
<style>
    .el-row {
        margin-bottom:20px;
    }
    .el-col {
        border-radius:4px;
    }
    .bg-purple-dark {
        background:#99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius:4px;
        min-height:36px;
    }
    .row-bg {
        padding:10px 0;
        background-color:#f9fafc;
    }
</style>