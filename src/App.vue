<template>
  <div id="app">
    <headbar @event="isShow=!isShow"></headbar>
    <sidebar v-show="isShow" @events="isShow=!isShow"></sidebar>
    <section>
      <router-view @give="giveId" :myIndex="dataId"></router-view>  
    </section>
  </div>
</template>

<script>
import headbar from './components/headbar'
import sidebar from './components/sidebar'


export default {
  name: 'App',
  components:{
    headbar,
    sidebar
  },
  data(){
    return {
      isShow:false,
      dataId:0
    }
  },
  methods:{
    giveId(index){
        console.log("get",index);
        this.dataId = index;
        console.log(this.dataId)
    }
  }

}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
 /*  margin-top: 60px; */
}
</style>
