<template>
     <div class="rank-list">
         <div class="rank-list-box">
             <div class="album">
                 <img :src="songLists.pic_album" class="album__cover">
                 <div class="album__bd">
                     <h3>{{songLists.ListName}}</h3>
                     <p>第{{songLists.day_of_year}}天</p>
                     <p>{{songLists.date}}更新</p>
                 </div>
             </div>
             <el-button class="btn-play" v-show="control" icon="el-icon-caret-right" round>播放全部</el-button>
             <play ref="play" v-show="!control"></play>
         </div>
         <div class="wrapper" ref="wrapper">
             <div class="content">
                <p class="count_box__desc">排行榜 共{{songLists.cur_song_num}}首</p>
                <ul>
                    <li v-for="(songList,index) in aaa" class="qui_list__item" @click="addMusic(songList.url)">
                        <div class="qui_list__order">{{index+1}}</div>
                        <div class="qui_list__bd">
                           <p class="qui_list__tit">{{songList.songName}}</p>
                           <p class="qui_list__desc">{{songList.singerName}}</p>
                        </div>
                    </li>
                </ul>
             </div>
             <div v-show="!aaa.length" class="loading-container">
                   <loading></loading>
             </div>
         </div>
     </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import Loading from 'common/loading/loading'
import Play from 'common/play/play'
export default {
  data(){
    return {
       control:true,
       songLists:{},
       aaa:[]
    }
  },
  created(){
    this.getSongList()
  },
  methods:{
     addMusic(music){
        this.$refs.play.setMusic(music)
        this.control=false
     },
     getSongList(){
        axios.get('src/data/rankList.json').then((res) => {
          this.songLists = res.data
          this.aaa = res.data.songList.concat(this.aaa)
          this.$nextTick(() => {
             if (!this.scroll) {
                 this.scroll = new BScroll(this.$refs.wrapper,{})
                 this.scroll.on('touchend', (pos) => {
                      if (pos.y > 50) {
                         this.getSongList()
                      }
                  })
                } else {
                  this.scroll.refresh()
                }
             })
          })
     }
  },
  components:{
     Loading,
     Play
  }
}
</script>

<style scoped>
     .album{margin:17px 16px 0;display:flex;}
     .album__cover{width:125px;height:125px;margin-right:10px;}
     .album__bd{color:#fff;flex:1;}
     .album__bd h3{font-size:17px;}
     .album__bd p{font-size:12px;}
     .rank-list-box{background:rgba(0,0,0,0.5);overflow:hidden;}
     .btn-play{background:#31c27c;margin:22px auto;display:block;color:#fff;}
     .wrapper{height:200px;overflow:hidden;}
     .count_box__desc{font-size:14px;color:#777;padding:0 16px;}
     .qui_list__item{display:flex;}
     .qui_list__order{width:45px;color:#FF400B;text-align:center;line-height:57px;}
     .qui_list__bd{flex:1;padding:10px 10px 10px 2px;}
     .qui_list__tit{font-size:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0;}
     .qui_list__desc{color:#777;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0;}
     .loading-container{position: absolute;width: 100%;top: 50%;transform: translateY(-50%);}
</style>