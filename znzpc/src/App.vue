<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
html,body,#app{
  width:100%;
  height:100%;
}

li{
  list-style-type: none;
}

input{
  border:0;
  outline: none;
}
img{
  display:block;
  width:100%;
  height:100%;
}

::-webkit-scrollbar{
	width:4px;
	height:4px;
}
::-webkit-scrollbar-track{
	background: #f6f6f6;
	border-radius:2px;
}
::-webkit-scrollbar-thumb{
	background: #aaa;
	border-radius:2px;
}
::-webkit-scrollbar-thumb:hover{
	background: #747474;
}
::-webkit-scrollbar-corner{
	background: #f6f6f6;
}

</style>
