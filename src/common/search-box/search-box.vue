<template>
  <div class="search-box">
     <el-input :placeholder="placeholder" prefix-icon="el-icon-search" v-model="query" class="search-input">
         <i slot="suffix" class="el-input__icon el-icon-close" v-show='query' @click="clear"></i>
     </el-input>
  </div>
</template>

<script>
export default {
    data (){
      return {
         query:''
      }
    },
    props:{
       placeholder:{
         type: String,
         default: '搜索歌曲、歌单、专辑'
       }
    },
    methods:{
       clear (){
         this.query=''
       },
       setQuery(query){
         this.query=query
       }
    },
    created (){
       this.$watch('query',(newQuery) =>{
          this.$emit('query',newQuery)
       })
    }
}
</script>

<style scoped>
     .search-box{padding:10px;background:#f4f4f4}
</style>