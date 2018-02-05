<template>

    <a href="javascript:;" @click="operate">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-'+name"></use>
        </svg>
    </a>

</template>

<script>

    export default{
        name:'Operate_action',
        props:{
            'name':[String],
            'type':[String],
            'operateTarget_name':[String],
            'operateTarget_index':[Number]
        },
        methods:{
            operate(){
                switch (this.type){
                    case 'add':
//                        console.log('执行添加操作')
                        this.$store.commit('addItem',{name:this.operateTarget_name})
                        break
                    case 'delete':
//                        console.log('执行删除操作')
                        this.$store.commit('deleteItem',{name:this.operateTarget_name,index:this.operateTarget_index})
                        break
                }
            }
        }
    }

</script>

<style scoped lang="scss">
    a{
        font-size: 0.8em;
    }
</style>

