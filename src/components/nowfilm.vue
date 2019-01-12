<template>
	<div>
		<ul class="clear">

			<!--声明式渲染的形式-->
			<!-- <router-link v-for="data in datalist" :key="data.id" :to="'/detail/'+data.id" tag="li">
				<img :src="data.poster.origin" alt="">
				<div class="right">
					<h4>{{data.name}}</h4>
					<h6>{{data.intro}}</h6>
				</div>
			</router-link> -->

			<!--编程式导航的形式-->
			<li v-for="data in datalist" :key="data.id" @click="gotoEvent(data.id)">
				<img :src="data.poster.origin" alt="">
				<div class="right">
					<h4>{{data.name}}</h4>
					<h6>{{data.intro}}</h6>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import axios from "axios"

	export default{
		name:'nowfilm',
		data(){
			return {
				datalist:[]
			}
		},
		mounted(){
			axios.get("/v4/api/film/now-playing?__t=1542367169264&page=1&count=5").then(res=>{
				this.datalist = res.data.data.films;
				//console.log(res.data.data.films[0]);

			}).catch(err=>{
				console.log(err);
			})

			// axios.get("/v4/api/film/4424").then(res=>{
			// 	//this.datalist = res.data.data.films;
			// 	console.log(res.data);
			// }).catch(err=>{
			// 	console.log(err);
			// })
		},
		methods:{
			giveId(index){
				this.$emit("give",index);
			},
			gotoEvent(data){
				this.$router.push('/detail/'+data);
			}
		}
	}

</script>

<style lang="scss" scoped>
	*{margin:0;padding:0;}
	.clear:after{
		content:"";
		display:block;
		clear:both;
	}
	 ul{
		margin-top:20px;
		width:100%;
		padding:2px;
		li{
			width:80%;
			height:200px;
			img{
				width:130px;
				height:150px;
			}
			.right{
				float:right;width:100px;
			}
		}
	} 

</style>