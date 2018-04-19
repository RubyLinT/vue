<template>
    <div>
        <el-table :data="tableData" style="width:100%" border
            @selection-change="handleSelectionChange"
            ref="multipleTable"
            :default-sort="{prop:'date',order:'descending'}"
            height="500"
        >
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column sortable prop="date" label="日期" width="180"
                :filters="[{text:'2016-05-02',value:'2016-05-02'},{text:'2016-05-03',value:'2016-05-03'},]"
                :filter-method="filterHandler"
            ></el-table-column>
            <el-table-column sortable prop="name" label="姓名" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column :formatter="formatter" prop="address" label="地址"></el-table-column>
        </el-table>
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
    </div>    
</template>
<script>
    export default {
        name:'tableV',
        data () {
            return {
                multipleSelection:[],
                tableData:[{
                    GroupId:'802639661',
                    name:'awxh',
                    address:'shsptqjsjl'
                },{
                    date:'2016-05-03',
                    name:'aawxh2',
                    address:'shsptqjsjl2'
                },{
                    date:'2016-05-04',
                    name:'cwxh3',
                    address:'shsptqjsjl3'
                },{
                    date:'2016-05-05',
                    name:'bwxh4',
                    address:'shsptqjsjl4'
                },{
                    date:'2016-05-06',
                    name:'12wxh',
                    address:'shsptqjsjl'
                },{
                    date:'2016-05-07',
                    name:'wxh2',
                    address:'shsptqjsjl2'
                },]
            }
        },
        methods:{
            handleSelectionChange(val) {
                console.log(val)
                this.multipleSelection = val
                console.log(this.multipleSelection)
            },
            toggleSelection(rows) {
                if(rows) {
                    rows.forEach(row =>{
                        this.$refs.multipleTable.toggleRowSelection(row);
                    })
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            formatter(row,column) {
                return row.address + '号'
            },
            filterHandler(value,row,column){
                const property = column['property'];
                return row[property] === value;
                // return row.date === value
            }
        }
    }
</script>
<style>

</style>