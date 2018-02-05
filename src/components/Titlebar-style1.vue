<template>

    <div class="title-bar">
        <p class="title" contenteditable="true" @focusout="changeText" v-html="currentTitle"></p>
        <div class="action" v-if="operateAction==='on'">
            <Operate_action name="add" type="add" :operateTarget_name="instance"></Operate_action>
        </div>
        <div class="title-bar-style"></div>
    </div>

</template>

<script>

    import Operate_action from "./Operate-action"

    export default{
        name:'Titlebar_style1',
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
        height: 32px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        color: inherit;
        background:#aaa;
        padding-left:10px;
        position:relative;

        .title{
            font-weight: 500;
            font-size: 18px;
            flex-grow: 1;
            flex-shrink: 1;
        }

        .action{
            flex-grow: 0;
            flex-shrink: 0;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            visibility:hidden;
            transition: all 1s ease;

            >a{
                margin-left: 8px;
            }
        }
         &:hover{
            .action{
                visibility: visible;
                transition: all 1s ease;
            }
        }

        .title-bar-style::before{
            content: '';
            display: block;
            width:40px;
            height:32px;
            background: #aaa;
            position: absolute;
            top:0;
            left:100%;
        }
        .title-bar-style::after{
            content: '';
            display: block;
            width:0px;
            height:0px;
            border-left:10px solid #777;
            border-top:6px solid #777;
            border-right:10px solid transparent;
            border-bottom:6px solid transparent;
            position: absolute;
            top:100%;
            left:calc(100% + 20px);
        }
        &::before{
             content: '';
             display: block;
             width:0;
             height:0;
             border-left:16px solid transparent;
             border-top:16px solid transparent;
             border-right:8px solid #aaa;
             border-bottom:16px solid transparent;
             position: absolute;
             top:0;
             left: -24px;
         }


    }

</style>

