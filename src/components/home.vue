<template>
	<div>
		
	 <div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide"><img src="https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg" alt=""></div>
	     <!--  <div class="swiper-slide"><img src="https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg" alt=""></div> -->
	    </div>
	  </div>
		

		<ul>
			<li v-for="data in datalist">
				<h3>{{data.name}}</h3>
				<img :src="data.cover.origin" alt="">
				<h5>{{data.intro}}</h5>
			</li>
		</ul>

	</div>
</template>

<script>
	import axios from "axios"
	//使用swiper
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.css"
	//使用vue-swipe
	/*require('vue-swipe/dist/vue-swipe.css')
	import {Swipe,SwipeItem} from 'vue-swipe'*/
	export default{
		name:'home',
		data(){
			return {
				datalist:[]
			}
		},
		/*components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		},*/
		mounted(){
			this.$store.commit("changeHeadName","卖座电影")
			axios.get("/v4/api/film/now-playing?__t=1542357700933&page=1&count=5").then(res=>{
					this.datalist = res.data.data.films;
					
					/*console.log(res.data.data.films[0].cover.origin)
					console.log(res.data.data.films[0]);*/
			}).catch(error=>{
				console.log(error);			
			})

			//swiper用法：
			 var swiper = new Swiper('.swiper-container', {
			 	  slidesPerView: 1,
			      spaceBetween: 30,
			      centeredSlides: true,
			       loop: true,
			      autoplay: {
			        delay: 2500,
			        disableOnInteraction: false,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			      navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			});
			//vue-swipe:
		}	
	}

</script>

<style lang="scss" scoped>
*{
	margin:0;
	padding:0;
}
	ul{
		width:70%;
		margin:0 auto;
		li{
			list-style:none;
			width:100%;
			margin-top:5px;
			height:300px;
			img{
				width:100%;
				height:50%;
			}
		}
	}

 html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      img{
      	width:100%;
      	height:100%;
      }

    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

</style>