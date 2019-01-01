<template>
    <div class="login">
        <div class="wrapper">
            <div class="logo">
                <img src="../assets/img/login-logo.png" alt="logo">
                <p>装修智能管理软件</p>
            </div>
            <div class="form">
                <div><input type="text" placeholder="手机号码" maxlength="11" v-model="tel"></div>
                <div><input type="text" placeholder="验证码" maxlength="6" v-model="code"></div>
                <p v-if="bstop" @click="handleSendcode" :plain="true">获取验证码</p>
                <p v-else>{{time}}s后可以再次发送</p>
            </div>
            <button @click="handleLogin">登陆</button>
            <div class="bottom">
                <span @click="jumpRegister">点击注册</span>
                <span>部分功能预览</span>
            </div>
        </div>
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
                tel: '', //手机号码
                code: '', //验证码
                time: 60, //倒计时
                bstop: true,
                timer: null, //定时器
            }
        },
        computed: {
            ...mapState({
                version: 'version'
            })
        },
        methods: {
            ...mapMutations({
                getUserId: 'getUserId',
                getOrganizationId: 'getOrganizationId',
            }),
            handleSendcode() { //发送验证码
                let RegExp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/; //手机号码的正则
                if (RegExp.test(this.tel)) { //手机号码的判断为true
                    this.bstop = false;
                    this.timer = setInterval(() => {
                        --this.time;
                        if (this.time < 0) {
                            clearInterval(this.timer)
                            this.bstop = true;
                        }
                    }, 1000);
                    this.axios({ //验证码的数据请求
                        method: "GET",
                        url: 'http://app.zhuangneizhu.com/user/gainCode.do',
                        params: {
                            mobile: this.tel,
                            version: this.version,
                            appType: "znz"
                        }
                    })
                } else {
                    this.$message({
                        message: '您输入的号码有误',
                        type: 'warning'
                    });
                }
            },
            handleLogin() { //点击登录
                this.axios({
                        method: "get",
                        url: 'http://app.zhuangneizhu.com/user/login.do', //登陆的接口
                        params: {
                            type: "android",
                            companyName: "",
                            version: this.version,
                            mobile: this.tel,
                            code: this.code,
                        }
                    })
                    .then(res => {
                        if (res.data.code == 10000) {
                            this.getUserId(res.data.data.userId);
                            var organizationsArr = res.data.data.organizations;
                            var len = organizationsArr.length;
                            for (var i = 0; i < len; i++) {
                                if (organizationsArr[i].isDefault) {
                                    this.getOrganizationId(organizationsArr[i].organizationId); //拿到默认的organizationId 
                                }
                            }
                            this.$router.push('/layout'); //跳转到主页
                        } else if (res.data.code == 10020) {
                            console.log('验证码有误')
                        } else {
                            console.log("其他原因")
                        }
                    })
            },
            jumpRegister() {}
        },
        created(){
          
        },
        beforeDestroy() {
            clearInterval(this.timer) //清除定时器
            this.timer = null;
        },
    }
</script>

<style lang="scss">
    .login {
        width: 100%;
        height: 100%;
        background: url('../assets/img/login_bg.png') no-repeat center center;
        background-color: #0079fe;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrapper {
            width: 450px;
            padding-top: 30px;
            border-radius: 20px;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .logo {
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 66px;
                    height: 90px;
                }
                p {
                    text-align: center;
                    line-height: 40px;
                    color: rgb(163, 160, 160);
                }
            }
            .form {
                width: 400px;
                background: #f6f8ff;
                margin: 0 auto;
                position: relative;
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                input {
                    height: 40px;
                    width: 360px;
                    padding: 0 2px;
                    margin: 0 auto;
                    background: #f6f8ff;
                    color: #666;
                    font-size: 14px;
                }
                div:nth-of-type(1) input {
                    border-bottom: 1px solid #ccc;
                }
                p {
                    color: #5677FC;
                    font-size: 12px;
                    position: absolute;
                    right: 20px;
                    bottom: 14px;
                    cursor: pointer;
                }
            }
        }
        button {
            width: 400px;
            background: #5677FC;
            border-radius: 6px;
            height: 40px;
            color: #fff;
            font-size: 14px;
            margin: 0 auto;
            font-weight: bolder;
            margin-top: 20px;
            cursor: pointer;
            letter-spacing: 5px;
        }
        .bottom {
            width: 400px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 60px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            span {
                padding: 0 20px;
                color: #5677FC;
                cursor: pointer;
            }
        }
    }
</style>
