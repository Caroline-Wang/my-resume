<template>

        <ItemShow-list :type="type" :data="data" :instance="instance" class="list-show">
            <li slot="item" slot-scope="props" >
                <div class="title">
                    <p class="edit-field" contenteditable="true" @focusout="changeText(props.index,$event,'title')" v-html="props.value.title"></p>
                </div>
                <p class="edit-field content" contenteditable="true" @focusout="changeText(props.index,$event,'description')" v-html="props.value.description"></p>
                <div class="action">
                    <Operate-action name="delete-o" type="delete" :operateTarget_name="instance" :operateTarget_index="props.index"></Operate-action>
                </div>
            </li>
        </ItemShow-list>

</template>

<script>

    import Operate_action from "./Operate-action"
    import ItemShow_list from "./ItemShow-list"

    export default{
        name:'ItemShow_blockList',
        components:{
            "Operate-action":Operate_action,
            "ItemShow-list":ItemShow_list
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
            changeText(index,e,key){
                this.$store.commit('editObjField',{name:this.instance,index:index,key:key,value:e.target.innerHTML})
            }
        }
    }

</script>

<style lang="scss">
    .list-show ul,.list-show ol {
        display: flex;
        padding-top: 10px;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>

<style scoped lang="scss">
    .edit-field{
        white-space: pre-line;
    }
    li{
        width: 48%;
        border: 1px solid #ddd;
        padding: 0 10px 10px 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        position: relative;

        .title{
            color: #666;
            font-weight: bold;
            margin: 10px 10px 4px 0;
            padding-right: 10px;
        }

        .content{
            font-size: 14px;
            line-height: 1.5;
            margin-right: 10px;
        }

        >.action{
            color: #555;
            position: absolute;
            top:0;
            transform: translateY(-50%) translateX(50%)
         }
    }
</style>

