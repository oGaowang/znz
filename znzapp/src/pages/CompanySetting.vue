<template>
    <div class="companySetting">
        <header>
            <div class="back iconfont icon-back"  @click="$router.back(-1)" style="color:#0066CC"></div>
            <div class="title">调整公司设置</div>
            <div></div>
        </header>
        <main>
            <section @click="$router.push({name:'setcompanyName'})">
                <div class="left">
                    <div class="iconfont icon-gongsimingcheng1"></div>
                    <div class="title">设置公司名称</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-jiaoseguanli"></div>
                    <div class="title">设置成员角色</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-dianpuzhuangxiu"></div>
                    <div class="title">设置装修类型</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-laiyuan"></div>
                    <div class="title">设置款项构成</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-shoukuan-"></div>
                    <div class="title">设置收款状态</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-jindu"></div>
                    <div class="title">设置渠道来源</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-xiangmu"></div>
                    <div class="title">设置项目模板</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-jiancai"></div>
                    <div class="title">设置建材支出分类</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-Group-"></div>
                    <div class="title">设置内控权限</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-wancheng"></div>
                    <div class="title">完成进度必须上传图片</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-wode"></div>
                    <div class="title">允许业主必须上传图片</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
            <section>
                <div class="left">
                    <div class="iconfont icon-quanxianguanli"></div>
                    <div class="title">完工检查开关</div>
                </div>
                <div class="go iconfont icon-right"></div>
            </section>
        </main>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .companySetting {
        width: 100%;
        height:100%;
        background: #fff;
        display:flex;
        flex-direction: column;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width:100%;
            height: 0.9rem;
            padding: 0 0.3rem;
            box-sizing: border-box;
            color: #333;
            background: #fff;
            font-size: 0.36rem;
            border-bottom: 1px solid rgb(245, 245, 245);
            div {
                width: 15%;
                height:0.9rem;
                line-height:0.9rem;
                color:#666;
                font-size:0.4rem;
            }
            .title {
                width: 70%;
                text-align: center;
            }
        }
        main {
            flex:1;
            overflow:auto;
            section {
                width: 100%;
                height: 1rem;
                display: flex;
                box-sizing: border-box;
                padding: 0 0.4rem;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgb(245, 245, 245);
                .left {
                    display: flex;
                    .iconfont {
                        font-size:0.42rem;
                        margin-right: 0.2rem;
                        color:#444;
                    }
                    .title {
                        font-size: 0.3rem;
                    }
                }
                .go {
                   color:#666;
                   font-size:0.4rem;
                }
            }
        }
    }
</style>
