<template>
    <div id="resumeMain">
        <header>
            <Topbar/>
        </header>

        <main>
            <ResumeEdit/>
        </main>
    </div>
</template>

<script>
    import AV from 'leancloud-storage'
    import Topbar from "./Topbar"
    import ResumeEdit from "./ResumeEdit"

    export default {
        name: 'Resume',
        components:{
            Topbar,ResumeEdit
        },
        beforeCreate(){
            var currentUser = AV.User.current();
            if (currentUser) {
                console.log('检测到是登录状态')
            }
            else {
                console.log('未登录，进入登录页面')
                this.$router.go(-1)
            }
        },
        created(){
            this.$loading({
                text:'正在加载您的简历...'
            })
            let query = new AV.Query('Resume')
            query.find().then((list) => {
                this.$loading().close()
                if(list && list instanceof Array && list.length===1){
                    //把数据加载到store
                    let currentState=JSON.parse(list[0]["attributes"]["content"])
                    if(!currentState.resumeId) currentState.resumeId=list[0].id
                    this.$store.commit('initState',{currentState:currentState})
                }
            },  (error)=> {
                this.$loading().close()
                console.log(error);
                this.$message.error(error);
            });
        }
    }
</script>

<style scoped lang="scss">

    #resumeMain {
        width: 100%;
        /*height: 100%;*/
        display:flex;
        flex-direction:column;
        background: #EAEBEC;

        >header {
             flex-grow: 0;
             flex-shrink: 0;
             height: 70px;
             background: #fff;
             box-shadow: 1px 1px 3px 0 #ccc;

            #topbar{
                max-width: 1440px;
                min-width: 1024px;
                width:100%;
                height: 70px;
                margin:0 auto;
                padding: 0 20px;
            }
        }

        >main{
             width: 1000px;
             margin:0 auto;
             flex-grow: 1;
             flex-shrink: 1;
             padding: 20px;
             display: flex;
             justify-content: center;
            /*align-items: center;*/

            >#resumeEdit{
                 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
             }


        }

    }

</style>