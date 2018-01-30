<template>

    <div>
        <ul v-if="currentType==='ol'">
            <li v-for="value in currentArray" class="list-item">
                <EditableField class="item-part" :content="value" @change="changeContent"></EditableField>
                <div class="action">
                    <Operate_action name="delete"></Operate_action>
                </div>
            </li>
        </ul>
        <ol v-else>
            <li v-for="value in currentArray" class="list-item">
                <EditableField class="item-part" :content="value" @change="changeContent"></EditableField>
                <div class="action">
                    <Operate_action name="delete"></Operate_action>
                </div>
            </li>
        </ol>
    </div>

</template>

<script>

    import EditableField from "./EditableField"
    import Operate_action from "./Operate-action"

    export default{
        name:'ItemShow_list',
        components:{
            EditableField,
            "Operate_action":Operate_action
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
            }
        },
        data(){
            return {
                currentType:this.type,
                currentArray:this.data
            }
        },
        methods:{
            changeContent(content){
                console.log(content)
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

