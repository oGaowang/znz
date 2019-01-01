<template>
    <div class="adSet">
        <header>
            <div class="h-l" @click="$router.back(-1)">返回</div>
            <div class="h-c">设置启动时广告页</div>
            <div class="h-r">说明</div>
        </header>
        <div class="main">
            <div class="alert">建议图片尺寸为750*1334px;大小不超过1M</div>
            <div class="upload">
                <div class="u-top">
                    <div class="u-l">上传图片</div>
                    <div class="u-r">上传</div>
                </div>
                <input type="file" class="file" @change="handFile" ref="file">
                <div class="im" v-if="imgUrl">
                    <img :src="imgUrl" alt="">
                </div>
            </div>
            <div class="link">
                <div class="title">
                    跳转链接:
                </div>
                <div class="inp">
                    <input type="text" placeholder="输入跳转链接(可选)" v-model="url">
                </div>
            </div>
            <div class="offline" @click="open('picker4')">
                <div class="title">
                    过期自动下线时间
                </div>
                <div class="right">
                    <p> {{expireTime}}</p>
                    <div class="go"></div>
                </div>
            </div>
        </div>
        <div class="btn" @click="handleSave">保存</div>
        <mDatetimePicker ref="picker4" type="date" v-model="dateValue" :startDate="currenDate" year-format="{value} 年" month-format="{value} 月" d ate-format="{value} 日" @confirm="handleChange">
        </mDatetimePicker>
    </div>
</template>

<script>
    import {
        DatetimePicker,
        Button,
        Indicator
    } from 'mint-ui';
    export default {
        components: {
            mDatetimePicker: DatetimePicker,
            mBtton: Button,
        },
        data() {
            return {
                imgUrl: '',
                advertisement: '',
                dateValue: '',
                url: '',
                expireTime: '',
                currenDate: '',
            }
        },
        created() {
            this.currenDate = new Date();
            this.axios({
                method: 'get',
                url: 'http://app.zhuangneizhu.com/v2/set/getBootAdvertising.do',
                params: {
                    organizationId: 4297,
                    userId: 5960,
                    version: 3.4
                }
            }).then(res => {
                this.advertisement = res.data.data.photo;
                this.imgUrl = 'https://zhuangneizhu.oss-cn-hangzhou.aliyuncs.com/' + res.data.data.photo;
                this.expireTime = res.data.data.validTime;
                this.url = res.data.data.url;
            })
           
        },
        methods: {
            handFile() {
                Indicator.open();
                let files = this.$refs.file.files[0];
                let fd = new FormData();
                fd.append("files", files)
                this.axios.post('http://app.zhuangneizhu.com/image/addOssPhoto.do', fd).then((res) => {
                    this.advertisement = res.data;
                    this.imgUrl = 'https://zhuangneizhu.oss-cn-hangzhou.aliyuncs.com/' + res.data;
                }).then(() => {
                    Indicator.close()
                })
            },
            open(picker) {
                this.$refs[picker].open();
            },
            handleChange(value) {
                let y = value.getFullYear();
                let m = value.getMonth() + 1 > 9 ? value.getMonth() + 1 : '0' + (value.getMonth() + 1);
                let d = value.getDate() > 9 ? value.getDate() : '0' + value.getDate();
                this.expireTime = y + '.' + m + '.' + d;
            },
            handleSave() {
                console.log(this.imgUrl)
                this.axios({
                    method: 'get',
                    url: 'http://app.zhuangneizhu.com/v2/set/setBootAdvertising.do',
                    params: {
                        organizationId: '4297',
                        userId: '5960',
                        version: '3.4',
                        advertisement: this.advertisement,
                        expireTime: this.expireTime,
                        url: this.url,
                    },
                    dateType: 'json',
                }).then(res => {
                    console.log(res)
                })
            },
        },
    }
</script>

<style lang="scss">
    .adSet {
        width: 100%;
        background: #f5f8ff;
        display: flex;
        flex-direction: column;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 0.9rem;
            padding: 0 0.3rem;
            box-sizing: border-box;
            color: #333;
            background: #fff;
            border-bottom: 1px solid rgb(245, 245, 245);
            .h-l {
                flex: 1;
            }
            .h-c {
                flex: 6;
                text-align: center;
                font-size: 0.36rem;
            }
            .h-r {
                flex: 1;
                text-align: right;
                font-size: 0.32rem;
                font-weight: 600;
                color: #3478F7;
            }
        }
        .main {
            width: 100%;
            flex: 1;
            .alert {
                width: 100%;
                height: 0.8rem;
                line-height: 0.8rem;
                color: red;
                font-size: 0.3rem;
                padding: 0 0.3rem;
                box-sizing: border-box;
            }
            .upload {
                position: relative;
                .u-top {
                    padding: 0 0.3rem;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.3rem;
                    color: #333;
                    height: 0.8rem;
                    background: #fff;
                }
                .file {
                    position: absolute;
                    display: block;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background: transparent;
                }
                .u-r {
                    color: #3478F7;
                }
                .im {
                    width: 100%;
                    background: #fff;
                    padding: 0.2rem 0.3rem;
                    img {
                        width: 100%;
                    }
                }
            }
            .link {
                width: 100%;
                height: 0.9rem;
                background: #fff;
                margin-top: 0.2rem;
                padding: 0 0.3rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                font-size: 0.3rem;
                .title {
                    width: 1.28rem;
                    margin-right: 0.3rem;
                }
                .inp {
                    flex: 1;
                    height: 100%;
                    input {
                        width: 100%;
                        height: 100%;
                        font-size: 0.3rem;
                    }
                     ::placeholder {
                        font-size: 0.3rem;
                    }
                }
            }
            .offline {
                width: 100%;
                height: 0.9rem;
                background: #fff;
                margin-top: 0.2rem;
                padding: 0 0.3rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.3rem;
                .title {
                    margin-right: 0.3rem;
                }
                .right {
                    display: flex;
                    align-items: center;
                    p {
                        color: #333;
                    }
                    .go {
                        width: 0.16rem;
                        height: 0.24rem;
                        background: #666;
                        background: url('../assets/images/perR.png');
                        background-size: cover;
                        margin-left: 0.1rem;
                    }
                }
            }
        }
        .btn {
            background: rgb(0, 121, 254);
            height: 0.9rem;
            width: 6.7rem;
            margin: 0 auto;
            font-size: 0.32rem;
            color: #fff;
            border-radius: 0.1rem;
            text-align: center;
            line-height: 0.9rem;
            margin-top: 0.6rem;
            margin-bottom: 0.6rem;
            letter-spacing: 0.02rem;
        }
    }
</style>
