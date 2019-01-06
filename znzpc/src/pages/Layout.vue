<template>
    <div class="layout">
        <header>
            <MyHeader></MyHeader>
        </header>
        <section class="sec">
            <aside>
                 <MyAside></MyAside>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </section>
    </div>
</template>

<script>
    import MyHeader from '../components/MyHeader'
    import MyAside from '../components/MyAside'
    export default {
        components: {
            MyHeader,
            MyAside
        },
        created() {
          
        },
        computed: {
           
        }
    }
</script>

<style lang='scss'>
    .layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        header {
            width: 100%;
            height: 60px;
            background-color: #31c2a6;
            border-bottom: 2px solid #279b85;
        }
        section.sec {
            flex: 1;
            display: flex;
            aside {
                width: 200px;
                height: 100%;
                color: #333;
               background: rgb(84, 92, 100);
            }
            main {
                flex: 1;
                height: 100%;
                background: #fff;
                overflow: auto;
            }
        }
    }
</style>
