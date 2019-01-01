<template>
    <div>
        <mBtton @click.native="open('picker4')">hahhkfflds</mBtton>
        <mDatetimePicker ref="picker4" type="date" v-model="value4" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleChange">
        </mDatetimePicker>
    </div>
</template>

<script>
    import {
        Button,
        Toast,
        DatetimePicker
    } from 'mint-ui';
   
    export default {
        components: {
            mBtton: Button,
            mDatetimePicker: DatetimePicker,
        },
        data() {
            return {
                value4: '',
            }
        },
        methods: {
            open(picker) {
                this.$refs[picker].open();
            },
            handleChange(value) {
                Toast({
                    message: '已选择 ' + value.toString(),
                    position: 'bottom'
                });
            },
        }
    }
</script>

<style>

</style>
