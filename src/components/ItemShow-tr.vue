<template>

    <table>
        <tr v-for="(value,key) in currentObj" class="list-item">
            <td class="item-part">
                <EditableField :content="key" @change="changeContent"></EditableField>
            </td>
            <td class="item-part">
                <EditableField :content="value" @change="changeContent"></EditableField>
            </td>
            <td class="action">
                <Operate_action name="delete" show="false"></Operate_action>
            </td>
        </tr>
    </table>

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

    table{
        width:100%;
        tr{
            td.item-part{
                padding:4px 20px 0 0;
            }

            td.action{
                padding-top: 4px;
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
    }

</style>

