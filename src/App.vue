<template>
  <div id="app">
    <!-- <div class="nav"></div> -->
    <div class="content">
      <router-view  />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang=''scss>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  position: relative;
}
.nav{
  height: 80px;
  background-color: #fff;
  border-radius: 4px;
}
.content{
  position: absolute;
  top:10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  z-index: 10;
  overflow-y: scroll;
}
</style>
