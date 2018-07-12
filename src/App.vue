<template>
  <div id="app">
    <div class="nav"></div>
    <div class="six">
      <ul class="aside">
        <li><router-link to="/info">项目概况</router-link></li>
        <li><router-link to="/version">迭代版本管理</router-link></li>
        <li><router-link to="/require">需求管理</router-link></li>
        <li><router-link to="/board">story看板</router-link></li>
        <li><router-link to="/defect">缺陷管理</router-link></li>
        <li><router-link to="/risk">风险管理</router-link></li>
        <li><router-link to="/cost">项目投入</router-link></li>
        <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
      </ul>
      <div class="content">
        <router-view  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.six{
  width: 100%;
  position: absolute;
  top: 40px;
  right: 0;
  bottom: 0px;
  left: 0px;
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.nav{
  height: 40px;
  background-color: bisque;
}
.content{
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  height: 100%;
}
.aside{
  width: 200px;
  height: 100%;
  border:1px solid #ccc;
  float: left;
}
.aside li{
  height: 48px;
  line-height: 48px;
  text-align: center
}
.aside li a{
  text-decoration: none;
  color: #999;
}
</style>
