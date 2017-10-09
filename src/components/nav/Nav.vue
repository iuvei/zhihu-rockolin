<template>
	<div class="navigation">
    <ul class="nav-list clearfix">
      <router-link tag="li" to='/home' class="item">
        <a href="javascript:;"><i class="ico ico-home"></i>首页</a>
      </router-link>
      <router-link tag="li" to='/idea' class="item">
        <a href="javascript:;"><i class="ico ico-idea"></i>想法</a>
      </router-link>
      <router-link tag="li" to='/market' class="item">
        <a href="javascript:;"><i class="ico ico-market"></i>市场</a>
      </router-link>
      <router-link tag="li" to='/notice' class="item">
        <a href="javascript:;"><i class="ico ico-notice"></i>通知</a>
      </router-link>
      <router-link tag="li" to='/more' class="item">
        <a href="javascript:;"><i class="ico ico-more"></i>更多</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" rel="stylesheet/less">
.navigation {
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index:50;
  width: 100%;
  height: 50px;
  padding-top:10px;
  border-top:1px solid #f1f1f1;
  background-color: white;
  .nav-list {
    width: 100%;
    .item {
      float:left;
      width: 20%;
      text-align: center;
      a {
        display: block;
        font-size: 16px;
        color: #A9B7B7;
        font-weight: 600;
      }
      .ico {
        display: block;
        width: 22px;
        height: 22px;
        margin: 0px auto;
        margin-bottom: 3px;
        &.ico-home {
          background: url(./images/home.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-idea {
          background: url(./images/idea.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-market {
          background: url(./images/market.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-notice {
          background: url(./images/notice.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-more {
          background: url(./images/more.png);
          background-size: 100%;
          background-position: center center;
        }
      }
      &.active {
        .ico {
          &.ico-home {
          background: url(./images/home_focus.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-idea {
          background: url(./images/idea_focus.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-market {
          background: url(./images/market_focus.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-notice {
          background: url(./images/notice_focus.png);
          background-size: 100%;
          background-position: center center;
        }
        &.ico-more {
          background: url(./images/more_focus.png);
          background-size: 100%;
          background-position: center center;
        }
        }
      }
    }
  }
}
</style>
