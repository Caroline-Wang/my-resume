<template>

    <table>
        <tr v-for="(value,index) in currentArray" class="list-item">
            <td class="item-part">
                <p class="edit-field" contenteditable="true" @focusout="changeText(index,$event,'key')" v-html="value.key"></p>
            </td>
            <td class="item-part">
                <p class="edit-field" contenteditable="true" @focusout="changeText(index,$event,'value')" v-html="value.value"></p>
            </td>
            <td class="action">
                <Operate-action name="delete" type="delete" :operateTarget_name="instance" :operateTarget_index="index"></Operate-action>
            </td>
        </tr>
    </table>

</template>

<script>

    import EditableField from "./EditableField"
    import Operate_action from "./Operate-action"

    export default{
        name:'ItemShow_table',
        components:{
            EditableField,
            "Operate-action":Operate_action
        },
        props:{
            'data':[Array],
            'instance':[String]
        },
        computed:{
            currentArray(){
                return this.data
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
    .edit-field{
        white-space: pre-line;
    }
    table{
        width:100%;
        tr{
            td.item-part{
                padding-top:4px;
            }
            td.item-part:first-child{
                padding-right:6px;
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

