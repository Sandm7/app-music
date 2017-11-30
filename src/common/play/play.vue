<template>
     <div class="play">
         <audio :src="music" autoplay controls>
         您的浏览器不支持 audio 标签。
         </audio>
     </div>
</template>

<script>
export default {
  data(){
    return {
      music:''
    }
  },
  methods:{
     setMusic(music){
         this.music=music
       }
  },
  created (){
     this.$watch('music',(newMusic) =>{
        this.$emit('music',newMusic)
     })
  }
}
</script>

<style scoped>
     .play{margin:22px auto;width:300px;}
</style>