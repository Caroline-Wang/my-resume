<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

  //引入css
  import "./assets/reset.css"

  //引入js
  import store from "./store/index"

  export default {
      name: 'App',
      store
  }

</script>

<style scoped lang="scss">

  #app {
    width: 100%;
    min-height: 100%;
    background: #EAEBEC;
    display:flex;
    justify-content: center;
    align-items: center;
  }

</style>
