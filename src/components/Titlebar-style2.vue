<template>

    <div class="title-bar">
        <div>
            <img src="../assets/user_3.png" alt="">
            <h3 class="title" contenteditable="true" @focusout="changeText" v-html="currentTitle"></h3>
        </div>
        <div class="action">
            <Operate_action name="add-o" type="add" :operateTarget_name="instance"></Operate_action>
        </div>
    </div>

</template>

<script>

    import Operate_action from "./Operate-action"

    export default{
        name:'Titlebar_style2',
        components:{
            "Operate_action":Operate_action
        },
        props:{
            'title':[String],
            'instance':[String],
            'operateAction':{
                type:String,
                default:'on',
                validator(value){
                    return (value==='on' || value==='off')? value:'on'
                }
            }
        },
        data(){
          return {
              currentTitle:this.title
          }
        },
        methods:{
            changeText(e){
                this.$store.commit('editTitlebar',{name:this.instance,value:e.target.innerHTML})
            }
        }
    }

</script>

<style scoped lang="scss">
    .title-bar{
        padding-left: 6px;
        padding-bottom: 6px;
        border-bottom:1px solid #ddd;
        display:flex;
        justify-content:space-between;
        align-items: center;
        font-weight: 600;
        font-size: 20px;

        img{
            width:20px;
            height: 20px;
            vertical-align: bottom;
            margin-right: 4px;
        }
        .title{
            display: inline-block;
            font-size: inherit;
        }
        .action{
            visibility:hidden;
            color: #555;
            transition: all 1s ease;
        }
        
        &:hover{
            .action{
                visibility: visible;
                transition: all 1s ease;
            }
        }

    }

</style>

