<template>

    <div>
        <div class="item-wrapper" v-for="(value,key) in currentObj">
            <EditableField class="item-part item-key" :content="key" @change="changeContent"></EditableField>
            <EditableField class="item-part item-value" :content="value" @change="changeContent"></EditableField>
            <div class="action">
                <Operate_action name="delete"></Operate_action>
            </div>
        </div>

    </div>

</template>

<script>

    import EditableField from "./EditableField"
    import Operate_action from "./Operate-action"

    export default{
        name:'ItemShow_tr',
        components:{
            EditableField,
            "Operate_action":Operate_action
        },
        props:{
            'data':{
                type:Object
            }
        },
        data(){
            return {
                currentObj:this.data
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

    .item-wrapper{
        position: relative;
        display:flex;

        .item-part{
            width:;
            margin-bottom: 8px;
            /*margin:0 0 8px 0;*/
        }
        .item-key{
            margin-right: 20px;
            /*width:30%;*/
            /*flex-grow: 0;*/
            /*flex-shrink: 1;*/
        }
        .item-value{
            margin-right: 20px;
            /*flex-grow: 1;*/
            /*flex-shrink: 1;*/
            /*width:65%;*/
        }
        .action{
            position: absolute;
            top:0;
            right:0;
        }
    }

</style>

