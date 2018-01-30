<template>

    <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-'+name"></use>
        </svg>
    </a>

</template>

<script>

    export default{
        name:'Operate_action',
        props:['name']
    }

</script>

<style scoped lang="scss">
    a{
        font-size: 0.8em;
    }
</style>

