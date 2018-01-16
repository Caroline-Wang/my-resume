<template>

  <div id="resumeEdit" class="resumeEdit-wrapper">
    <section class="base-infos">
      <div class="avatar-wrapper">
        <div class="avatar">
          <img src="../assets/user.png" alt="头像">
        </div>
      </div>
      <div class="base-info">
        <h2>{{resume.name}}</h2>
        <p>{{resume.work}}</p>
      </div>
      <div class="base-section" data-name="personalInfo">
        <div class="title-bar">
          <h3>个人资料</h3>
          <a href="javascript:;">+</a>
          <!--<a href="javascript:;">x</a>-->
        </div>
        <ul v-if="typeof resume.personalInfo==='object'">
          <li v-for="(value,key) in resume.personalInfo">
            {{key}}:{{value}}
          </li>
        </ul>

      </div>
    </section>
    <section class="main-infos">
      222
    </section>
  </div>

</template>

<script>

  export default{
    name:'ResumeEdit',
    data(){
      return {

      }
    },
    computed:{
      resume(){
          return this.$store.state.resume
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
        /*overflow-x: hidden;*/
        /*overflow-y: auto;*/

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
          padding:0 20px 20px 50px;

          .title-bar{
            height: 32px;
            display:flex;
            justify-content:space-between;
            align-items: center;
            background:#aaa;
            padding-left:10px;
            position:relative;

            h3:first-child{
              font-weight: 500;
              font-size: 18px;
            }

            a{

            }
          }
          .title-bar::before{
            content: '';
            display: block;
            width:0;
            height:0;
            border-left:16px solid transparent;
            border-top:16px solid transparent;
            border-right:8px solid #aaa;
            border-bottom:16px solid transparent;
            position: absolute;
            top:0;
            left: -24px;
          }
          .title-bar::after{
            content: '';
            display: block;
            width:40px;
            height:32px;
            background: red;
            position: absolute;
            top:0;
            left:100%;
          }
          /*.title-bar::after{*/
            /*content: '';*/
            /*display: block;*/
            /*width:20px;*/
            /*height:12px;*/
            /*background: blue;*/
            /*position: absolute;*/
            /*top:100%;*/
            /*left:100%;*/
          /*}*/
        }
      }
     >.main-infos{
        width:65%;
        background: #fff;
        overflow: auto;
      }
  }

</style>
