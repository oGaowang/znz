<template>
    <div class="projectList">
        <el-table :data="templateList" style="width: 100%">
            <el-table-column prop="imageUrl" label="模板名称" width="160">
            </el-table-column>
            <el-table-column prop="title" label="预设天数" width="160">
            </el-table-column>
            <el-table-column prop="describe" label="备注" width="100">
            </el-table-column>
            <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                        编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return {
                templateList:[]
            }
        },
        created(){
            this.getTemplateInfo()
        },
        methods:{
            ...mapMutations({
                getOrganizationId:'getOrganizationId'
            }),
            getTemplateInfo(){
                this.axios({
                    method:'get',
                    url:'http://app.zhuangneizhu.com/v2/set/getTemplateInfo.do',
                    params:{
                        userId:this.userId,
                        organizationId:this.organizationId,
                        version:this.version
                    },
                }).then(res=>{
                    console.log(res)
                })
            }
        },
        computed:{
            ...mapState([
                'organizationId',
                'userId',
                'version'
            ])
        },
        watch:{
            organizationId(i){
              this.getOrganizationId(i)
              console.log(this.organizationId)
              this.getTemplateInfo()
            }
        }
    }
</script>

<style lang="scss">
    .projectList{
        padding:20px;
        box-sizing: border-box;
    }
</style>
