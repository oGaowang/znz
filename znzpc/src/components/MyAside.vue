<template>
        <aside>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                <el-menu-item index="/layout/smallProgram">
                    <i class="el-icon-mobile-phone"></i>
                    <span slot="title">系统首页</span>
                </el-menu-item>
                <el-menu-item index="/layout/smallProgram">
                    <i class="el-icon-mobile-phone"></i>
                    <span slot="title">我的待办</span>
                </el-menu-item>
                <el-submenu index="/layout/imageText">
                    <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>项目管理</span>
                    </template>
                    <el-menu-item index="/layout/imageText/addImageText">
                        <i class="el-icon-circle-plus"></i>
                        <span slot="title">添加项目</span>
                    </el-menu-item>
                    <el-menu-item index="/layout/imageText/imageTextList">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">项目统计</span>
                    </el-menu-item>
                    <el-menu-item index="/layout/imageText/imageTextList">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">项目列表</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="/layout/official">
                    <i class="el-icon-news"></i>
                    <span slot="title">装介绍管理</span>
                </el-menu-item>
                <el-menu-item index="/layout/official">
                    <i class="el-icon-menu"></i>
                    <span slot="title">成员管理</span>
                </el-menu-item>
                <el-menu-item index="/layout/official">
                    <i class="el-icon-menu"></i>
                    <span slot="title">建材库管理</span>
                </el-menu-item>
                <el-submenu index="/layout/project">
                    <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>项目模板管理</span>
                    </template>
                    <el-menu-item index="/layout/project/addProject">
                        <i class="el-icon-circle-plus"></i>
                        <span slot="title">添加模板</span>
                    </el-menu-item>
                    <el-menu-item index="/layout/project/projectList">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">模板列表</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="/layout/official">
                    <i class="el-icon-menu"></i>
                    <span slot="title">广告页管理</span>
                </el-menu-item>
                <el-menu-item index="/layout/official">
                    <i class="el-icon-menu"></i>
                    <span slot="title">公司设置</span>
                </el-menu-item>
                

                 
            </el-menu>
        </aside>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    aside {
        background-color: #D3DCE6;
        color: #333;
        height: 100%;
        width: 100%;
        
        overflow-x: hidden;
        .el-menu{
            width:100%;
        }
    }
</style>
