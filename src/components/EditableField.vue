<template>

    <p contenteditable="true" @input="changeText"></p>

</template>

<script>

    export default{
        name:'EditableField',
        props:['content'],
        mounted:function () {
            this.$el.innerHTML=this.content
        },
        methods:{
            changeText(e){
//            this.currentText=e.target.innerHTML
                this.$emit('change',e.target.innerHTML)
            }
        }
    }

</script>

<style scoped>
    p{
        word-break: break-all;
    }
</style>

