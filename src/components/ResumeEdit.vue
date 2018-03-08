<template>

  <div id="resumeEdit" class="resumeEdit-wrapper">
    <section class="base-infos">

      <!--  个人头像  -->
      <div class="avatar-wrapper">
          <ItemShow-imageChoose class="avatar" id="userPicture" imageSrc="avatar_default.png"></ItemShow-imageChoose>
      </div>

      <!--  标题  -->
      <div class="base-info">
        <h2 class="edit-field" contenteditable="true" @focusout="changeText($event,'name')" v-html="resume.name"></h2>
        <p class="edit-field" contenteditable="true" @focusout="changeText($event,'work')" v-html="resume.work"></p>
      </div>

      <!--  个人资料  -->
      <div class="base-section" data-name="personalInfo">
        <Titlebar-baseInfos :title="resume.personalInfo.title" instance="personalInfo"></Titlebar-baseInfos>
        <div class="section-show" v-if="resume.personalInfo.renderType==='table'">
          <ItemShow-table :data="resume.personalInfo.content" instance="personalInfo"></ItemShow-table>
        </div>
      </div>

      <!--  教育背景  -->
      <div class="base-section" data-name="education">
        <Titlebar-baseInfos :title="resume.education.title" instance="education"></Titlebar-baseInfos>
        <div class="section-show" v-if="resume.education.renderType==='list'">
          <ItemShow-list type="ol" :data="resume.education.content" instance="education"></ItemShow-list>
        </div>
      </div>

      <!--  自我评价  -->
      <div class="base-section" data-name="introduction">
        <Titlebar-baseInfos :title="resume.introduction.title" instance="introduction" operateAction="off"></Titlebar-baseInfos>
        <div class="section-show" v-if="resume.introduction.renderType==='text'">
          <p class="edit-field" contenteditable="true" @focusout="changeText($event,'introduction')" v-html="resume.introduction.content"></p>
        </div>
      </div>

    </section>

    <section class="main-infos">

      <!--  项目经历  -->
      <div class="main-section" data-name="projects">
        <Titlebar-mainInfos :title="resume.projects.title" instance="projects"></Titlebar-mainInfos>
        <div class="section-show" v-if="resume.projects.renderType==='multiList'">
          <ItemShow-multiList type="ul" :data="resume.projects.content" instance="projects"></ItemShow-multiList>
        </div>
      </div>

      <!--  工作经历  -->
      <div class="main-section" data-name="works">
        <Titlebar-mainInfos :title="resume.works.title" instance="works"></Titlebar-mainInfos>
        <div class="section-show" v-if="resume.works.renderType==='multiList'">
          <ItemShow-multiList type="ul" :data="resume.works.content" instance="works"></ItemShow-multiList>
        </div>
      </div>

      <!--  个人技能  -->
      <div class="main-section" data-name="skills">
        <Titlebar-mainInfos :title="resume.skills.title" instance="skills"></Titlebar-mainInfos>
        <div class="section-show" v-if="resume.skills.renderType==='blockList'">
          <ItemShow-blockList type="ul" :data="resume.skills.content" instance="skills"></ItemShow-blockList>
        </div>
      </div>

    </section>
  </div>

</template>

<script>

  import EditableField from "./EditableField"
  import Titlebar_style1 from "./Titlebar-style1"
  import ItemShow_table from "./ItemShow-table"
  import ItemShow_list from "./ItemShow-list"
  import Titlebar_style2 from "./Titlebar-style2"
  import ItemShow_multiList from "./ItemShow-multiList"
  import ItemShow_blockList from "./ItemShow-blockList"
  import ItemShow_imageChoose from "./ItemShow-imageChoose"

  export default {
    name:'ResumeEdit',
    components: {
        EditableField,
        "Titlebar-baseInfos":Titlebar_style1,
        "ItemShow-table":ItemShow_table,
        "ItemShow-list":ItemShow_list,
        "Titlebar-mainInfos":Titlebar_style2,
        "ItemShow-multiList":ItemShow_multiList,
        "ItemShow-blockList":ItemShow_blockList,
        "ItemShow-imageChoose":ItemShow_imageChoose
    },
    data(){
      return {

      }
    },
    computed:{
      resume(){
          return this.$store.state.resume
      }
    },
    methods:{
        changeText(e,instance){
            this.$store.commit('editTextField',{name:instance,value:e.target.innerHTML})
        }
    }
  }

</script>

<style lang="scss">
  .avatar{
    img{
      width: 160px;
      height: 160px;
      border-radius: 50%;
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>

<style scoped lang="scss">
  .edit-field{
    white-space: pre-line;
  }
  .resumeEdit-wrapper{
    width:100%;
    background: #fff;
    display:flex;
    justify-content:space-between;

    >.base-infos{
        width:35%;
        min-width: 300px;
        background: #3C3A3D;
        color: #fff;

        .avatar-wrapper{
          background: #fff;
          width:100%;
          position:relative;

          .avatar{
            width: 100px;
            height: 150px;
          }
        }
        .avatar-wrapper::before{
          content: '';
          display: block;
          border-radius: 50%;
          width: 170px;
          height: 170px;
          background: #fff;
          position: absolute;
          top: 65px;
          left: 50%;
          transform: translateX(-50%);
        }


        .base-info{
          padding-top: 90px;
          margin-bottom: 50px;
          text-align: center;
          >h2{
            font-weight: 500;
            margin-bottom: 4px;
           }
        }

        .base-section{
          padding:0 20px 40px 50px;

          .section-show{
            padding-left: 10px;
            font-size:14px;
          }
        }

        div[data-name="introduction"]{
          .section-show{
            line-height: 2;
          }
        }

      }

     >.main-infos{
        width:65%;
        background: #fff;

        .main-section{
          margin:50px 30px 20px 50px;

          .section-show{
            padding-left: 10px;
            margin-bottom:20px;
          }

        }
        .main-section[data-name="skills"]{
          .title-bar {
            border-bottom: none;
          }
        }
      }
  }

</style>
