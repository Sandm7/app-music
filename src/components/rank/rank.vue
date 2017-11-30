<template>
  <div class="rank">
        <div class="wrapper" ref="wrapper">
             <ul class="content">
                <li v-for="rankList in rankLists" class="topic_item">
                    <div class="mod_topic">
                       <img v-lazy="rankList.picUrl">
                       <span>
                           <i></i>
                           {{rankList.listenCount}}
                       </span>
                    </div>
                    <div class="topic_info">
                        <h3>{{rankList.topTitle}}</h3>
                        <ul>
                           <li v-for="(songList,index) in rankList.songLists" @click="jumpRankList">
                           <span class="topic_info_index">{{index+1}}</span>
                           <span class="topic_info_songname">{{songList.songname}}</span>
                           <span class="topic_info_singername">{{songList.singername}}</span>
                           </li>
                        </ul>
                    </div>
                </li>
             </ul>
             <div v-show="!rankLists.length" class="loading-container">
               <loading></loading>
             </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import Loading from 'common/loading/loading'
export default {
   data (){
      return {
         rankLists:[]
      }
   },
   created() {
      this.loadData()
   },
   methods: {
      loadData() {
        axios.get('src/data/data.json').then((res) => {
          this.rankLists = res.data.concat(this.rankLists)
          this.$nextTick(() => {
             if (!this.scroll) {
                 this.scroll = new BScroll(this.$refs.wrapper,{})
                 this.scroll.on('touchend', (pos) => {
                      if (pos.y > 50) {
                         this.loadData()
                      }
                  })
                } else {
                  this.scroll.refresh()
                }
             })
          })
       },
        jumpRankList(){
           this.$router.push(
             {path:'/rankList'}
           )
        }
    },
   components: {
      Loading
   }
}
</script>

<style scoped>
     .rank{margin:0 10px 10px;}
     .wrapper{height:440px;overflow:hidden;}
     .topic_item{width:100%;display:flex;background:#fff;margin-top:10px;overflow:hidden;text-overflow:ellipsis;}
     .mod_topic{width:100px;height:100px;position:relative;}
     .mod_topic img{display:block;width:100px;height:100px;}
     .mod_topic span{position:absolute;left:5px;bottom:7px;font-size:9px;color:rgba(255,255,255,0.6);z-index:10;}
     .topic_info{height:100px;flex:1;padding:0 10px 0 15px;overflow:hidden;}
     .topic_info h3{font-size:16px;color:#000;font-weight:normal;margin:5px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
     .topic_info li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;}
     .topic_info .topic_info_index{color:rgba(0,0,0,0.5)}
     .topic_info .topic_info_singername{color:rgba(0,0,0,0.5)}
     .topic_info_songname{margin:0 5px;}
     .loading-container{position: absolute;width: 100%;top: 50%;transform: translateY(-50%);}
</style>