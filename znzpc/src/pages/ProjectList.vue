<template>
    <div class="projectList">
        <el-table :data="templateList" style="width: 100%">
            <el-table-column prop="templateName" label="模板名称" width="300">
            </el-table-column>
             <el-table-column prop="operation" label="内容" width="100">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                </template>
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
                   this.templateList=res.data.data;
                   console.log(this.templateList)
                })
            },
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
