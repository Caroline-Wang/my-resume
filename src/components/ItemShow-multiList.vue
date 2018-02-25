<template>

    <ItemShow-list :type="type" :data="data" :instance="instance">
        <li slot="item" slot-scope="props" >
            <div class="title">
                <p contenteditable="true" @focusout="changeText(props.index,$event,'titleLeft')" v-html="props.value.titleLeft"></p>
                <p contenteditable="true" @focusout="changeText(props.index,$event,'titleMiddle')" v-html="props.value.titleMiddle"></p>
                <p contenteditable="true" @focusout="changeText(props.index,$event,'titleRight')" v-html="props.value.titleRight"></p>
                <div class="action">
                    <Operate-action name="delete-o" type="delete" :operateTarget_name="instance" :operateTarget_index="props.index"></Operate-action>
                </div>
            </div>
            <div class="content" contenteditable="true" @focusout="changeText(props.index,$event,'description')" v-html="props.value.description"></div>
        </li>
    </ItemShow-list>

</template>

<script>

    import Operate_action from "./Operate-action"
    import ItemShow_list from "./ItemShow-list"

    export default{
        name:'ItemShow_multiList',
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

<style scoped lang="scss">
    li{
        margin-bottom:20px;

        .title{
            display: flex;
            justify-content: space-between;
            color: #666;
            font-weight: bold;
            margin: 10px 10px 4px 0;
            padding-right: 10px;
            position:relative;

            p{
                min-width: 20px;
            }

            .action{
                position: absolute;
                top: 0;
                left: 100%;
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
        .content{
            font-size: 14px;
            line-height: 1.5;
            margin: 8px 10px 0 0;
        }
    }
</style>

