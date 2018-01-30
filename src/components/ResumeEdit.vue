<template>

  <div id="resumeEdit" class="resumeEdit-wrapper">
    <section class="base-infos">
      <div class="avatar-wrapper">
        <div class="avatar">
          <img src="../assets/user.png" alt="头像">
        </div>
      </div>
      <div class="base-info">
        <h2 contenteditable="true">{{resume.name}}</h2>
        <p contenteditable="true">{{resume.work}}</p>
      </div>

      <div class="base-section" data-name="personalInfo">
        <Titlebar-baseInfos title="个人资料"></Titlebar-baseInfos>
        <div class="section-show" v-if="typeof resume.personalInfo==='object'">
          <ItemShow-tr :data="resume.personalInfo"></ItemShow-tr>
        </div>
      </div>

      <div class="base-section" data-name="education">
        <Titlebar-baseInfos title="教育背景"></Titlebar-baseInfos>
        <div class="section-show" v-if="resume.education instanceof Array">
          <ItemShow-list type="ol" :data="resume.education"></ItemShow-list>
        </div>
      </div>

      <div class="base-section" data-name="introduction">
        <Titlebar-baseInfos title="个人介绍"></Titlebar-baseInfos>
        <div class="section-show" v-if="typeof resume.introduction==='string'">
          <EditableField :content="resume.introduction" @change="changeContent"></EditableField>
        </div>
      </div>

        <!--<div class="title-bar">-->
        <!--<div class="section-show" v-if="resume.education instanceof Array">-->
          <!--<ul>-->
            <!--<li v-for="(value) in resume.education" class="list-item" contenteditable="true">-->
              <!--{{value}}-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->


      <!--<div class="base-section" data-name="introduction">-->
        <!--<div class="title-bar">-->
          <!--<h3>自我评价</h3>-->
          <!--<div class="action">-->
            <!--<a href="javascript:;">-->
              <!--<svg class="icon" aria-hidden="true">-->
                <!--<use xlink:href="#icon-add"></use>-->
              <!--</svg>-->
            <!--</a>-->
            <!--<a href="javascript:;">-->
              <!--<svg class="icon" aria-hidden="true">-->
                <!--<use xlink:href="#icon-delete"></use>-->
              <!--</svg>-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="title-bar-style"></div>-->
        <!--</div>-->
        <!--<div class="section-show" v-if="typeof resume.introduction==='string'" contenteditable="true">-->
          <!--{{resume.introduction}}-->
        <!--</div>-->
      <!--</div>-->

    </section>
    <section class="main-infos">
      <div class="main-section" data-name="projects" v-if="resume.projects instanceof Array">
        <div class="title-bar">
          <div>
            <img src="../assets/user_3.png" alt="">
            <h3>项目经历</h3>
          </div>
          <div class="action">
            <a href="javascript:;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-add-o"></use>
              </svg>
            </a>
            <a href="javascript:;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-delete-o"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="section-show">
          <div class="list-item" v-for="project in resume.projects">
            <div class="title">
              <p contenteditable="true">{{project.name}}</p>
              <p contenteditable="true">{{project.myRole}}</p>
              <p contenteditable="true"><span>{{project.startTime}}</span> — <span>{{project.endTime}}</span></p>
            </div>
            <ul class="content">
              <li v-for="item in project.content">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main-section" data-name="works" v-if="resume.works instanceof Array">
        <div class="title-bar">
          <div>
            <img src="../assets/user_2.png" alt="">
            <h3>工作经历</h3>
          </div>
          <div class="action">
            <a href="javascript:;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-add-o"></use>
              </svg>
            </a>
            <a href="javascript:;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-delete-o"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="section-show">
          <div class="list-item" v-for="work in resume.works">
            <div class="title">
              <p contenteditable="true">{{work.name}}</p>
              <p contenteditable="true">{{work.myRole}}</p>
              <p contenteditable="true"><span>{{work.startTime}}</span> — <span>{{work.endTime}}</span></p>
            </div>
            <ul class="content">
              <li v-for="item in work.content">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main-section" data-name="skills" v-if="resume.skills instanceof Array">
        <div class="title-bar">
          <div>
            <img src="../assets/user_2.png" alt="">
            <h3>个人技能</h3>
          </div>
          <div class="action">
            <a href="javascript:;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-add-o"></use>
              </svg>
            </a>
            <a href="javascript:;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-delete-o"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="section-show">
          <div class="list-item" v-for="skill in resume.skills">
            <div class="title">
              <p contenteditable="true">{{skill.title}}</p>
            </div>
            <ul class="content">
              <li v-for="item in skill.description">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>

  import EditableField from "./EditableField"
  import Titlebar_style1 from "./Titlebar-style1"
  import ItemShow_tr from "./ItemShow-tr"
  import ItemShow_list from "./ItemShow-list"

  export default {
    name:'ResumeEdit',
    components: {
        EditableField,
        "Titlebar-baseInfos":Titlebar_style1,
        "ItemShow-tr":ItemShow_tr,
        "ItemShow-list":ItemShow_list
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
        changeContent(content){
            console.log(content)
        }
    }
  }

</script>

<style scoped lang="scss">
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

          .title-bar{
            margin-bottom: 10px;
          }

          .section-show{
            padding-left: 10px;
            font-size:14px;
          }
        }

        div[data-name="personalInfo"]{
          .section-show{

          }

        }
        div[data-name="introduction"]{
          .section-show{
            line-height: 2;
          }
        }

        /*div[data-name="education"]{*/
          /*ul{*/
            /*list-style: circle;*/
            /*padding-left: 20px;*/
            /*line-height: 1.5;*/
          /*}*/
        /*}*/
      }
     >.main-infos{
        width:65%;
        background: #fff;

        .main-section{
          margin:50px 40px 20px 50px;

          .title-bar{
            padding-left: 6px;
            padding-bottom: 6px;
            border-bottom:1px solid #ddd;
            display:flex;
            justify-content:space-between;
            align-items: center;

            img{
               width:20px;
               height: 20px;
               vertical-align: bottom;
               margin-right: 4px;
             }
             h3{
                display: inline-block;
                font-weight: 600;
                font-size: 20px;
              }
          }
          .section-show{
            padding-left: 10px;
            margin-bottom:20px;

            .list-item{
              .title{
                display: flex;
                justify-content: space-between;
                color: #666;
                font-weight: bold;
                margin: 10px 0;
              }
              .content{
                font-size: 14px;
                line-height: 1.5;
              }
            }
          }

        }
        .main-section[data-name="skills"]{
          .title-bar{
            border-bottom: none;
          }
          .section-show{
            display: flex;
            padding-top: 10px;
            justify-content: space-between;
            flex-wrap:wrap;

            .list-item{
              width: 48%;
              border: 1px solid #ddd;
              padding: 0 10px 10px 10px;
              margin-bottom: 10px;
              border-radius: 10px;
            }
          }
        }
      }
  }

</style>
