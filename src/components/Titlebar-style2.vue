<template>

    <div class="title-bar">
        <div>
            <ItemShow-imageChoose class="titlebar_icon" :id="'icon_'+instance" imageSrc="user_3.png"></ItemShow-imageChoose>
            <h3 class="title" contenteditable="true" @focusout="changeText" v-html="currentTitle"></h3>
        </div>
        <div class="action">
            <Operate_action name="add-o" type="add" :operateTarget_name="instance"></Operate_action>
        </div>
    </div>

</template>

<script>

    import Operate_action from "./Operate-action"
    import ItemShow_imageChoose from "./ItemShow-imageChoose"

    export default{
        name:'Titlebar_style2',
        components:{
            "Operate_action":Operate_action,
            "ItemShow-imageChoose":ItemShow_imageChoose
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

<style lang="scss">
    .titlebar_icon{
        img{
            width:20px;
            height: 20px;
            vertical-align: middle;
        }
    }
</style>

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

        .titlebar_icon{
            margin-right: 4px;
            display: inline-block;
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

