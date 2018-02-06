<template>

    <div>
        <input type="file" :id="id" @change="chooseFile($event)" accept="image/*" style="display: none" >
        <label :for="id">
            <img :src="'/static/img/'+imageSrc" alt="图片" />
        </label>
    </div>

</template>

<script>

    export default{
        name:'ItemShow_imageChoose',
        props:{
            "id":[String],
            "imageSrc":[String]
        },
        methods:{
            chooseFile(e){
                var currentImg=e.target.nextElementSibling.childNodes[0]
                currentImg.setAttribute('src',window.URL.createObjectURL(e.target.files[0]))
                currentImg.onload=function () {
                    window.URL.revokeObjectURL(this.src)
                }
            }
        }
    }

</script>

<style scoped lang="scss">
    img{
        /*width:100px;*/
        /*height: 100px;*/
    }
</style>

