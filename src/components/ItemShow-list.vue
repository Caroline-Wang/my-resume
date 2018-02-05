<template>

    <div>
        <ol v-if="currentType==='ol'">
            <slot name="item" v-for="(value,index) in currentArray" :value="value" :index="index">
                <li>
                    <p class="item-part" contenteditable="true" @focusout="changeText(index,$event)" v-html="value"></p>
                    <div class="action">
                        <Operate-action name="delete" type="delete" :operateTarget_name="instance" :operateTarget_index="index"></Operate-action>
                    </div>
                </li>
            </slot>
        </ol>
        <ul v-else>
            <slot name="item" v-for="(value,index) in currentArray" :value="value" :index="index">
                <li>
                    <p class="item-part" contenteditable="true" @focusout="changeText(index,$event)" v-html="value"></p>
                    <div class="action">
                        <Operate-action name="delete" type="delete" :operateTarget_name="instance" :operateTarget_index="index"></Operate-action>
                    </div>
                </li>
            </slot>

        </ul>
    </div>

</template>

<script>

    import Operate_action from "./Operate-action"

    export default{
        name:'ItemShow_list',
        components:{
            "Operate-action":Operate_action
        },
        props:{
            'type':{
                type:String,
                default:'ul',
                validator(value){
                    return (value==='ol' || value==='ul')? value:'ul'
                }
            },
            'data':{
                type:Array
            },
            'instance':[String]
        },
        data(){
            return {
                currentType:this.type,
                currentArray:this.data
            }
        },
        methods:{
            changeText(index,e){
                this.$store.commit('editListField',{name:this.instance,index:index,value:e.target.innerHTML})
            }
        }
    }

</script>

<style scoped lang="scss">
    ol{
        list-style: circle;
        padding-left: 16px;
    }
    li{
        margin:8px 0 0 0;
        position: relative;

        .item-part{
            margin-right: 20px;
        }

        .action{
            position: absolute;
            top:0;
            right:0;
            visibility: hidden;
        }
        .action{
            visibility:hidden;
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

