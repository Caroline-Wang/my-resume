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
    import Topbar from "./Topbar"
    import ResumeEdit from "./ResumeEdit"

    export default {
        name: 'App',
        components:{
            Topbar,ResumeEdit
        },
        created(){
//            this.$store.commit('getFromLocalStorage')
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