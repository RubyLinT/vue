<template>
    <div>
        <el-cascader        
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
        ></el-cascader>
        <el-cascader
            expand-trigger="hover"
            :options="options"
            v-model="selectedOptions2"
            @change="handleChange">
        </el-cascader>
    </div>    
</template>
<script>
    export default {
        name:'cascader',
        data () {
            return {
                selectedOptions: [],
                selectedOptions2: [],
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                            }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                    }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                            }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                            }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格',
                            children:[{
                                value:'t1',
                                label:'T1'
                            }]
                            }]
                        }]
                    }],
            
            
            }
        },
        methods:{
            handleChange(value) {
                console.log(value)
            }
        }
    }
</script>
<style>

</style>