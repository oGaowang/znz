<template>
    <div class="header">
        <div class="left">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="装内助logo">
            </div>
            <h1>装内助管理系统</h1>
        </div>
        <ul class="right">
            <li class="company" @click="handleisShow">
                <i class="iconfont icon-fl-jia"></i>
                <span>{{companyName}}</span>
                <i class="iconfont icon-xiajiantou"></i>
                <transition name="fade">
                    <div class="companyList" v-show="isShow">
                        <p v-for="(item,key) in organizationList" :key="key" @click="swichCompany(key)">{{item.name}}</p>
                    </div>
                </transition>
            </li>
            <li class="job"><i class="iconfont icon-zhanghaoquanxianguanli"></i><span>{{userInfo.name}} | {{userInfo.roleName}} | {{userInfo.departName}}</span></li>
            <li><i class="iconfont icon-icon_zhanghao"></i><span>{{userInfo.isAdmin?'管理员':'非管理员'}}</span></li>
            <li @click="signOut"><i class="iconfont icon-icon_rukou"></i><span>退出</span></li>
        </ul>
        <el-dialog title="" :visible.sync="dialogVisible" width="600px;" :before-close="handleClose" center>
            <div class="dialogContent">
                <div class="im"><img src="../assets/img/alert.png" alt=""></div>
                <h2>您的服务已到期</h2>
                <div class="vipInfo">{{vipInfo}}</div>
                <div class="contact">请联系装内助（400-181-0060）延长服务期，也可以通过下方提交申请</div>
               <el-form label-position="left" label-width="80px" :model="formData">
                    <el-form-item label="企业名称">
                        <el-input v-model="formData.comName" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="联系姓名">
                        <el-input v-model="formData.name" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="formData.mobile" placeholder="请输入内容"></el-input>
                    </el-form-item>
                      <el-form-item label="备注">
                        <el-input v-model="formData.remarks" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary">提交申请</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        data() {
            return {
                index: 0,
                organizationList: [],
                isShow: false,
                userInfo: {},
                companyName: '',
                dialogVisible: false,
                vipInfo:'123456',
                formData:{
                    comName:'',
                    name:'',
                    mobile:'',
                    remarks:''
                }
            }
        },
        computed: {
            ...mapState({
                userId: 'userId',
                organizationId: 'organizationId',
                version: 'version',
            }),
        },
        created() {
            this.gainOrganizationList();
        },
        methods: {
            ...mapMutations({
                getOrganizationId: 'getOrganizationId',
            }),
            gainOrganizationList() { //获取公司列表
                this.axios({
                    methods: 'get',
                    url: 'http://app.zhuangneizhu.com/user/gainOrganizationList.do',
                    params: {
                        organizationId: this.organizationId,
                        userId: this.userId,
                        version: this.version,
                    }
                }).then(res => {
                    this.organizationList = res.data.data;
                    this.companyName = this.organizationList[this.index].name
                    this.gainUserInfo()
                })
            },
            gainUserInfo() { ////获取用户的信息
                this.axios({
                    methods: 'get',
                    url: 'http://app.zhuangneizhu.com/user/gainUserInfo.do',
                    params: {
                        organizationId: this.organizationId,
                        userId: this.userId,
                        version: this.version,
                    }
                }).then(res => {
                   
                    if (res.data.code == 11280) {
                        this.dialogVisible = true;
                        this.gainVipInfo();
                    } else if (res.data.code == 10000) {
                        this.userInfo = res.data.data;
                    
                    }
                })
            },
            gainVipInfo() { //获取VIP信息
                this.axios({
                    methods: 'get',
                    url: "http://app.zhuangneizhu.com/set/gainVipInfo.do",
                    params: {
                        organizationId: this.organizationId,
                        version: this.version,
                        userId: this.userId,
                    },
                }).then(res => {
                    console.log(res.data.data)
                   this.vipInfo=res.data.data.vipInfo;
                })
            },
            handleClose() { //关闭模态框
                this.dialogVisible = false;
                this.index = 0;
            },
            swichCompany(index) { //切换公司名称
                this.index = index;
                this.companyName = this.organizationList[this.index].name;
                this.formData.comName=this.organizationList[this.index].name;
                this.formData.name=this.userInfo.name;
                this.formData.mobile=this.userInfo.mobile
            },
            handleisShow() { //公司列表开关
                this.isShow = !this.isShow;
            },
            signOut() { //退出
                this.$router.push({
                    path: '/'
                });
                sessionStorage.clear();
            }
        },
        watch: {
            index(i) {
                console.log(i)
                this.getOrganizationId(this.organizationList[i].organizationId)
                this.companyName = this.organizationList[this.index].name
                this.gainUserInfo();
            }
        }
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        height: 100%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        .left {
            display: flex;
            align-items: center;
            margin-left: 20px;
            .logo {
                width: 40px;
                height: 40px;
            }
            h1 {
                margin-left: 20px;
                letter-spacing: 3px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            li {
                margin-right: 20px;
                cursor: pointer;
                font-size: 16px;
                display:flex;
                align-items:center;
                margin-right: 25px;
                i {
                    font-size: 20px;
                    margin-right: 4px;
                }
            }
            li:first-child {
                margin-right: 35px;
                position: relative;
                .icon-xiajiantou {
                    margin-left: 3px;
                    font-size: 14px;
                }
                .companyList {
                    position: absolute;
                    width: 100%;
                    box-shadow: #ccc 0px 0px 4px;
                    top: 50px;
                    left: 0;
                    z-index: 2;
                    font-size: 14px;
                    p {
                        background: #fff;
                        color: #444;
                        height: 40px;
                        line-height: 40px;
                        padding: 0 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p:hover {
                        color: #66b1ff;
                        background: #c6e2ff;
                    }
                }
            }
        }
        .dialogContent {
            display:flex;
            flex-direction: column;
            align-items: center;
            .im {
                width: 220px;
                height: 164px;
                img{width:100%;height:100%;}
            }
            h2{
                margin-top:20px;
            }
            .vipInfo,{
                margin-top:20px;
                font-size:18px;
            }
            .contact{
                margin-top:10px;
                font-size:16px;
                margin-bottom:30px;
                font-weight: 600;
            }
            .el-form-item__content{
                width:420px;
              
            }
            .el-form-item__label{
                font-size:15px;
            }
            .el-input__inner{
                font-size:15px;
            }
            button{
                width:400px;
                height:50px;
                color:18px;
                margin:20px 0;
                font-size:16px;
            }
        }
    }
</style>
