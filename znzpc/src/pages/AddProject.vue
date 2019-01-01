<template>
    <div class="addProject">
        <div class="content">
            <div class="left">
                <p><i class="el-icon-tickets"></i><span>添加模板</span></p>
                <p><i class="el-icon-tickets"></i><span>设置项目进度</span></p>
            </div>
            <div class="right">
                 <el-form label-position="left" label-width="90px" :model="form">
                    <el-form-item label="模板名称：">
                        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="可选模板：">
                        <el-select v-model="form.region" placeholder="从预设模板库中新建模板">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                   
                </el-form>
                <div class="myTable">
                    <el-table :data="progressList" style="width: 100%">
                        <el-table-column prop="uid" label="编号" width="50">
                        </el-table-column>
                        <el-table-column prop="imageUrl" label="进度名称" width="160">
                        </el-table-column>
                        <el-table-column prop="title" label="完成该进度时间" width="160">
                        </el-table-column>
                        <el-table-column prop="describe" label="负责角色" width="100">
                        </el-table-column>
                        <el-table-column prop="content" label="进度标准"  width="160">
                            <template slot-scope="scope">
                                <el-button size="mini" type="info" @click="handleSee(scope.$index, scope.row)">
                                    查看</el-button>
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
                    <el-button icon="el-icon-plus" @click="dialogVisible=true">添加项目进度</el-button>
                </div>
            </div>
        </div>
         <el-dialog title="添加项目进度" :visible.sync="dialogVisible" width="600px;" :before-close="handleClose" center>
            <div class="dialogContent">
               <el-form label-position="left" label-width="90px" :model="progressForm">
                    <el-form-item label="进度名称">
                        <el-input v-model="progressForm.name" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="完成时间">
                        <el-input v-model.number="progressForm.time" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="负责角色">
                        <el-select v-model="progressForm.region" placeholder="从预设模板库中新建模板">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>

                </el-form>
                <vue-editor id="editor" useCustomImageHandler @imageAdded="handleImageAdded" v-model="content" > </vue-editor>
                <el-button type="primary">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
 import {
        VueEditor
    } from 'vue2-editor'
    export default {
         components: {
            VueEditor
        },
        data(){
            return{
                form:{
                    name:'',
                    region:'',
                },
                progressForm:{
                    name:'',
                    time:'',
                    region:''
                    
                },
                progressList:[],
                dialogVisible:false,
                content:'',

            }
        },
        methods:{
            handleClose(){
                this.dialogVisible=false
            },
            handleImageAdded(){

            }
        }
    }
</script>

<style lang="scss">
    .content {
        width: 1080px;
        height: 740px;
        margin: 0 auto;
        display: flex;
        background: #fff;
        border: 1px solid #e4e4e4;
        margin-top: 20px;
        .left {
            width: 169px;
            height: 100%;
            background: #fcfcfc;
            border-right: 1px solid #e4e4e4;
            position: relative;
            p{
                width: 165px;
                height: 50px;
                background: #9ea7b4;
                position: absolute;
                left: 0;
                z-index:600;
                color: #fff;
                font-size: 14px;
                display: flex;
                align-items: center;
                padding-left: 20px;
                i {
                    margin-right: 4px;
                }
                span {
                    line-height: 50px;
                }
            }
            p::after {
                content: '';
                position: absolute;
                left: 185px;
                width: 0;
                height: 0;
                border-top: 25px solid transparent;
                border-bottom: 25px solid transparent;
                border-right: 25px solid transparent;
                border-left: 25px solid #9ea7b4;
            }

            p:first-child{
                  top: 50px;
            }
            p:last-child{
                  top: 200px;
            }
        }
        .right {
            flex: 1;
            display: flex;
            padding: 20px 40px;
            flex-direction: column;
           .el-input__inner{
               width:300px;
           }
           .el-button{
               margin-top:20px;
           }
          
        }
    }
</style>
