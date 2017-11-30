<template>
  <div class="search">
     <search-box ref="searchBox"></search-box>
     <div class="hot-key">
        <h3>热门搜索</h3>
        <ul>
           <li v-for="hotKey in hotKeys" @click="addQuery(hotKey.k)">
               {{hotKey.k}}
           </li>
        </ul>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBox from 'common/search-box/search-box'
export default {
    data (){
      return {
        hotKeys:[]
      }
    },
    created (){
      this.getHotKey()
    },
    methods:{
      addQuery(query){
         this.$refs.searchBox.setQuery(query)
      },
      getHotKey () {
        axios.get('src/data/hotKey.json')
        .then((res) =>{
           this.hotKeys=res.data.hotkey.slice(0,10)
        })
        .catch((err) =>{
          console.log(err)
        })
      }
    },
    components:{
       SearchBox
    }
}
</script>

<style scoped>
      .search{background:#fff;}
      .hot-key{padding:15px;}
      .hot-key h3{color:rgba(0,0,0,0.6);margin-bottom:8px;font-size:13px;}
      .hot-key li{display:inline-block;font-size:14px;padding:0 10px;height:30px;line-height:30px;color:#000;border:1px solid rgba(0,0,0,.6);border-radius:99px;word-break:keep-all;margin-bottom:10px;margin-right:14px;}
</style>