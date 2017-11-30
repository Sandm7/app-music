<template>
  <div class="m-header">
     <img src="src/components/m-header/logo_footer.png" alt="" class="header-logo">
     <el-button round class="btn-download">下载APP</el-button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .m-header{background:#31c27c;height:44px;width:100%;}
    .header-logo{display:block;float:left;width:90px;height:25px;margin:9px 0 0 10px;}
    .btn-download{background:#149c5a;color:#fff;float:right;height:28px;padding:0 12px;margin:8px 10px 0 0;border:none;}
</style>