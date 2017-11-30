<template>
  <div class="recommendr">
     <div class="block">
         <el-carousel trigger="click" height="150px">
           <el-carousel-item v-for="item in items" :key="item">
             <img v-bind:src="item">
           </el-carousel-item>
         </el-carousel>
     </div>
     <div class="transceiver mod_twocol_list">
         <h3 class="list_title">电台</h3>
         <el-row :gutter="8">
           <el-col :span="12" v-for="transceiver in transceivers">
                <div class="list_media">
                    <img v-bind:src="transceiver.img" alt="" class="list_pic">
                    <span class="icon_play"></span>
                </div>
                <p>{{transceiver.title}}</p>
           </el-col>
         </el-row>
     </div>
     <div class="hostList mod_twocol_list">
          <h3 class="list_title">热门歌单</h3>
          <el-row :gutter="8">
            <el-col :span="12" v-for="hostList in hostLists">
                 <div class="list_media">
                     <img v-bind:src="hostList.img" alt="" class="list_pic">
                     <span class="icon_play"></span>
                 </div>
                 <p>{{hostList.title}}</p>
            </el-col>
          </el-row>
     </div>
  </div>
</template>

<script>
export default {
    data () {
       return {
           items:['src/components/recommend/T003R720x288M000000zbQyv0v9DIe.jpg','src/components/recommend/T003R720x288M000001zWjI33YesNw.jpg','src/components/recommend/T003R720x288M000001sDemD13TSdi.jpg','src/components/recommend/T003R720x288M000003PbOAp4QEuEn.jpg'],
           transceivers:[{img:'src/components/recommend/track_radio_307_13_1.jpg',title:'一人一首招牌歌'},{img:'src/components/recommend/track_radio_199_13_1.jpg',title:'热歌'}],
           hostLists:[{img:'https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000',title:'催泪大杀器！盘点演唱会经典万人大合唱'},{img:'https://y.gtimg.cn/music/photo_new/T006R300x300M0000013j8zs1jRnLQ.jpg?max_age=2592000',title:'纳尼？这些华语歌手竟然会唱日语歌！'},{img:'https://y.gtimg.cn/music/photo_new/T006R300x300M000004bFmjW2PXSqF.jpg?max_age=2592000',title:'精选内地十大民谣歌手代表作'},{img:'https://y.gtimg.cn/music/photo_new/T006R300x300M0000032Ubid2ses0e.jpg?max_age=2592000',title:'2016Billboard嘻哈榜精选'},{img:'https://y.gtimg.cn/music/photo_new/T006R300x300M000000xFtbN1l8ye8.jpg?max_age=2592000',title:'浮光掠影：ACG纯音乐赏析合辑'},{img:'https://y.gtimg.cn/music/photo_new/T006R300x300M000000xFtbN1l8ye8.jpg?max_age=2592000',title:'trip-hop单曲大推荐'}]
       }
    }
}
</script>

<style scoped>
     .el-carousel__item img {
         display:block;
         width:100%;
       }
     .el-carousel__button{
         width:6px;height:6px;border-radius:3px;
     }
     .mod_twocol_list{margin:0 10px 8px 10px;}
     .list_title{font-size:16px;color:#000;font-weight:normal;margin-bottom:10px;}
     .list_media{position:relative;background:#fff;}
     .list_pic{display:block;width:100%;}
     .icon_play{width:24px;height:24px;position:absolute;right:5px;bottom:5px;background-image:url(/src/components/recommend/list_sprite.png);background-size:24px 60px;}
     .mod_twocol_list p{height:36px;line-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;margin:0;padding:5px 7px 0;background:#fff;}
</style>