<template>

  <div id="topbar" class="topbar-wrapper">
    <h2 class="title">{{title}}</h2>
    <div class="actions">
      <a href="javascript:;">保存</a>
      <a href="javascript:;">预览</a>
    </div>
  </div>

</template>

<script>

  export default{
    name:'Topbar',
    data(){
        return {
          title:"Resume",
        }
    }
  }

</script>

<style scoped lang="scss">
  .topbar-wrapper{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff;

    .title{
      font-size: 24px;
      color: #000000;
    }

  }
</style>
