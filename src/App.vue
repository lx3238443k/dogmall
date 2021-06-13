<template>
  <div id="app">
    <main-tab-bar/>
  </div>
</template>

<style>

  @import "assets/css/base.css";

</style>

<script>
  import MainTabBar from '@/components/content/MainTabBar.vue'

  export default{
    name:"app",
    components: {
      MainTabBar
    }
  }


</script>
