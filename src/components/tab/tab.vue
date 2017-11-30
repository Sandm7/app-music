<template>
  <div class="tab">
     <router-link tag="div" class="tab-item" to="/recommend">
         <span class="tab-link">推荐</span>
     </router-link>
     <router-link tag="div" class="tab-item" to="/rank">
         <span class="tab-link">排行榜</span>
     </router-link>
     <router-link tag="div" class="tab-item" to="/search">
         <span class="tab-link">搜索</span>
     </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .tab{display:flex;}
    .tab-item{flex:1;font-size:16px;height:40px;line-height:40px;text-align:center;color:rgba(0,0,0,0.6);position:relative;}
    .router-link-active .tab-link{color:#31c27c;}
    .router-link-active:after{content:"";display:block;height:2px;background:#31c27c;position:absolute;bottom:0;left:0;width:100%;}
</style>