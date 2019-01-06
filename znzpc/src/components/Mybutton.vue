<template>
    <div>
        <button :class="type"></button>
    </div>
</template>

<script>
export default {
    props:{
        type:String,

    }
}
</script>

<style>
    button{
        border:0;
        
    }
</style>
