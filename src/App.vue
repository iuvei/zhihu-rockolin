<template>
  <div class="main">
  	<div class="wrap">
  		<router-view></router-view>
  	</div>
  	<navigation></navigation>
  </div>
</template>

<script>
import Nav from './components/nav/Nav'

export default {
  components: {
    'Navigation': Nav
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import './assets/css/base';
.main {
  width: 100%;
  height: 100%;
}
.wrap {
  overflow: auto;
}
</style>
